const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        baseUrl: "https://qa-practice.netlify.app",

        defaultCommandTimeout: 10000,
        pageLoadTimeout: 30000,

        retries: {
            runMode: 2,
            openMode: 0
        },

        screenshotOnRunFailure: true,
        video: false,

        setupNodeEvents(on, config) {
            return config;
        }
    }
});