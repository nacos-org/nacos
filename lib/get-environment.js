const client = require('./management-client');

const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;

const getEnvironment = async () => {
  const space = await client.getSpace(CONTENTFUL_SPACE_ID);
  const environment = await space.getEnvironment('master');
  return environment;
}

module.exports = getEnvironment;

