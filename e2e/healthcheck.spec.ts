import { test, expect } from "@playwright/test";

test("starts with a blank slate", async ({ page }) => {
  await page.goto("/");
  expect(await page.waitForSelector("#__nuxt")).toBeTruthy();
});
