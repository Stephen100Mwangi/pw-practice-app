import { expect, test } from "@playwright/test";

test.describe("Tests", () => { // Group files

  // Playwright fixtures - page, browser.
  // Page - Browser window
  test("First test", async ({page}) => {
    await page.goto('http://localhost:4200/')
    // await - Promise
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
  });
});

// Hooks
// test.BeforeAll(()=>{})
// test.BeforeEach(()=>{})

// Not recommended
// test.afterEach(()=>{})
// test.afterAll(()=>{})

// To skip a test suite - test.describe().skip()
// Run a single test suite - test.describe().only()
