import { DavidbArtikcloudClientPage } from './app.po';

describe('catalack App', function() {
  let page: DavidbArtikcloudClientPage;

  beforeEach(() => {
    page = new DavidbArtikcloudClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
