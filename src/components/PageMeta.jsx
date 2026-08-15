import { useEffect } from "react";

const PageMeta = ({ title, description, robots = "index, follow" }) => {
    useEffect(() => {
        document.title = title;

        const setMeta = (name, content) => {
            let element = document.querySelector(`meta[name="${name}"]`);
            if (!element) {
                element = document.createElement("meta");
                element.setAttribute("name", name);
                document.head.appendChild(element);
            }
            element.setAttribute("content", content);
        };

        setMeta("description", description);
        setMeta("robots", robots);
    }, [description, robots, title]);

    return null;
};

export default PageMeta;
