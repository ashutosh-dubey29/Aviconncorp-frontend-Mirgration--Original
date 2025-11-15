// Use global Protractor helpers (typed by @types/protractor)

export class AppPage {
  navigateTo() {
    return browser.get('/') as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }
}
