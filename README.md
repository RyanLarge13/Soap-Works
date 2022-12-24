# Soap-Works
Fullstack EJS, Nodejs, MongoDB E-commerce all natural soap website built for the ultimate business!

## About Soap Works
Soap Works is a full fledged business on the rise.
This business focuses on selling natural homemade soap
products, along with other self care and hygienic products
made with all natural ingredients. This repo is home
to the source code that allows people to shop for products from
this business, mail the business owner and view all
the information pertaining to each product.

## UI/UX
### Look & Feel
1. The design behind this website is meant to be clean and simple.
A small color pallet was introduced to keep the website consistent
and beautiful.

2. Modern design ideas were put in place such as masonry grids, and mobile
friendly ratios.

### User Interface
1. The home page is designed to show a capped amount of products
from each category to give the user an idea of some of the best
products this business has to offer and each one with a simple
and accessible way to add a product to the cart as well as a view more button to
navigate the user to each specific product page where more can be done

2. Every piece of functionality is easy to realize and
react with on each page. The design was focused on simplicity 
and easabilty for the user to access the information they need 
and purchase items with ease. 

3. Another focus of this application was the mobile experience
and making it feel as if it is a Native mobile application. 

## Structure
This is a monorepo application written in EJS for the client (Frontend) and Node.js (Backend) 
The folder structure contains two nested directories one for each. 

### Frontend
``` 
Frontend 
   - assets
      - images
   - global
      - js
      - styles
   - pages
     - each page
        - js
           - all page specific scripts.js
        - styles
           - all page specific stylesheets.css
        - ejs file.ejs
   - partials
     - partial
        - all partial specific files.js/css/ejs
```

The structure is built in a way to easily scale.
### Assets
This directory will contain a nested folder for each asset subject
ex: Images, Videos, Logos, etc..

### Global
The Global directory is where all partials styles and
javascript is imported to. This creates less clutter in each pages
html *<head>* tag for importing partials used across the platform.

### Pages
In the pages folder you will find nested directories. In
each directory you will find 1 file containing the main ejs file for that page & two folders
one for Javascript pertaining specifically to that page and the other for style sheets
pertaining to solely that page.

### Partials
For each partial a folder will be created in this directory.
Within that folder all files will be placed as most partial
documents are small and require relatively small amounts of code
no nested folders are created within each partial directory.

### Backend
```
Backend
   - routes
      - route subject
        - route files.js
   - config
      - config files.js
   - middleware
      - middleware subject
        - middleware files.js
   - controllers
      - controller subject
        - controller files.js
   - models
      - model subject
        - model files.js
   - server.js
```

### Routes
