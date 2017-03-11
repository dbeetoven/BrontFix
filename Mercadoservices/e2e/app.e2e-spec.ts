import { MercadoservicesPage } from './app.po';

describe('mercadoservices App', function() {
  let page: MercadoservicesPage;

  beforeEach(() => {
    page = new MercadoservicesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
