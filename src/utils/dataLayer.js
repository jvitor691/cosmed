export const pushDataLayerEvent = (event, payload = {}) => {
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
        event,
        ...payload,
    });
};

export const updateConsent = ({ analytics, advertising }) => {
    window.dataLayer = window.dataLayer || [];

    const consentState = {
        ad_storage: advertising ? "granted" : "denied",
        analytics_storage: analytics ? "granted" : "denied",
        ad_user_data: advertising ? "granted" : "denied",
        ad_personalization: advertising ? "granted" : "denied",
    };

    if (typeof window.gtag === "function") {
        window.gtag("consent", "update", consentState);
    } else {
        window.dataLayer.push(["consent", "update", consentState]);
    }

    pushDataLayerEvent("cosmed_consent_update", {
        consent_analytics: analytics,
        consent_advertising: advertising,
    });
};
