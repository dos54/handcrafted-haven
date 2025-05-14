# Project Specifications

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

### Schema

Roles that user can have
- Role
  - role name (ie seller, buyer, etc)
  - role list ([admin1, admin2, admin3])

<!-- Required stuff -->
Required user information (made on account creation)
- User
  - name
  - username? (defaults to email)
  - email
  - password? (hashed obviously) ((optional))
  - avatar (has a default)

<!-- Optional -->
Profiles include the user's landing page, information is filled out after acccount creation
- Profile
  - user id
  - bio
  - favorites (list) -> product id
  - following (list) -> user id
  - purchase history ?

Shipping addresses
- address
  - name
  - user id
  - address info

Possibly add payment information table?

Create a chat that allows users to speak to each other, for example buyers talking to sellers
- Chat
  - users list
  - timestamp

Links to a chat
- Message
  - chat id
  - author id
  - content
  - timestamp

Blog post for sellers to make
- Story (blog post)
  - author id
  - title
  - content

Allow users to comment on stories
- Comment
  - author id
  - story id
  - title
  - content

List of product categories
- Category
 - name
 - description

Something to be sold or shown off
- Product
  - name
  - description
  - category id
  - user id
  - slug (unique name / identifier)
  - timestamps

Review on product
- review
  - author id
  - product id
  - rating
  - title
  - content

Include a product, its price, and the quantity in stock
- Inventory
  - product id
  - price
  - quantity

Image or images associated with a product
- Product image
  - Product id
  - Image url

A user's shopping cart
- cart
  - user id
  - product ids (list)
  - status (active / inactive)
  - timestamp

Information about a singular item that's ordered
- order item
  - sell price // This is static and should not change. Set at time of purchase
  - product id
  - quantity
  - status (order fulfilled)
  - fulfilled timestamp // Save timestamp when fulfilled

Completed order, customer facing
- order
  - user id
  - order item ids (list)
  - discounts (optional)
  - shipping cost
  - total

Seller facing, List of all of the items the specific seller need to send
- seller order
  - address
  - customer id
  - order item ids (list)
  - sale price

## Routes
- Landing page / home
- Login page / Sign up page
- Profile page
  - Items for sale
  - Showcases
  - Bio
  - Feed
    - Stories (Blog posts)
  - (Seller Only)
    - Inventory
    - Add products
      - Edit products
    - Sales
  - (Hidden, per-user)
    - Messages
    - Orders

- Cart
- Checkout (Tell you what you will purchase)
  - Order details (After purchase review)
  - Thank you page (after purchase)

- Catalogue
  - Categories
  - Product page 
    - Rating
    - Reviews
    - Link to seller
