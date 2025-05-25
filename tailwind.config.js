export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                coffeeGold: "#FFC107",
                coffeeGoldDark: "#e6ac00",
                cream: "#f1dabf",
                darkGray: "#1a1f25",
                lightGray: "#272c35",
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    sm: "2rem",
                },
            },
        },
    },
    plugins: [],
}
