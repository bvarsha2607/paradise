# Paradise Nursery 🌿

## Project Name

**Paradise Nursery**

## Description

Paradise Nursery is a dynamic React + Redux shopping cart application built for an online plant shop. Customers can browse houseplants organized by category, view plant details (thumbnail, name, and price), add plants to a shopping cart, and manage the items in their cart — increasing or decreasing quantities, removing items, and viewing a live-updating cart total and item count as they shop.

## Purpose

This project was built as the final assignment for a front-end web development course, applying core React and Redux concepts — component design, state management, props, hooks, and conditional rendering — to build a complete, functional e-commerce shopping experience from scratch.

## Features

- **Landing Page** — Displays the company name over a background image, along with a "Get Started" button that takes shoppers to the product listing.
- **About Us** — A page describing Paradise Nursery's mission and story.
- **Product Listing Page** — Plants grouped into at least three categories (Air Purifying, Aromatic, and Low-Light Plants), each with a thumbnail, name, and price.
  - "Add to Cart" buttons add the plant to the shopping cart.
  - Buttons disable themselves once a plant has been added.
  - The cart icon count updates immediately when an item is added.
- **Shopping Cart Page** —
  - Displays each item's thumbnail, name, and unit price.
  - Shows the subtotal cost for each individual plant.
  - Shows the total cost of all items in the cart.
  - Includes increment (+) and decrement (−) buttons to adjust quantity.
  - Includes a delete button to remove an item from the cart entirely.
  - Includes a "Checkout" button that displays a "Coming Soon" message.
  - Includes a "Continue Shopping" button that returns to the product listing page.
- **Navbar** — A persistent navigation bar on both the Product Listing and Cart pages, with links to Home, Plants, and Cart, plus a live badge showing the total number of items in the cart.

## Tech Stack

- **React** — functional components and hooks (`useState`)
- **Redux Toolkit** — global cart state management via `CartSlice.jsx`
- **React-Redux** — connecting components to the Redux store
- **Plain CSS** (`App.css`) — layout, navbar, product grid, cart styling, and the landing page background image
- **Vite** — build tool and dev server

## Project Structure
