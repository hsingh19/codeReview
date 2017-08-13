import { A2to4Page } from './app.po';

describe('a2to4 App', () => {
  let page: A2to4Page;

  beforeEach(() => {
    page = new A2to4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
