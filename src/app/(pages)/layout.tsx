import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/(pages)/globals.css";
import "@/app/assets/common.scss"
import "@/app/assets/sub.scss"
import Script from "next/script";

const pretendard = localFont({
  src: "../fonts/Pretendard-Regular.woff",
  variable: "--font-pretendard-sans",
  weight: "400",
});

export const metadata: Metadata = {
  title: "HI-LEX Daedong Door",
  description: "Automotive Door System World Leader",
  keywords: ["automotive", "door system", "HI-LEX Door", "Daedong", "car parts"],
  authors: [{ name: "HI-LEX Daedong Door", url: "https://hi-lexdoor.com" }],
  openGraph: {
    title: "HI-LEX Daedong Door",
    description: "Global leader in automotive door systems",
    url: "https://hi-lexdoor.com",
    siteName: "HI-LEX Daedong Door",
    images: [
      {
        url: "https://hi-lexdoor.com/og-image.jpg", // 대표 이미지
        width: 1200,
        height: 630,
        alt: "HI-LEX Daedong Door Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HI-LEX Daedong Door",
    description: "Automotive Door System World Leader",
    images: ["https://hi-lexdoor.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
          {/* Google tag (gtag.js) */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-F0XV21B1ST"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-F0XV21B1ST');
              `}
          </Script>
        </head>

      <body className={`${pretendard.variable}`}>
        {children}
      </body>
    </html>
  );
}
