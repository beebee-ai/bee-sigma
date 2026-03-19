/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://bee-sigma.com',
  generateRobotsTxt: false,
  outDir: 'public',
  // Support for i18n
  alternateRefs: [
    {
      href: 'https://bee-sigma.com/en',
      hreflang: 'en',
    },
    {
      href: 'https://bee-sigma.com/zh',
      hreflang: 'zh',
    },
  ],
  additionalPaths: async (config) => {
    const result = [];
    result.push(await config.transform(config, '/en'));
    result.push(await config.transform(config, '/zh'));
    return result;
  },
};
