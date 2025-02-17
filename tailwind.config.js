/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
		extend: {
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					1: "hsl(var(--chart-1))",
					2: "hsl(var(--chart-2))",
					3: "hsl(var(--chart-3))",
					4: "hsl(var(--chart-4))",
					5: "hsl(var(--chart-5))",
				},
				tint: {
					50: "#E5F0FD",
					100: "#BFD9FA",
					200: "#80B4F4",
					300: "#408EEF",
				},
				shade: {
					100: "#0053BA",
					200: "#003E8C",
					300: "#002A5D",
				},
				grey: {
					50: "#F1F4F9",
					100: "#E2E2E5",
					200: "#C5C5CB",
					300: "#A9A8B1",
					400: "#8C8A96",
					500: "#666D80",
					600: "#525062",
					700: "#3E3C4A",
					800: "#292831",
					900: "#0D0D12",
				},
				secondary: "#E7F0FF",
				primary: "#2075FF",
				sidebar: {
					DEFAULT: "hsl(var(--sidebar-background))",
					foreground: "hsl(var(--sidebar-foreground))",
					primary: "hsl(var(--sidebar-primary))",
					"primary-foreground":
						"hsl(var(--sidebar-primary-foreground))",
					accent: "hsl(var(--sidebar-accent))",
					"accent-foreground":
						"hsl(var(--sidebar-accent-foreground))",
					border: "hsl(var(--sidebar-border))",
					ring: "hsl(var(--sidebar-ring))",
				},
			},
			fontFamily: {
				primary: "var(--primary-font-family)",
				secondary: "var(--secondary-font-family)",
			},
			fontSize: {
				20: "20px",
				24: "24px",
				28: "28px",
				32: "32px",
				36: "36px",
			},
			screens: {
				sm: "400px",
				md: "640px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1536px",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
