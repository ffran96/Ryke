import Videos from "./data/Videobook";

const baseUrl = "https://www.enriqueferri.com";

export default function sitemap() {
  const now = new Date();

  const videoPages = Videos.map(({ slug }) => ({
    url: `${baseUrl}/ultimos-trabajos/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...videoPages,
  ];
}
