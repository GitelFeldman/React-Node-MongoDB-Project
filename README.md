# Final Project: React E-Commerce Store (2024)  
A fully responsive e-commerce store built with React, enabling users to browse, add products to their cart, and manage orders seamlessly.  

---

## **Features Overview**

### **1. Products Page** 🛍️  
- Display products dynamically fetched from the server.  
- Implement pagination or infinite scrolling for efficient navigation.  

### **2. Single Product Page** 📦  
- Show product image, description, price, and an "Add to Cart" button.  
- Clicking on a product redirects to its dedicated detail page.  

### **3. Product Detail Page** 📝  
- Full product details available at a unique URL.  
- Option to add items to the cart, with a temporary cart notification popup.  

### **4. Mini Cart** 🛒  
- A quick-view cart displaying products added (read-only).  

### **5. Shopping Cart Page** 💳  
- Comprehensive cart view with:  
  - Product details, quantity, and total cost.  
  - Ability to update quantities or remove items.  
- Buttons for "Continue Shopping" and "Complete Order."  
- Sends cart data to the server on order confirmation.  

### **6. Login Page** 🔑  
- User login form supporting email/username and password.  
- Successful login stores user data in Redux and redirects to the Products page.  

### **7. Registration Page** ✍️  
- User registration form capturing essential details (e.g., email/username, password).  
- Stores user data in Redux and `localStorage` upon success.  
- Logout functionality clears `localStorage` data.  

### **8. Admin Features** 👨‍💻  
- Admins can:  
  - Delete products with a confirmation prompt.  
  - Edit products using a form pre-filled with product details.  

### **9. Add Product Page** ➕  
- Add new products via a form (fields include name, price, image URL, etc.).  

### **10. NavBar** 🌐  
- Displays the logged-in user's name or "Guest" for visitors.  
- Dynamic navigation tailored to user roles:  
  - Guest  
  - Registered User  
  - Admin  

---

## **Additional Features**

### **Product Search & Sorting** 🔍  
- Search for products by name.  
- Filter results by categories or price range.  

### **Update Product Page** ✏️  
- Edit existing products using a user-friendly form powered by `react-hook-form`.  

### **Responsive Design** 📱  
- Fully styled using a UI library (e.g., Material-UI) for mobile, tablet, and desktop.  

### **Server Integration** 🌐  
- Real-time interaction through API calls for:  
  - Product data  
  - Authentication  
  - Cart management  

### **Deployment** 🚀  
- The project is deployed live on **Netlify** for easy access and testing.  

---

## **Technologies Used**

- **Frontend:** React, Redux, React-Router  
- **Styling:** Material-UI, CSS Modules  
- **State Management:** Redux Toolkit  
- **Forms:** React-Hook-Form  
- **Backend Integration:** REST API (e.g., Axios for HTTP requests)  
- **Deployment:** Netlify  

---

## **Installation & Setup**

1. Clone the repository:  
   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
   cd <repo-name>
