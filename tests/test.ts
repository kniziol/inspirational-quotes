import { expect, test } from '@playwright/test';

test('home page has expected quote and button', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('.quote-box')).toBeVisible();
  await expect(page.locator('.quote-box .text')).toBeVisible();
  await expect(page.locator('.quote-box .author')).toBeVisible();
  await expect(page.locator('.cta')).toBeVisible();
});
