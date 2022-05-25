const getEnvironment = require('../lib/get-environment');
const pageType = require('../content-types/core/page');
const openGraphType = require('../content-types/core/open-graph');

(async () => {
  const environment = await getEnvironment();

  const openGraphEntry = await environment.createContentType(openGraphType);
  await openGraphEntry.publish();

  const pageEntry = await environment.createContentType(pageType);
  await pageEntry.publish();
})();

