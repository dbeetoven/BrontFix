import { MercadoServicioPage } from './app.po';

describe('mercado-servicio App', function() {
  let page: MercadoServicioPage;

  beforeEach(() => {
    page = new MercadoServicioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
