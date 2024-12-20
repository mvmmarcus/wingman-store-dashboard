import plugin from "tailwindcss/plugin";

export const shadcnPlugin = plugin(
  function ({ addBase }) {
    addBase({
      ":root": {
        "--primary": "#115E56",
        "--secondary": "#CCFBEF",
        "--third": "#667085",
        "--black": "#212636",
        "--gray": "#8A94A6",
        "--gray-light": "#C4C4C4",
        "--yellow": "#FFF3C6",
        "--background": "#ffffff",
        "--success": "#15B79F",
        "--error": "#F04438",
        "--foreground": "240 10% 3.9%",
        "--card": "0 0% 100%",
        "--card-foreground": "240 10% 3.9%",
        "--popover": "#ffffff",
        "--popover-foreground": "#115E56",
        "--primary-foreground": "0 0% 98%",
        "--secondary-foreground": "240 5.9% 10%",
        "--muted": "240 4.8% 95.9%",
        "--muted-foreground": "#667085",
        "--accent": "240 4.8% 95.9%",
        "--accent-foreground": "240 5.9% 10%",
        "--destructive": "0 84.2% 60.2%",
        "--destructive-foreground": "0 0% 98%",
        "--border": "#DCDFE4",
        "--input": "240 5.9% 90%",
        "--ring": "240 10% 3.9%",
        "--chart-1": "12 76% 61%",
        "--chart-2": "173 58% 39%",
        "--chart-3": "197 37% 24%",
        "--chart-4": "43 74% 66%",
        "--chart-5": "27 87% 67%",
        "--radius": "0.5rem",
        "--table-header": "#F9FAFB",
        "--sidebar-background": "#115E56",
        "--sidebar-accent": "#ffffff",
        "--sidebar-primary-foreground": "#115E56",
        "--sidebar-accent-foreground": "#CCFBEF",
        "--sidebar-border": "#134E48",
      },
    });
    addBase({
      html: {
        "@apply font-medium": {},
      },

      ".text-default": {
        "@apply text-xl leading-snug dark:text-zinc-400 text-black": {},
      },
      ".text-title": {
        " @apply text-6xl leading-tight font-medium text-black": {},
      },
      // "::-webkit-scrollbar": {
      //   width: "0",
      // },
      pre: {
        "white-space": "pre-wrap",
        "word-wrap": "break-word",
      },
    });
  },
  {
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: "var(--primary)",
            foreground: "var(--primary-foreground)",
          },
          secondary: {
            DEFAULT: "var(--secondary)",
            foreground: "var(--secondary-foreground)",
          },
          third: {
            DEFAULT: "var(--third)",
          },
          black: {
            DEFAULT: "var(--black)",
          },
          gray: {
            DEFAULT: "var(--gray)",
            light: "var(--gray-light)",
          },
          yellow: {
            DEFAULT: "var(--yellow)",
          },
          success: {
            DEFAULT: "var(--success)",
          },
          error: {
            DEFAULT: "var(--error)",
          },
          background: "var(--background)",
          foreground: "var(--foreground)",
          card: {
            DEFAULT: "var(--card)",
            foreground: "var(--card-foreground)",
          },
          popover: {
            DEFAULT: "var(--popover)",
            foreground: "var(--popover-foreground)",
          },
          muted: {
            DEFAULT: "var(--muted)",
            foreground: "var(--muted-foreground)",
          },
          accent: {
            DEFAULT: "var(--accent)",
            foreground: "var(--accent-foreground)",
          },
          destructive: {
            DEFAULT: "var(--destructive)",
            foreground: "var(--destructive-foreground)",
          },
          border: "var(--border)",
          input: "var(--input)",
          ring: "var(--ring)",
          chart: {
            "1": "var(--chart-1)",
            "2": "var(--chart-2)",
            "3": "var(--chart-3)",
            "4": "var(--chart-4)",
            "5": "var(--chart-5)",
          },
          table: {
            header: "var(--table-header)",
          },
          sidebar: {
            DEFAULT: "var(--sidebar-background)",
            foreground: "var(--sidebar-foreground)",
            primary: "var(--sidebar-primary)",
            "primary-foreground": "var(--sidebar-primary-foreground)",
            accent: "var(--sidebar-accent)",
            "accent-foreground": "var(--sidebar-accent-foreground)",
            border: "var(--sidebar-border)",
            ring: "var(--sidebar-ring)",
          },
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1260px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
);
