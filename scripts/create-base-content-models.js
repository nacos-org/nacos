const getEnvironment = require('../lib/get-environment');
const pageType = require('../content-types/core/page');

(async () => {
  const environment = await getEnvironment();
  const pageEntry = await environment.createContentType(pageType);
  await pageEntry.publish();
})();

