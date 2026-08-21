const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        baseUrl: "https://qa-practice.netlify.app",

        defaultCommandTimeout: 10000,
        pageLoadTimeout: 120000,

        video: false,
        screenshotOnRunFailure: true,

        setupNodeEvents(on, config) {
            return config;
        }
    }
});