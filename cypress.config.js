const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        baseUrl: "https://qa-practice.netlify.app",

        defaultCommandTimeout: 10000,
        pageLoadTimeout: 60000,

        setupNodeEvents(on, config) {
            return config;
        }
    }
});