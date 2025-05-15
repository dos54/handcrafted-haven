<!-- omit in toc -->
# Project Specifications 

The specification sheet and plans for WDD 430 group 4, through BYU-Idaho.
[Click here to see project requirements](https://byui-cse.github.io/wdd430-ww-course/pages/group-project-description.html)

## Collaborators
- [Steven Thomas](https://github.com/dos54)
- Ernest Ojakol
- Vermont Garcia Serrano
- Nadia Najli Rodriguez
- Prince Ogbonnaya Nwachukwu

<!-- omit in toc -->
## Table of Contents
- [Collaborators](#collaborators)
- [Functions](#functions)
- [Auth](#auth)
- [Database](#database)
- [Collections](#collections)
  - [Role](#role)
  - [User (This info is required at account creation)](#user-this-info-is-required-at-account-creation)
  - [Profile (This is data that's filled out after account creation)](#profile-this-is-data-thats-filled-out-after-account-creation)
  - [Address](#address)
  - [Chat](#chat)
  - [Message](#message)
  - [Story](#story)
  - [Comment](#comment)
  - [Category](#category)
  - [Product](#product)
  - [ProductImage](#productimage)
  - [Review](#review)
  - [Cart](#cart)
  - [OrderItem](#orderitem)
  - [Order](#order)
  - [SellerOrder](#sellerorder)
- [Routes](#routes)
  - [Landing Page / Home](#landing-page--home)
  - [Authentication](#authentication)
  - [Profile Page](#profile-page)
  - [Cart](#cart-1)
  - [Checkout](#checkout)
  - [Catalogue](#catalogue)


## Functions
- Seller profiles
- Product listings
- Catalog
- Reviews and ratings

## Auth
- We need to figure out what to use for auth
- Look into Next.js provided solutions (next auth)

## Database
- MongoDB

## Collections
Here be the specifications for the database collections for our application

### Role
- `name`: String (seller, buyer, admin, etc)
- `users`: [ObjectId] (Refs `User`)
  _(List of users with this role)_

---

### User (This info is required at account creation)
- `name`: String (The user's name, i.e. John Wick)
- `username`: String (Display name. Should default to something, maybe a string generated from the user's name? Also should be unique)
- `email`: String (required, must be unique)
- `password`: String (optional depending on how the account was created, **must be hashed before storage**)
- `avatarUrl`: String (required, has a default)
- `roles`: [ObjectId] (Refs `Role`)

### Profile (This is data that's filled out after account creation)
- `userId`: ObjectId (Ref `User`, unique)
- `bio`: String
- `favorites`: [ObjectId] (Refs `Product`)
- `following`: [ObjectId] (Refs `User`)
- `purchaseHistory`: [ObjectId] (Refs `Order`)

---

### Address
- `userId`: ObjectId (Ref `User`)
- `addressName`: String (This is the user defined name, ie "Grandma's house")
- `street`: String
- `city`: String
- `state`: String
- `postalCode`: String
- `country`: String
- `phone`: String (optional)
- `isDefault`: Boolean (Is this the default address for the user?)

---

### Chat
- `users`: [ObjectId] (Refs `User`)
- `createdAt`: Date

### Message
- `chatId`: ObjectId (Ref `Chat`)
- `authorId`: ObjectId (Ref `User`)
- `content`: String
- `createdAt`: Date

---

### Story
- `authorId`: ObjectId (Ref `User`)
- `title`: String
- `content`: String
- `createdAt`: Date

### Comment
- `authorId`: ObjectId (Ref `User`)
- `storyId`: ObjectId (Ref `Story`)
- `content`: String
- `createdAt`: Date

---

### Category
- `name`: String
- `description`: String

### Product
- `userId`: ObjectId (Ref `User`)
- `name`: String
- `description`: String
- `categoryId`: ObjectId (Ref `Category`)
- `slug`: String (unique)
- `createdAt`: Date
- `updatedAt`: Date
- `price`: Decimal128
- `quantity`: Number (amount in stock. MongoDB is not as good for relational data, ie two tables that reference each other, so I am moving the inventory table's data into the product table to reduce the need to look up another table)

### ProductImage
- `productId`: ObjectId (Ref `Product`)
- `imageUrl`: String
- `altText`: String

---

### Review
- `authorId`: ObjectId (Ref `User`)
- `productId`: ObjectId (Ref `Product`)
- `rating`: Number (1-5)
- `title`: String
- `content`: String
- `createdAt`: Date

---

### Cart
- `userId`: ObjectId (Ref `User`)
- `items`: Array of objects with:
  - `productId`: ObjectId (Ref `Product`)
  - `quantity`: Number
- `status`: Enum (eg "active", "abandoned", "checked_out")
- `updatedAt`: Date

---

### OrderItem
- `productId`: ObjectId (Ref `Product`)
- `sellPrice`: Decimal128 (The price that the item was sold at)
- `quantity`: Number
- `status`: Enum (eg "fulfilled", "pending")
- `fulfilledAt`: Date

### Order
- `userId`: ObjectId (Ref `User`)
- `orderItems`: [OrderItem] (embedded)
- `shippingCost`: Decimal128
- `total`: Declimal128
- `createdAt`: Date
- `status`: Enum ("pending", "paid", "shipped", "cancelled")

---

### SellerOrder
- `customerId`: ObjectId (Ref `User`)
- `orderItems`: [OrderItem]
- `shippingAddress`: Object (from `Address`, this is a copy and does not actually reference the address table except when it's first created.)
- `totalSalePrice`: Decimal128

## Routes

### Landing Page / Home

### Authentication
- Login Page
- Sign-Up Page

### Profile Page
- Items for Sale
- Showcases
- Bio
- Feed
  - Stories (Blog Posts)
- *(Seller Only)*
  - Inventory
  - Add Products
    - Edit Products
  - Sales
- *(Hidden, Per-User)*
  - Messages
  - Orders

### Cart

### Checkout
- Order Summary (Tell you what you will purchase)
- Order Details (After Purchase Review)
- Thank You Page (After Purchase)

### Catalogue
- Categories
- Product Page
  - Rating
  - Reviews
  - Link to Seller
