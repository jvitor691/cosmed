import { useEffect, useRef } from "react";
import "./wordGlobe.css";

const WordGlobe = ({
    word = "COSMED   ",
    color = "#f3e411ff",
    speed = 5,
    fontSize = 10,
}) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        let animationFrame;
        let rotation = 0;
        let visible = true;

        const points = [];

        /*
          Quantidade de linhas e palavras
          que formam a esfera
        */

        const rows = 19;
        const columns = 30;

        for (let row = 0; row < rows; row++) {
            const phi =
                Math.PI *
                (row / (rows - 1) - 0.5);

            for (
                let column = 0;
                column < columns;
                column++
            ) {
                const theta =
                    (column / columns) *
                    Math.PI *
                    2;

                points.push({
                    theta,
                    phi,
                });
            }
        }

        const resize = () => {
            const rect =
                canvas.getBoundingClientRect();

            const dpr = Math.min(
                window.devicePixelRatio || 1,
                2
            );

            canvas.width =
                rect.width * dpr;

            canvas.height =
                rect.height * dpr;

            ctx.setTransform(
                dpr,
                0,
                0,
                dpr,
                0,
                0
            );
        };

        const observer =
            new IntersectionObserver(
                ([entry]) => {
                    visible =
                        entry.isIntersecting;
                },
                {
                    threshold: 0.1,
                }
            );

        observer.observe(canvas);

        const reducedMotion =
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            );

        const draw = () => {
            const width =
                canvas.clientWidth;

            const height =
                canvas.clientHeight;

            ctx.clearRect(
                0,
                0,
                width,
                height
            );

            if (!reducedMotion.matches) {
                rotation += speed * 0.01;
            }

            const radius =
                Math.min(
                    width,
                    height
                ) * 0.40;

            const centerX =
                width / 2;

            const centerY =
                height / 2;

            const projected =
                points.map((point) => {
                    const theta =
                        point.theta +
                        rotation;

                    /*
                      Esfera 3D
                    */

                    const x =
                        Math.cos(point.phi) *
                        Math.sin(theta);

                    const y =
                        Math.sin(point.phi);

                    const z =
                        Math.cos(point.phi) *
                        Math.cos(theta);

                    /*
                      Perspectiva
                    */

                    const perspective =
                        2.8 /
                        (3.4 - z);

                    return {
                        x:
                            centerX +
                            x *
                            radius *
                            perspective,

                        y:
                            centerY +
                            y *
                            radius *
                            perspective,

                        z,

                        perspective,
                    };
                });

            /*
              desenha primeiro o fundo
              e depois a frente
            */

            projected.sort(
                (a, b) =>
                    a.z - b.z
            );

            projected.forEach(
                (point) => {
                    const depth =
                        (point.z + 1) / 2;

                    const opacity =
                        0.08 +
                        depth * 0.72;

                    const size =
                        fontSize *
                        point.perspective;

                    ctx.save();

                    ctx.globalAlpha =
                        opacity;

                    ctx.fillStyle =
                        color;

                    ctx.font = `
            700 ${size}px
            Inter,
            sans-serif
          `;

                    ctx.textAlign =
                        "center";

                    ctx.textBaseline =
                        "middle";

                    ctx.fillText(
                        word,
                        point.x,
                        point.y
                    );

                    ctx.restore();
                }
            );

            if (visible) {
                animationFrame =
                    requestAnimationFrame(
                        draw
                    );
            }
        };

        const handleVisibility =
            () => {
                if (visible) {
                    cancelAnimationFrame(
                        animationFrame
                    );

                    animationFrame =
                        requestAnimationFrame(
                            draw
                        );
                }
            };

        const resizeObserver =
            new ResizeObserver(() => {
                resize();
            });

        resizeObserver.observe(
            canvas
        );

        resize();

        animationFrame =
            requestAnimationFrame(
                draw
            );

        observer.disconnect();

        const visibilityObserver =
            new IntersectionObserver(
                ([entry]) => {
                    visible =
                        entry.isIntersecting;

                    if (visible) {
                        handleVisibility();
                    } else {
                        cancelAnimationFrame(
                            animationFrame
                        );
                    }
                }
            );

        visibilityObserver.observe(
            canvas
        );

        return () => {
            cancelAnimationFrame(
                animationFrame
            );

            resizeObserver.disconnect();

            visibilityObserver.disconnect();
        };
    }, [
        word,
        color,
        speed,
        fontSize,
    ]);

    return (
        <div
            className="word-globe"
            aria-hidden="true"
        >
            <canvas
                ref={canvasRef}
                className="word-globe-canvas"
            />
        </div>
    );
};

export default WordGlobe;