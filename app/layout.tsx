import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#f8f9fa",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://srikaralogistics.com"),
  title: {
    default: "Srikara Logistics | Corporate Mobility & Excellence",
    template: "%s | Srikara Logistics"
  },
  description: "Premier corporate mobility and logistics solutions in Hyderabad. Specialized in Employee Transportation, Car Rentals, and Tour & Travels since 2012.",
  keywords: ["corporate mobility", "employee transportation Hyderabad", "car rental Hyderabad", "logistics solutions", "Srikara Logistics", "enterprise transport"],
  authors: [{ name: "Srikara Logistics" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://srikaralogistics.com",
    siteName: "Srikara Logistics",
    images: [{
      url: "/assets/logo.png",
      width: 1200,
      height: 630,
      alt: "Srikara Logistics - Corporate Mobility Excellence"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Srikara Logistics | Corporate Mobility & Excellence",
    description: "Premier corporate mobility solutions in Hyderabad. Reliable, safe, and scalable logistics.",
    images: ["/assets/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/assets/logo.png",
    shortcut: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Srikara Logistics",
    "url": "https://srikaralogistics.com",
    "logo": "https://srikaralogistics.com/assets/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-88979-25656",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://facebook.com/srikaralogistics",
      "https://instagram.com/srikaralogistics",
      "https://twitter.com/srikaralogistics"
    ]
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <WhatsAppButton />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
