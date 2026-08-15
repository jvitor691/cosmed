import { useEffect, useRef, useState } from "react";
import "./roundCarousel.css";

const RoundCarousel = ({
  images = [],
  imageWidth = 280,
  imageHeight = 400,
  spacing = 2.2,
  speed = 7,
  direction = "right",
  drag = true,
  sensitivity = 1.4,
  tilt = -5,
  perspective = 1800,
  cornerRadius = 18,
}) => {
  const ringRef = useRef(null);
  const rafRef = useRef(null);
  const rotationRef = useRef(0);
  const velocityRef = useRef(0);
  const lastTimeRef = useRef(0);

  const dragRef = useRef({
    active: false,
    x: 0,
  });

  const [paused, setPaused] = useState(false);

  const count = images.length;
  const safeCount = Math.max(count, 1);
  const angle = 360 / safeCount;

  const factor = 1 + spacing * 0.15;

  const radius =
    (imageWidth * factor) /
    (2 * Math.tan(Math.PI / safeCount));

  const degreesPerSecond =
    speed * 6 * (direction === "left" ? -1 : 1);

  useEffect(() => {
    const ring = ringRef.current;

    if (!ring) return;

    const applyRotation = () => {
      ring.style.transform = `
        translateZ(${-radius}px)
        rotateY(${rotationRef.current}deg)
      `;
    };

    applyRotation();

    const animate = (time) => {
      const delta = lastTimeRef.current
        ? (time - lastTimeRef.current) / 1000
        : 0;

      lastTimeRef.current = time;

      const safeDelta = Math.min(delta, 0.1);

      if (!dragRef.current.active && !paused) {
        if (Math.abs(velocityRef.current) > 0.01) {
          rotationRef.current +=
            velocityRef.current * safeDelta;

          velocityRef.current *= 0.94;
        } else {
          rotationRef.current +=
            degreesPerSecond * safeDelta;
        }
      }

      applyRotation();

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, [radius, degreesPerSecond, paused]);

  if (!count) return null;

  const handlePointerDown = (event) => {
    if (!drag) return;

    event.currentTarget.setPointerCapture?.(
      event.pointerId
    );

    dragRef.current = {
      active: true,
      x: event.clientX,
    };

    velocityRef.current = 0;
  };

  const handlePointerMove = (event) => {
    if (!dragRef.current.active) return;

    const deltaX =
      event.clientX - dragRef.current.x;

    dragRef.current.x = event.clientX;

    const multiplier = 0.3 * sensitivity;

    rotationRef.current += deltaX * multiplier;

    velocityRef.current =
      deltaX * multiplier * 60;
  };

  const handlePointerUp = (event) => {
    event.currentTarget.releasePointerCapture?.(
      event.pointerId
    );

    dragRef.current.active = false;
  };

  return (
    <div
      className="round-carousel"
      style={{
        perspective: `${perspective}px`,
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="round-carousel-tilt"
        style={{
          transform: `rotateX(${tilt}deg)`,
        }}
      >
        <div
          ref={ringRef}
          className="round-carousel-ring"
          style={{
            width: imageWidth,
            height: imageHeight,
          }}
        >
          {images.map((item, index) => (
            <div
              className="round-carousel-item"
              key={item.title || index}
              style={{
                transform: `
                  rotateY(${index * angle}deg)
                  translateZ(${radius}px)
                `,
              }}
            >
              <div
                className="round-carousel-card"
                style={{
                  borderRadius: cornerRadius,
                }}
              >
                <span className="round-carousel-tag">
                  PÁGINA REAL
                </span>

                <img
                  src={item.image}
                  alt={item.title}
                  draggable="false"
                  loading="lazy"
                />

                <div className="round-carousel-caption">
                  {item.title}
                </div>
              </div>

              <div
                className="round-carousel-card round-carousel-back"
                style={{
                  borderRadius: cornerRadius,
                }}
              >
                <img
                  src={item.image}
                  alt=""
                  draggable="false"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="round-carousel-help">
        Arraste para explorar as páginas
      </p>
    </div>
  );
};

export default RoundCarousel;
