# product-management

<b>Some Introduction to ReactJS</b>

React is a JavaScript library for creating user interfaces. It seeks to make complex web applications less time-consuming to build, easier to maintain, and more performant. It's one of the most popular JavaScript web frameworks in use today, and has often led the field in performance and adoption of new design patterns.

React also has a huge and active worldwide community and support from Facebook, making it a reliable choice for developers wondering where to invest their time.

In this course we'll learn about the basics of writing an application in React, and create a simple application that allows users to make and manage a small list of products in a store.

<b>Let's talk about SPAs (Single Page Applications)</b>

When we talk about Javascript "apps" we're usually talking about SPAs. The acronym refers to websites that handle navigation in-page, without loading new pages via HTTP. An SPA website usually loads once, and after that manages all links and form submissions with Javascript through AJAX requests in the background. Changes to the page, and even URL address updates, are handled by Javascript as well.

<b>Let's talk about this project</b>

We are asked about to create an app that renders a sortable, searchable list of products in an imaginary store, and allows the user to add and delete products from the list.

<ul>
  <li>There's a search input at the top that should filter the products as you type, so that only products who match the current search   string are shown.</li>
  <li>The "Only show products in stock" checkbox should hide any products that aren't in stock (shown in red).</li>
  <li>In the table, each column should be sortable in ascending and descending order, and the current sort should be highlighted.</li>
  <li>On the right, there are buttons to remove any of the items from the list.</li>
  <li>At the bottom, there's a form to create a new product. When you hit "save", it should add your new product to the list.</li>
</ul>

<b>Usage</b>

1. Firstly clone the directory in local:
`$ git clone https://github.com/dkapexhiu/product-management-1.0`
2. Navigate into the directory:
`cd product-management-1.0`
3. Start the local server:
`npm start`
4. Navigate to `localhost:3000` to see the app
