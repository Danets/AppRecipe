import { ValeronPage } from './app.po';

describe('valeron App', () => {
  let page: ValeronPage;

  beforeEach(() => {
    page = new ValeronPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
