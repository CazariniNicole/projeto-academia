import homePage from '../pages/homePage'
import loginPage from '../pages/loginPage'
import productsPage from '../pages/productsPage'
import itemPage from '../pages/itemPage'
import checkoutPage from '../pages/checkoutPage'
import orderPage from '../pages/orderPage'
const HomePage = new homePage
const LoginPage = new loginPage
const ProductsPage = new productsPage
const ItemPage = new itemPage
const CheckoutPage = new checkoutPage
const OrderPage = new orderPage


Given(/^Que estou logado$/, () => {
  HomePage.go();
  HomePage.signIn();
  LoginPage.fillForm(data);
  HomePage.researchingProduct(data);
  ProductsPage.productsPage();
});

When(/^adiciono um produto no carrinho$/, () => {
  ItemPage.selectItem();
  ItemPage.InformationItem();
  ItemPage.addToCart();
  ItemPage.goToCheckout();
});

And(/^realizo o checkout$/, () => {
  CheckoutPage.checkout();
});

Then(/^valido a compra com sucesso $/, () => {
  OrderPage.orderPage();
});

