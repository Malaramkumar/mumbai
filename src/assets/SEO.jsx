import React from "react";
import { Helmet } from "react-helmet";

const BASE_URL = "https://www.narpavitechmumbai.in";
const DEFAULT_IMAGE = `${BASE_URL}/images/narpavi_logo.png`;
const DEFAULT_DESCRIPTION =
  "Narpavi Research Institute — Empowering scholars through expert research guidance, publication support, and post-PhD career mentoring.";
const DEFAULT_KEYWORDS = [
  "PhD guidance",
  "research support",
  "Narpavi Research Institute",
  "academic writing",
  "publication support",
  "PhD in India",
  "Project Center in Mumbai",
  "IEEE Projects Mumbai",
  "Final Year Projects Mumbai", 
  "Research Support Mumbai", 
  "Journal Publication Mumbai", 
  "Narpavi Tech Mumbai",
  "Narpavi Technologies Mumbai",
];

const SEO = ({
  title,
  description,
  url,
  image,
  schemaType,
  schemaData,
  keywords,
  faqs, // 👈 New prop to auto-build FAQ schema
}) => {
  const pageTitle =
    title || "Narpavi Research Institute | Empowering Research Excellence || ";
  const pageDescription = description || DEFAULT_DESCRIPTION;
  const pageUrl = url ? `${BASE_URL}${url}` : BASE_URL;
  const pageImage = image ? `${BASE_URL}${image}` : DEFAULT_IMAGE;

  // ✅ Handle both array or string for keywords
  const pageKeywords = Array.isArray(keywords)
    ? keywords.join(", ")
    : keywords || DEFAULT_KEYWORDS.join(", ");

  // 🧩 Initialize structured data
  let structuredData = null;

  // ✅ Case 1: Manually passed schema
  if (schemaType && schemaData) {
    structuredData = {
      "@context": "https://schema.org",
      "@type": schemaType,
      ...schemaData,
    };
  }

  // ✅ Case 2: Auto-generate FAQ schema if faqs array is passed
  else if (faqs && faqs.length > 0) {
    structuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    };
  }

  return (
    <Helmet>
      {/* 🏷️ Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={pageUrl} />

      {/* 🌐 Open Graph / Facebook / LinkedIn */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:title" content="Narpavi Tech Mumbai — Narpavi Research Institute" />


      {/* 🐦 Twitter / X Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />

      {/* 🧩 Favicon */}
      <link rel="icon" type="image/png" href="/src/images/narpavi_logo.png" />

      {/* 🧠 JSON-LD Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
