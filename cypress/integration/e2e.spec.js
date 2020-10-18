import { Counter } from "../pages/counter";

const counterPage = new Counter();

function addingProductsToBaset(number) {
  for (let rep = 0; rep < number; rep++) {
    counterPage.find(counterPage.INCREMENT_BTN).click({ multiple: true });
  }
}

function getInitialState() {
  counterPage.find(counterPage.ITEM_COUNTER_ZERO).should("contain", "Zero");
  counterPage.find(counterPage.BASKET_COUNTER).should("have.text", "0");
}

describe("Products", () => {
  beforeEach(() => {
    counterPage.navigate(Cypress.env("baseUrl"));
  })
  describe("Adding products", () => {

    it("one article of each product can be added to basket", () => {
      addingProductsToBaset(1);
      counterPage.find(counterPage.BASKET_COUNTER).should("have.text", "4");
      counterPage.find(counterPage.ITEM_COUNTER).eq(0).should("contain", "1");
      counterPage.find(counterPage.ITEM_COUNTER).eq(1).should("contain", "1");
      counterPage.find(counterPage.ITEM_COUNTER).eq(2).should("contain", "1");
      counterPage.find(counterPage.ITEM_COUNTER).eq(3).should("contain", "1");
      counterPage.find(counterPage.INCREMENT_BTN).should("have.length", 4);
    })

    it("multiple articles of each products can be added to basket", () => {
      addingProductsToBaset(2);
      counterPage.find(counterPage.BASKET_COUNTER).should("have.text", "4");
      counterPage.find(counterPage.ITEM_COUNTER).eq(0).should("contain", "2");
      counterPage.find(counterPage.ITEM_COUNTER).eq(1).should("contain", "2");
      counterPage.find(counterPage.ITEM_COUNTER).eq(2).should("contain", "2");
      counterPage.find(counterPage.ITEM_COUNTER).eq(3).should("contain", "2");
      counterPage.find(counterPage.INCREMENT_BTN).should("have.length", 4);
    })
  })

  describe("Deleting product from basket/list", () => {

    it("product can be deleted from basket", () => {
      counterPage.find(counterPage.INCREMENT_BTN).eq(0).click();
      counterPage.find(counterPage.DECREMENT_BTN).eq(0).click();
      counterPage.find(counterPage.BASKET_COUNTER).should("have.text", "0");
      counterPage.find(counterPage.INCREMENT_BTN).should("have.length", 4);
    })

    it("product can be deleted from product list", () => {
      counterPage.find(counterPage.INCREMENT_BTN).eq(2).click();
      counterPage.find(counterPage.ITEM_DELETE_BTN).eq(2).click();
      counterPage.find(counterPage.INCREMENT_BTN).should("have.length", 3);
      counterPage.find(counterPage.BASKET_COUNTER).should("have.text", "0");
    })
  })

  describe("Restoring products/articles", () => {
    it("user can restart after deleting all products", () => {
      counterPage.find(counterPage.ITEM_DELETE_BTN).click({ multiple: true });
      counterPage.find(counterPage.RESTORE_BTN).click();
      counterPage.find(counterPage.INCREMENT_BTN).should("have.length", 4);
      getInitialState();
    })

    it("product counter can be reset to zero for all products", () => {
      addingProductsToBaset(2);
      counterPage.find(counterPage.REFRESH_BTN).click();
      getInitialState();
    })

    it("products list is restored after page refresh", () => {
      addingProductsToBaset(1);
      counterPage.refresh();
      getInitialState();
    })

  })

})
