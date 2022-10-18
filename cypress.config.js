const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "esp8sm",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "baseUrl": "https://gnews.org",
  },
});
