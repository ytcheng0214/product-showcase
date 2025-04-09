# 🛍️ Product Showcase App

A simple full-stack web application that displays a list of products in card format. Users can view product details and delete products. Built with React, Material UI, Node.js, and Express.

## ⚙️ Tech Stack

- **Frontend**: React, Material UI, Axios  
- **Backend**: Node.js, Express.js

## 🚀 Features

### ✅ Frontend
- Fetches product list from backend using Axios
- Displays products in responsive Material UI Cards
- Each card shows:
  - Product name
  - Description
  - Price
  - Random product image
- Users can delete products directly from the UI
- Product list re-fetches on page refresh (no hard-coded data)

### ✅ Backend
- Serves products through a RESTful API
- `GET /api/products`: Returns product list with random images
- `DELETE /api/products/:id`: Deletes a product by its ID
- Proper CORS setup for cross-origin communication

## 📦 How to Run the Project

### 1. Clone the Repository
```bash
git clone https://github.com/ytcheng0214/product-showcase.git
cd product-showcase
```

### 2. Run the Backend
```bash
cd backend
npm install
node index.js
```
By default, the backend runs on http://localhost:5000

### 3. Run the Frontend
```bash
cd ../frontend
npm install
npm start
```
The frontend runs on http://localhost:3000
> Make sure the backend server is running before you open the frontend.
