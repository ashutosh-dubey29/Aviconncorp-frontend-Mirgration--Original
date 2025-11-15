import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have app-root present', async () => {
    await page.navigateTo();
    const root = element(by.css('app-root'));
    expect(await root.isPresent()).toBe(true);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const ptor: any = require('protractor');
    const logs = await (browser as any).driver.manage().logs().get(ptor.logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: ptor.logging.Level.SEVERE,
    }));
  });
});
