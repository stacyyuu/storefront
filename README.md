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
