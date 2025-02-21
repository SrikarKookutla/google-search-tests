import { test, expect } from '@playwright/test';

test.describe('Google Search Tests', () => {

  test('Navigate to Google and validate the title', async ({ page }) => {
    await page.goto('https://www.google.com');
    await expect(page).toHaveTitle(/Google/);
  });

  test('Verify the existence of the search input field', async ({ page }) => {
    await page.goto('https://www.google.com');
    const searchInput = page.locator(`//textarea[@name="q"]`);
    await expect(searchInput).toBeVisible();
  });

  test('Perform a search and validate results', async ({ page }) => {
    await page.goto('https://www.google.com');
    const searchInput = page.locator(`//textarea[@name="q"]`);
    await searchInput.fill('Playwright testing');
    await searchInput.press('Enter');
    await page.waitForLoadState('networkidle');
    

  });

});
