# google-search-tests
this is the basic assignment test for edgewater

# Google Search Tests with Playwright

This project demonstrates automated testing of Google Search using Playwright and TypeScript. It includes the following tests:
- Validate Google title
- Verify the search input field
- Perform a search and check for results

## Prerequisites
- Node.js (>= 14.x) and npm installed. Download from [https://nodejs.org](https://nodejs.org)
- Playwright installed globally or locally in the project

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/SrikarKookutla/google-search-tests.git
    cd google-search-tests
    ```

2. Install dependencies:
    ```bash
    npm install
    ```
3. Install the Playwright using:
   ```bash
   npm init playwright@latest
   ```
4. Install Playwright browsers:
    ```bash
    npx playwright install
    ```

## Running the Tests
To run all tests, use:
```bash
    npx playwright test edgewater.test.ts --project=chromium --headed

##Enable the npm scripts in the vscode and there should be an run option available to run and debug the scripts
or using the terminal run the command: npx playwright test edgewater.test.ts --project=chromium --headed

