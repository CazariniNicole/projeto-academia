const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default

async function setupNodeEvents(on, config) {
  on('file:preprocessor', cucumber())
  return config;
}

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  defaultCommandTimeout: 15000,
  chromeWebSecurity: false,
  video: true,
  reports: true,
  screenshots: true,
  projectId: '91dj83',
  e2e: {
    setupNodeEvents,
    baseUrl: 'https://magento.nublue.co.uk/',
    specPattern: 'cypress/e2e/**/*.{feature,features}'
  },
});
