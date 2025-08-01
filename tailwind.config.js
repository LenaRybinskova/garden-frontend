const config = {
  darkMode: ['class'], // для смены тем
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,jsx,ts,tsx,html}',
    './src/**/*.{ts,tsx}',
    '*.{js,ts,jsx,tsx,mdx}',
    './styles.scss',
    './stories/**/*.{js,ts,jsx,tsx}',
  ],
  prefix: '', // если prefix: 'tw-' то классы будут генерир .tw-text-left .tw-text-right
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        // Природа-палитра
        beige: 'var(--nature-beige)',
        lightGreen: 'var(--nature-light-green)',
        sage: 'var(--nature-sage)',
        forest: 'var(--nature-forest)',
        earth: 'var(--nature-earth)',
      },
      fontFamily: {
        sans: 'var(--font-main)',
      },
      fontSize: {
        base: 'var(--font-size-base)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      /*            keyframes: {
                            "accordion-down": {
                                from: { height: "0" },
                                to: { height: "var(--radix-accordion-content-height)" },
                            },
                            "accordion-up": {
                                from: { height: "var(--radix-accordion-content-height)" },
                                to: { height: "0" },
                            },
                        },*/
      /* animation: {
                 "accordion-down": "accordion-down 0.2s ease-out",
                 "accordion-up": "accordion-up 0.2s ease-out",
             },*/
    },
  },
  /*    plugins: [require("tailwindcss-animate")],*/
};

export default config;
