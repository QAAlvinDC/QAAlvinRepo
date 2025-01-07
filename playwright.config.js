const { devices } = require("@playwright/test");

// @ts-check
const config = {
  testDir: './tests',
  timeout: 30 * 10000,
  expect: {
    timeout: 50000, // Timeout for expectations
  },
  reporter: 'html', // Unified reporter for all projects
  use: {
    screenshot: 'on',
    trace: 'on',
    // Setting default viewport for tests (large resolution)
    viewport: {
      width: 1280, // Width of the screen (full HD or adjust to your screen size)
      height: 800, // Height of the screen
      
    },
  },
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        headless: false,
        // Setting window size here for the chromium browser
        launchOptions: {
          args: ['--start-maximized'], // Start the browser maximized
         
        },
      },
    },

    /*{
      name: 'firefox',
      use: {
        browserName: 'firefox',
        headless: false,
      },
    },
    {
      name: 'webkit',
      use: {
        browserName: 'webkit',
        headless: false,
      },
    },
    */
  ],
};
 
module.exports = config;  