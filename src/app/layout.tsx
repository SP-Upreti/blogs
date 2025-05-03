import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "./next-theme-provider";
import Script from "next/script"; // 💡 Import Script from next

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        {/* ✅ Load GA script async */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GMTSQ2EDLY"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GMTSQ2EDLY', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        {/* Basic Meta */}
        <title>Notedown || The Quiet Corner of a Loud Internet.</title>
        <meta name="description" content="Notedown is your go-to space for thoughts, tutorials, stories, and inspiration across tech, lifestyle, productivity, creativity, and more." />
        <meta name="keywords" content="Notedown, blogs, tech blogs, life stories, tutorials, productivity, creativity, multi-topic blog, Surendra blog, random blogs, blog site" />
        <meta name="author" content="Surendra Dai" />

        {/* Viewport for responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph for Facebook & LinkedIn */}
        <meta property="og:title" content="Notedown | Blogs That Resonate" />
        <meta property="og:description" content="Explore all kinds of blogs—from tech to travel, mindset to memes. Welcome to Notedown, where every thought finds a place." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://notedown.com" />
        <meta property="og:image" content="https://notedown.com/cover.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Notedown | Blogs That Resonate" />
        <meta name="twitter:description" content="Explore stories and ideas from every corner of life. Code, creativity, culture—everything's Notedown." />
        <meta name="twitter:image" content="https://notedown.com/cover.jpg" />
        <meta name="twitter:creator" content="@yourTwitterHandle" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Canonical link */}
        <link rel="canonical" href="https://notedown.com" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
