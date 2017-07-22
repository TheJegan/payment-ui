import { PaymentPrototypePage } from './app.po';

describe('payment-prototype App', () => {
  let page: PaymentPrototypePage;

  beforeEach(() => {
    page = new PaymentPrototypePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
