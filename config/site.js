module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title:
    "Bringing locals and businesses together during the COVID-19 epidemic.", // Navigation and Site Title
  titleAlt:
    "Bringing locals and businesses together during the COVID-19 epidemic.", // Title for JSONLD
  description:
    "A site where locals can browse and gain insight on what local businesses sell and how to help.",
  url: "https://supportlocalqc.com", // Domain of your site. No trailing slash!
  siteUrl: "https://supportlocalqc.com", // url + pathPrefix
  siteLanguage: "en", // Language Tag on <html> element
  logo: "static/logo/logo.png", // Used for SEO
  banner: "static/logo/banner.png",
  // JSONLD / Manifest
  favicon: "static/logo/favicon.png", // Used for manifest favicon generation
  shortName: "QCSupport", // shortname for manifest. MUST be shorter than 12 characters
  author: "Michael Liendo", // Author for schemaORGJSONLD
  themeColor: "#3e7bf2",
  backgroundColor: "#d3e0ff",
  twitter: "@mtliendo", // Twitter Username
}
