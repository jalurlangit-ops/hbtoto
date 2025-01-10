'use client';

import { Inter } from 'next/font/google';
import './globals.css';

const nameDomain = "https://www.myphamtrangdahcm.com";

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
});

function rank() {
    return {
      __html: `{
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "https://www.myphamtrangdahcm.com",
    "operatingSystem": "ANDROID",
    "applicationCategory": "GameApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "7143729"
    },
	"review": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          },
	"author": {
            "@type": "Person",
            "name": "Hbtoto : Slot Bonus New Member 100 Di Awal Tanpa Deposit Dan Slot Bonus 100 Di Depan",
            "reviewBody": "Hbtoto menawarkan pengalaman bermain slot yang luar biasa dengan memberikan bonus yang menguntungkan untuk para pemain baru. Sebagai anggota baru, Anda dapat menikmati Slot Bonus New Member 100 di Awal Tanpa Deposit, yang memungkinkan Anda untuk langsung merasakan keseruan bermain tanpa perlu melakukan deposit terlebih dahulu"
          }
        },
    "offers": {
      "@type": "Offer",
      "price": "10000",
      "priceCurrency": "IDR"
    }
  }
  `,
    };
  }

function histats() {
    return {
      __html: `
        var _Hasync= _Hasync|| [];
        _Hasync.push(['Histats.start', '1,4921005,4,5,172,25,00010000']);
        _Hasync.push(['Histats.fasi', '1']);
        _Hasync.push(['Histats.track_hits', '']);
        (function() {
        var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
        hs.src = ('//s10.histats.com/js15_as.js');
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
        })();
      `,
    };
  };

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-browser="chrome">
      <head>
        <title>Hbtoto : Slot Bonus New Member 100 Di Awal Tanpa Deposit Dan Slot Bonus 100 Di Depan</title>
        <meta name="description" content="Hbtoto menawarkan pengalaman bermain slot yang luar biasa dengan memberikan bonus yang menguntungkan untuk para pemain baru. Sebagai anggota baru, Anda dapat menikmati Slot Bonus New Member 100 di Awal Tanpa Deposit, yang memungkinkan Anda untuk langsung merasakan keseruan bermain tanpa perlu melakukan deposit terlebih dahulu" />
        <meta name="keywords" content="Hbtoto, Slot Bonus New Member 100, Deposit Dan Slot Bonus 100, Situs Judi Online Terpercaya, Deposit Via Dana, Link Alternatif Slot Online, Link Alternatif Slot, Slot Online Deposit Pulsa, Bandarqq Alternatif" />
        <meta name="google-site-verification" content="ty9sg0C6kHCwjCjocgdNd-9kUiDTaKXPaWV2t246yqo" />
        <meta name="application-name" content="hbtoto" />
        <link rel="author" href={nameDomain} />
        <link rel="canonical" href={nameDomain} />
        <meta name="author" content="hbtoto" />
        <meta name="publisher" content="hbtoto" />
        <meta name="copyright" content="hbtoto" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="category" content="slot" />
        <meta name="geo.region" content="ID" />
        <meta name="geo.placename" content="Indonesia" />
        <meta name="language" content="id-ID" />
        <meta name="rating" content="general" />
        <meta name="geo.country" content="ID" />
        <meta name="page-locale" content="id,en" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="distribution" content="global" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta property="og:title" content="Hbtoto : Slot Bonus New Member 100 Di Awal Tanpa Deposit Dan Slot Bonus 100 Di Depan" />
        <meta property="og:description" content="Hbtoto menawarkan pengalaman bermain slot yang luar biasa dengan memberikan bonus yang menguntungkan untuk para pemain baru. Sebagai anggota baru, Anda dapat menikmati Slot Bonus New Member 100 di Awal Tanpa Deposit, yang memungkinkan Anda untuk langsung merasakan keseruan bermain tanpa perlu melakukan deposit terlebih dahulu" />
        <meta property="og:url" content={nameDomain} />
        <meta property="og:site_name" content="hbtoto" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:image" content={nameDomain} />
        <meta property="og:image:width" content="840" />
        <meta property="og:image:height" content="480" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="hbtoto" />
        <meta name="twitter:title" content="Hbtoto : Slot Bonus New Member 100 Di Awal Tanpa Deposit Dan Slot Bonus 100 Di Depan" />
        <meta name="twitter:description" content="Hbtoto menawarkan pengalaman bermain slot yang luar biasa dengan memberikan bonus yang menguntungkan untuk para pemain baru. Sebagai anggota baru, Anda dapat menikmati Slot Bonus New Member 100 di Awal Tanpa Deposit, yang memungkinkan Anda untuk langsung merasakan keseruan bermain tanpa perlu melakukan deposit terlebih dahulu" />
        <meta name="twitter:image" content={nameDomain} />
        <link rel="icon" href="/favicon.ico?favicon.088e6c96.ico" sizes="256x256" type="image/x-icon" />
        <meta name="next-size-adjust" content="" />
        <script type="application/ld+json" dangerouslySetInnerHTML={rank()} key="product-jsonld" />
        <script dangerouslySetInnerHTML={histats()} type="text/javascript" />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
