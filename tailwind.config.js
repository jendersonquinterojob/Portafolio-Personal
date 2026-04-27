tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "on-error": "#ffffff",
                "on-surface": "#0b1c30",
                "surface-container-lowest": "#ffffff",
                "on-secondary-fixed": "#140067",
                "inverse-surface": "#213145",
                "primary-container": "#1e293b",
                "primary-fixed": "#d8e3fb",
                "on-tertiary-container": "#888fa7",
                "on-secondary": "#ffffff",
                "on-surface-variant": "#45474c",
                "tertiary-fixed-dim": "#bec6e0",
                "on-tertiary-fixed": "#131b2e",
                "background": "#f8f9ff",
                "secondary-fixed": "#e3dfff",
                "primary": "#091426",
                "surface-dim": "#cbdbf5",
                "inverse-primary": "#bcc7de",
                "surface": "#f8f9ff",
                "tertiary": "#0b1426",
                "on-secondary-fixed-variant": "#3f31ad",
                "on-error-container": "#93000a",
                "tertiary-container": "#20283c",
                "surface-bright": "#f8f9ff",
                "secondary-container": "#8d84ff",
                "surface-tint": "#545f73",
                "on-tertiary-fixed-variant": "#3f465c",
                "surface-container-low": "#eff4ff",
                "on-primary-fixed": "#111c2d",
                "surface-container-high": "#dce9ff",
                "on-secondary-container": "#220393",
                "secondary": "#574cc5",
                "error": "#ba1a1a",
                "secondary-fixed-dim": "#c5c0ff",
                "on-primary-fixed-variant": "#3c475a",
                "on-primary": "#ffffff",
                "surface-container-highest": "#d3e4fe",
                "on-primary-container": "#8590a6",
                "on-tertiary": "#ffffff",
                "outline-variant": "#c5c6cd",
                "outline": "#75777d",
                "surface-container": "#e5eeff",
                "inverse-on-surface": "#eaf1ff",
                "primary-fixed-dim": "#bcc7de",
                "tertiary-fixed": "#dae2fd",
                "error-container": "#ffdad6",
                "on-background": "#0b1c30",
                "surface-variant": "#d3e4fe"
            },
            "borderRadius": {
                "DEFAULT": "0.125rem",
                "lg": "0.25rem",
                "xl": "0.5rem",
                "full": "0.75rem"
            },
            "spacing": {
                "stack-sm": "0.5rem",
                "gutter": "2rem",
                "stack-lg": "2rem",
                "container-max": "1200px",
                "section-gap": "8rem",
                "stack-md": "1rem"
            },
            "fontFamily": {
                "h3": ["Inter"],
                "h1": ["Inter"],
                "body-lg": ["Inter"],
                "body-base": ["Inter"],
                "label-pill": ["Inter"],
                "code": ["monospace"],
                "h2": ["Inter"]
            },
            "fontSize": {
                "h3": ["1.5rem", { "lineHeight": "1.4", "fontWeight": "600" }],
                "h1": ["3.75rem", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                "body-lg": ["1.125rem", { "lineHeight": "1.7", "fontWeight": "400" }],
                "body-base": ["1rem", { "lineHeight": "1.6", "fontWeight": "400" }],
                "label-pill": ["0.875rem", { "lineHeight": "1", "letterSpacing": "0.01em", "fontWeight": "500" }],
                "code": ["0.9rem", { "lineHeight": "1.5", "fontWeight": "400" }],
                "h2": ["2.25rem", { "lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "600" }]
            }
        }
    }
};
