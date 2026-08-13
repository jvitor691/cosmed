import { useEffect, useRef, useState } from "react";
import "./focusReveal.css";

const FocusReveal = ({
    text,
    as: Tag = "h2",
    className = "",
    blur = 18,
    stagger = 35,
}) => {
    const elementRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const element = elementRef.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            },
            {
                threshold: 0.35,
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, []);

    const words = text.split(" ");

    let characterIndex = 0;

    return (
        <Tag
            ref={elementRef}
            className={`focus-reveal ${className}`}
            aria-label={text}
        >
            {words.map((word, wordIndex) => {
                return (
                    <span
                        className="focus-reveal-word"
                        key={`${word}-${wordIndex}`}
                        aria-hidden="true"
                    >
                        {word.split("").map((char, index) => {
                            const currentIndex = characterIndex++;

                            return (
                                <span
                                    key={`${char}-${index}`}
                                    className={`focus-reveal-char ${visible ? "is-visible" : ""
                                        }`}
                                    style={{
                                        "--focus-delay": `${currentIndex * stagger}ms`,
                                        "--focus-blur": `${blur}px`,
                                    }}
                                >
                                    {char}
                                </span>
                            );
                        })}

                        {wordIndex < words.length - 1 && (
                            <span className="focus-reveal-space">
                                &nbsp;
                            </span>
                        )}
                    </span>
                );
            })}
        </Tag>
    );
};

export default FocusReveal;