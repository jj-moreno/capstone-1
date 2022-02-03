<h1>The Problem Solving Framework : 'UPER'</h1>

- U = "Understand"
- P = "Plan"
- E = "Execute"
- R = "Reflect" / "Refactor"

<h2>1. Understanding the Problem</h2>
* Create a view to display available products in inventory.
* Allow customer view to see the following details: Name, Serial #, Price, Manufacturer and Category/Tag.
* Display shopping cart and create purchase functionality for customer.
* Enable customer to filter inventory displayed by product name
* Customer may purchase multiple quantities of a product and multiple products.
* Inventory for store needs a minimum of 10 product items.
* Inventory data will be saved in a JSON file.
* Bonus material to include images/thumbnails for products, additional search functionality besides by product name, 3rd party payment processing and error handling. 
<h2>
    2. Planning the Solution
</h2>
* Will create a wireframe to envision design view of customer UI for products details view and shopping cart view.
* Create JSON data file locally in project directory and allot for a minimum of 10 different product items.
* The products view will be displayed in a gallery and will need to attach all product information from JSON file.
* The search by product name will be handled by filtering inventory data by product name from customer input from the text input (search bar).
* Customer will have a button by the thumbnail in the products view page to increase quantity as desired for each product.
* Provide Shopping Cart button on products view to send customer to shopping cart view
* Shopping Cart view will provide summary of order, form for customer information, shipping and purchase confirmation. 
* Look for images for each product item and save the path to each product item in it's perspective JSON object.
* Increase search functionality by a filtering navigation bar which allows for filter by price, manufactorer and category
* Error handling will be used in the form from shopping cart view when asking for customer information input to finalize customer order
<h2>
    3. Executing the Plan
</h2>
* Started with building out the header, starter code had flexbox for the header, I made sure to use a different flexbox configuration for the other sections.
* Built navigation bar and used new flexbox configuration.
* Imported data from json file in local storage and created gallery for products page using flexbox.
* Built a 'Add to Cart' button on each product.
* Created standard button for my cart in the nav bar with my search input field and button.
* After replacing cart button with clickable cart icon, I quickly added a span which would be a count label for the amount of items selected by consumer.
* Implemented my global state using React Hooks and Context to keep track of my products and items in cart, followed with using global state. 
* Used global state to render my products and to keep the counter in my cart icon label to reflect number of items purchased.
* Made quantity in products UI and cart UI update with every click on 'Add to Cart' button and this was made possible through Amir office hours 
<h2>
    4. Reflection / Refactor
</h2>
* Realized that my header needed a better naming because I started naming it inventory and chose e-commerce as a better title after implementation of 'Add to Cart' button.
* Found out that I can make a cart icon without a 3rd party styling library and now need to make the cart icon clickable and use react router to send customer to cart page.
* Didn't think about Add to Cart button when visualizing my products page gallery, added it to each product but will need to update cart with each click.
* Did not like standard button for cart and researched how to make a cart icon and implemented the icon in my nav bar, made it clickable, and removed previous cart button. 
* At the point of implementing my nice cart icon with span label for items counts, at this moment I realize I need a global state and looked into Redux principles using React Hooks and Context.
* Final reflection is that global state is very important when using React as you can navigate through pages and maintain your data.
