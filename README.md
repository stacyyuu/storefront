# Store Front

### Lab 36: Application State with Redux
**Phase 1 Requirements**:

 Today, we begin the first of a 4-Phase build of the storefront application, written in React. In this first phase, our goal is to setup the basic scaffolding of the application with initial styling and basic behaviors. This initial build sets up the file structure and state management so that we can progressively build this application in a scalable manner.

The following user/developer stories detail the major functionality for this phase of the project.

- As a user, I expect to see a list of available product categories in the store so that I can easily browse products.
- As a user, I want to choose a category and see a list of all available products matching that category.
- As a user, I want a clean, easy to use user interface so that I can shop the online store with confidence.

Notes on constructing the Redux Store:
- Categories
    - State should contain a list of categories as well as the active category.
      - Each category should have a normalized name, display name, and a description.
    - Create an action that will trigger the reducer to change the active category.
    - Update the active category in the reducer when this action is dispatched.
- Products
    - State should be a list of all products.
      - Each product should have a category association, name, description, price, inventory count.
    - Create an action that will trigger when the active category is changed.
      - HINT: Multiple reducers can respond to the same actions.
    - Create a reducer that will filter the products list based on the active category.

### Lab 37: Redux - Combined Reducers
**Phase 2 Requirements**:

The user stories from Phase 1 remain unchanged. For this phase, we are now adding the following new user stories to meet the new requirements.

- As a user, I want to choose from products in the list and add them to my shopping cart.
- As a user, I want to see the products that I’ve added to my shopping cart in a growing list on the side of the page”.
- As a user, I want to change the quantity of items I intend to purchase in the header. i.e. CART (1)
- As a user, I want to be able to remove an item from my shopping cart.

Manage state in Redux store with multiple reducers/actions:

- Cart
    - State should be an array of products that have been added (all product details).
    - Create an action that will trigger the reducer to add the selected item to the cart.
      - Hint: this could be the same action type as you create for the Products reducer.
    - Create a reducer that adds the product to the array of items in state.


### Lab 38: Redux - Asynchronous Actions
**Phase 3 Requirements**:

In phase 3, we will be connecting our Virtual Store to a live API so that our data is persistent and able to be separately managed.

The user stories from Phases 1 and 2 remain unchanged. For this phase, we are now adding the following new user stories to meet the new requirements.

- As a user, I want to interact with live inventory so that I have confidence that the displayed products are in stock.
- As a user, I want to know to that when I add an item to my cart, that it is removed from inventory so that no other users can purchase it.

### Lab 39: Redux - Additional Topics
**Phase 4 Requirements**:

In phase 4, we will be completing work on our Virtual Store by adding two full page views to the application: Product Details and Checkout.

The user stories from Phases 1, 2 and 3 remain unchanged. For this phase, we are now adding the following new user stories to meet the new requirements.

- As a user, I want to see a full detail view of a product so that I can make a more informed choice about purchasing it.
- As a user, I want to view my full cart and initiate the checkout process so that I can purchase my items and have them delivered.




 ![React Store](https://d33wubrfki0l68.cloudfront.net/08d01ed85246d3ece01963408572f3f6dfb49d41/4bc12/assets/images/reduxasyncdataflowdiagram-d97ff38a0f4da0f327163170ccc13e80.gif)  

 

  