#Persona
#Bob: a common user with access to the application

Feature: Adding products

    Background: Page access
        Given Bob is on the application page

        Scenario 1: One article of each product can be added to basket

        Given no product is in basket
        When Bob adds one article of each product
        Then basket contains four products
        And the count for each product is equal to one
        And there are four products in the list


        Scenario 2: Multiple articles of several products can be added to basket
        Given no product is in basket
        When Bob adds two articles of each product
        Then basket contains four products
        And the count for each product is equal to two
        And there are four products in the list

Feature: Deleting products from basket/list

        Scenario 3: Product can be deleted from basket
        Given there is one product in basket
        When Bob deletes an article product from basket
        Then  there are four products in the list
        And the count for the product is set to zero
        And there are four products in the  list
        And basket contains zero products


        Scenario 4: Product can be deleted from product list
        Given there are four products in the list
        And there are no products in basket
        When Bob deletes a product from the list
        Then there are three products in the list
        And basket contains zero products


Feature: Restoring products/articles

        Scenario 5: Bob can restart after deleting all products
        Given no product in the list
        When Bob wants to restore the product list
        Then there are four products in the list
        And the counter for each product is set to zero


        Scenario 6: Product counter can be reset to zero for all products
        Given the counter for each product is two
        When Bob  wants to refresh the counters
        Then there are four products in the list
        And the counter for each product is set to zero


        Scenario 7: The product list is restored after page refresh
        Given there are four products in basket
        When Bob refreshes the page
        Then there are four products in the list
        And the counter for each product is set to zero


