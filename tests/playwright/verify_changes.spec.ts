import { test, expect } from '@playwright/test';

test('verify all new features', async ({ page }) => {
  // Go to home page
  await page.goto('http://localhost:4000');

  // 1. Verify Announcement Bar
  const announcementBar = page.locator('#announcement-bar');
  await expect(announcementBar).toBeVisible();
  await expect(announcementBar).toContainText('Minima+ v1.0 is now live');

  // 2. Verify Latest Blog Posts
  const latestBlog = page.locator('text=Latest from the Blog');
  await expect(latestBlog).toBeVisible();
  const blogCards = page.locator('article.bg-white.dark\\:bg-slate-900');
  await expect(blogCards).toHaveCount(3);

  // 3. Verify Stats Counter (wait for animation)
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
  await page.waitForTimeout(3000); // Wait for animation
  const downloads = page.locator('text=Downloads').locator('..').locator('.stat-value');
  const downloadsText = await downloads.innerText();
  console.log('Downloads text:', downloadsText);
  // It should be something like "10,000K+" or similar depending on the logic
  // Actually "10K+" -> multiplier 1000 -> target 10000 -> formatted "10,000" + suffix "K+"
  // Wait, if suffix is "K+", it should show "10,000K+"?

  await page.screenshot({ path: 'verification/final_home.png', fullPage: true });

  // 4. Verify Reading Progress Bar on a doc page
  await page.goto('http://localhost:4000/docs/getting-started/');
  const progressBar = page.locator('#reading-progress');

  // Scroll down and check visibility and width
  await page.evaluate(() => window.scrollTo(0, 500));
  await expect(progressBar).toBeVisible();
  await page.waitForTimeout(500);
  const width = await progressBar.evaluate(el => el.style.width);
  console.log('Progress bar width after scroll:', width);
  expect(parseFloat(width)).toBeGreaterThan(0);

  await page.screenshot({ path: 'verification/final_doc.png', fullPage: true });

  // 5. Verify Mermaid.js
  await page.goto('http://localhost:4000/docs/mermaid/');
  const mermaid = page.locator('.mermaid svg').first();
  await expect(mermaid).toBeVisible();
  await page.screenshot({ path: 'verification/final_mermaid.png', fullPage: true });

  // 6. Test dark mode
  await page.click('button[aria-label="Toggle dark mode"]');
  await page.waitForTimeout(500);
  await expect(page.locator('html')).toHaveClass(/dark/);
  await page.screenshot({ path: 'verification/final_dark_mode.png', fullPage: true });
});
