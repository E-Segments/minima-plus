import { test, expect } from '@playwright/test';

test('verify UI Kit and design tokens', async ({ page }) => {
  await page.goto('http://localhost:4000/docs/ui-kit/');

  // Check UI Kit page
  await expect(page.locator('h1')).toHaveText('UI Kit & Components');

  // Verify Alerts
  await expect(page.locator('.bg-blue-50')).toBeVisible();
  await expect(page.locator('.bg-green-50')).toBeVisible();

  // Verify Design Tokens (Radius)
  // Get the computed border-radius of a card or alert
  const alertRadius = await page.evaluate(() => {
    const el = document.querySelector('.bg-blue-50');
    return window.getComputedStyle(el).borderRadius;
  });
  expect(alertRadius).toBe('12px'); // 0.75rem = 12px

  // Verify Font Weight Heading
  const headingWeight = await page.evaluate(() => {
    const el = document.querySelector('h2');
    return window.getComputedStyle(el).fontWeight;
  });
  expect(headingWeight).toBe('700');

  // Verify Code Tabs Sync
  // Find two code tabs
  const codeTabs = page.locator('[data-code-tabs]');
  await expect(codeTabs).toHaveCount(1); // Only one explicit one in ui-kit.md, wait let me check

  // Actually ui-kit.md has one Code Tabs example.
  // Let's check the labels (use exact text to avoid matching pnpm for npm)
  await expect(page.locator('button', { hasText: /^npm$/ })).toBeVisible();
  await expect(page.locator('button', { hasText: /^yarn$/ })).toBeVisible();

  // Command Palette verification
  await page.keyboard.press('Control+k');
  await expect(page.locator('#search-modal')).toBeVisible();
  await page.fill('#search-input', '/');
  await expect(page.locator('button:has-text("Switch to Dark Mode")')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.locator('#search-modal')).not.toBeVisible();
});
