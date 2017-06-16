import { USAHolidaysAppPage } from './app.po';

describe('usaholidays-app App', () => {
  let page: USAHolidaysAppPage;

  beforeEach(() => {
    page = new USAHolidaysAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
