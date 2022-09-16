
import homePage from '../pages/homePage'
import loginPage from '../pages/loginPage'
import productsPage from '../pages/productsPage'
import itemPage from '../pages/itemPage'
import checkoutPage from '../pages/checkoutPage'
import orderPage from '../pages/orderPage'
import generatePurchaseFactory from '../factories/generatePurchaseFactory'
const HomePage = new homePage
const LoginPage = new loginPage
const ProductsPage = new productsPage
const ItemPage = new itemPage
const CheckoutPage = new checkoutPage
const OrderPage = new orderPage

var data = generatePurchaseFactory.purchase()

    Given(/^Que estou logado$/, (  ) =>{
		HomePage.go();
    HomePage.signIn();
    LoginPage.fillForm(data);
    HomePage.researchingProduct(data);
    ProductsPage.selectItem();
    } );

    When(/^adiciono um produto no carrinho$/, (  ) =>{
    ItemPage.informationItem();
    ItemPage.addToCart();
    ItemPage.goToCheckout();
    } );

    And(/^realizo o checkout$/, (  ) =>{
    CheckoutPage.checkout();
    } );

    Then(/^valido a compra com sucesso$/, (  ) =>{
      const expectedMessage = 'Thank you for your purchase!'
      OrderPage.orderMessageSucess(expectedMessage);
  } );

