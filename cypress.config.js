const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920,
    viewportHeight:1080,
    reporter: 'mochawesome',
    video: false,
    screenshotsFolder: 'cypress/report/assets',
    reporterOptions: {
      reportDir: 'cypress/report',
      overwrite: false
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
