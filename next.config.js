/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  reactStrictMode: true,
  images: {
    domains: [
      "www.digikala.com",
      "dkstatics-public.digikala.com",
      "iili.io",
      "digikala.arvanvod.com",
      "encrypted-tbn0.gstatic.com",
      "digikala.arvanvod.ir",
      "trustseal.enamad.ir",
      "digikala-d567.onrender.com",
    ],
  },
};

module.exports = nextConfig;
