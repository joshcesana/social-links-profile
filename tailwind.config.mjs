/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
            fontSize: {
                "preset-2": ["0.875rem", "1.5"],
                "preset-1": ["1.5rem", "1.5"],
            },
            width: {
                22: "5.5rem", // 88px
            },
            colors: {
                grey: {
                    900: "#141414",
                    800: "#1F1F1F",
                    700: "#333333",
                },
                green: "#C4F82A",
            },
            spacing: {
                500: "2.5rem",
                300: "1.5rem",
                200: "1rem",
                150: "0.75rem",
                100: "0.5rem",
                50: "0.25rem",
            },
        },
    },
    plugins: [],
}
