# 🛍️ Product Showcase App

A simple full-stack web application that displays a list of products in card format. Users can view product details and delete products. Built with React, Material UI, Node.js, and Express.

## ⚙️ Tech Stack

- **Frontend**: React, Material UI, Axios  
- **Backend**: Node.js, Express.js

## 🖥️ Demo
<img width="1290" alt="截圖 2025-04-08 晚上11 58 55" src="https://github.com/user-attachments/assets/16154c72-efba-4253-908c-3e05ce6990fd" />

![螢幕錄影+2025-04-08+晚上11 57 42 (2)](https://github.com/user-attachments/assets/051da33e-0a9d-44d5-b9e3-d748a9970d7b)


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

### 2. (Optional) Change the Default Port (5001)
By default, the backend runs on http://localhost:5001.
If you want to change the port (e.g., to 5002), follow the steps below before starting the backend or frontend:

🛠 Modify the Backend Port
Create or edit .env inside StarterCode/backend/:

```ini
PORT=5002
```

🔁 Update the Frontend Proxy
Open StarterCode/frontend/package.json and update the proxy field:

```json
"proxy": "http://localhost:5002"
```

### 3. Run the Backend
```bash
cd StarterCode/backend
npm install
node index.js
```
By default, the backend runs on http://localhost:5001.


### 4. Run the Frontend
```bash
cd StarterCode/frontend
npm install
npm start
```
The frontend runs on http://localhost:3000
> Make sure the backend server is running before you open the frontend.