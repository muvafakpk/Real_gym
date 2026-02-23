import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
}

export function SEO({
  title = "The Real Gym - Transform Your Body, Transform Your Life",
  description = "North Malabar's premier fitness destination with 6400+ sq. ft. of world-class equipment, 8+ certified trainers, and comprehensive fitness programs including Personal Training, Weight Loss, Muscle Building, and Group Classes.",
  keywords = "gym, fitness, workout, personal training, weight loss, muscle building, North Malabar, Kerala, Zumba, Aerobics, Tabata, gym near me, fitness center",
  image,
}: SEOProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Set meta tags
    const metaTags = [
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ];

    if (image) {
      metaTags.push(
        { property: "og:image", content: image },
        { name: "twitter:image", content: image }
      );
    }

    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let element = document.querySelector(selector);

      if (!element) {
        element = document.createElement("meta");
        if (name) element.setAttribute("name", name);
        if (property) element.setAttribute("property", property);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    });
  }, [title, description, keywords, image]);

  return null;
}
