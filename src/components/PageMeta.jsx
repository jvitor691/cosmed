import { useEffect } from "react";

const SITE_URL = "https://cosmed-phi.vercel.app";
const SOCIAL_IMAGE_URL = `${SITE_URL}/og-cosmed.png`;
const SOCIAL_IMAGE_ALT = "Guia de Estudos COSMED para o ENEM 2026";
const PUBLIC_ROUTES = new Set([
    "/",
    "/politica-de-privacidade",
    "/termos-de-uso",
    "/politica-de-cookies",
    "/canal-de-denuncias",
]);

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

        const setPropertyMeta = (property, content) => {
            const elements = [
                ...document.querySelectorAll(`meta[property="${property}"]`),
            ];
            let element = elements.shift();
            elements.forEach((duplicate) => duplicate.remove());

            if (!element) {
                element = document.createElement("meta");
                element.setAttribute("property", property);
                document.head.appendChild(element);
            }

            element.setAttribute("content", content);
        };

        setMeta("description", description);
        setMeta("robots", robots);

        const path = window.location.pathname;
        const canonicalUrl = PUBLIC_ROUTES.has(path)
            ? `${SITE_URL}${path}`
            : null;

        const canonicalElements = [
            ...document.querySelectorAll('link[rel="canonical"]'),
        ];
        const canonical = canonicalElements.shift();
        canonicalElements.forEach((element) => element.remove());

        const ogUrlElements = [
            ...document.querySelectorAll('meta[property="og:url"]'),
        ];
        const ogUrl = ogUrlElements.shift();
        ogUrlElements.forEach((element) => element.remove());

        if (canonicalUrl) {
            const canonicalElement = canonical || document.createElement("link");
            canonicalElement.setAttribute("rel", "canonical");
            canonicalElement.setAttribute("href", canonicalUrl);
            if (!canonical) document.head.appendChild(canonicalElement);

            const ogUrlElement = ogUrl || document.createElement("meta");
            ogUrlElement.setAttribute("property", "og:url");
            ogUrlElement.setAttribute("content", canonicalUrl);
            if (!ogUrl) document.head.appendChild(ogUrlElement);

            setPropertyMeta("og:image", SOCIAL_IMAGE_URL);
            setPropertyMeta("og:image:type", "image/png");
            setPropertyMeta("og:image:width", "1731");
            setPropertyMeta("og:image:height", "909");
            setPropertyMeta("og:image:alt", SOCIAL_IMAGE_ALT);
            setMeta("twitter:image", SOCIAL_IMAGE_URL);
            setMeta("twitter:image:alt", SOCIAL_IMAGE_ALT);
        } else {
            canonical?.remove();
            ogUrl?.remove();
            document
                .querySelectorAll('meta[property^="og:image"]')
                .forEach((element) => element.remove());
            document
                .querySelectorAll(
                    'meta[name="twitter:image"], meta[name="twitter:image:alt"]',
                )
                .forEach((element) => element.remove());
        }
    }, [description, robots, title]);

    return null;
};

export default PageMeta;
