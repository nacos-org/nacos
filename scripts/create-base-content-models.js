const getEnvironment = require('../lib/get-environment');
const pageType = require('../content-types/core/page');
const openGraphType = require('../content-types/core/open-graph');
const articleType = require('../content-types/core/article');
const seoType = require('../content-types/core/seo');
const navigationType = require('../content-types/core/navigation');
const navigationItemType = require('../content-types/core/navigation-item');

(async () => {
  const environment = await getEnvironment();

  const seoEntry = await environment.createContentType(seoType);
  await seoEntry.publish();

  const articleEntry = await environment.createContentType(articleType);
  await articleEntry.publish();

  const openGraphEntry = await environment.createContentType(openGraphType);
  await openGraphEntry.publish();

  const pageEntry = await environment.createContentType(pageType);
  await pageEntry.publish();

  const navigationItemEntry = await environment.createContentType(navigationItemType);
  await navigationItemEntry.publish();

  const navigationEntry = await environment.createContentType(navigationType);
  await navigationEntry.publish();
})();

