# ShopMellow - Modern E-commerce Platform

A full-featured e-commerce web application built with React, featuring product browsing, filtering, shopping cart functionality, and a responsive design.

## 🚀 Features
* **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop
* **Product Catalog**: Browse through a curated collection of products with filters and search
* **Shopping Cart**: Add, remove, and update product quantities
* **Category Filtering**: Filter products by category, gender, and type
* **Persistent Cart**: Cart data is saved in localStorage
* **Toast Notifications**: User-friendly feedback for actions
* **Animation Effects**: Smooth animations using Framer Motion

## 📋 Pages
* **Home**: Landing page with featured categories and lifestyle imagery
* **Products**: Browse and filter all available products
* **Cart**: View and manage items in your shopping cart
* **Checkout**: Complete your purchase with shipping information

## 🛠️ Tech Stack
* **React** - Frontend library
* **React Router** - Navigation and routing
* **Tailwind CSS** - Styling and UI components
* **Framer Motion** - Animations
* **Lucide React** - Icon library
* **LocalStorage** - Client-side storage for cart data
* **Context API** - State management

## 📦 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Cart/              # Shopping cart components
│   ├── Layout/            # Layout components (Navbar, Footer)
│   ├── Home/              # Home page components
│   ├── Products/          # Product listing components
│   └── ui/                # UI components (buttons, cards, etc.)
├── contexts/
│   └── CartContext.jsx    # Cart state management
├── hooks/
│   └── useLocalStorage.js # Custom hook for localStorage
├── pages/
│   ├── HomePage.jsx
│   ├── ProductsPage.jsx
│   ├── CartPage.jsx
│   └── NotFoundPage.jsx
├── utils/
│   └── formatCurrency.js  # Utility functions
├── App.jsx               # Main application component
└── main.jsx              # Entry point
```

## 🚀 Getting Started

### Prerequisites
* Node.js (version 14 or higher)
* npm or yarn

### Installation
1. Clone the repository

```bash
git clone https://github.com/UmaMaheshKondaveti/shopmellow.git
cd shopmellow
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Start the development server

```bash
npm run dev
# or
yarn dev
```

4. Open http://localhost:5173 to view the app in your browser

## 🔧 Configuration
The application uses environment variables for configuration. Create a `.env` file in the root directory with the following variables:

```
VITE_API_URL=https://api.shopmellow.com
```

## 📱 Application Views

### Home Page
![Screenshot 2025-05-01 162514](https://github.com/user-attachments/assets/b2ba4191-24da-4146-b962-78d73c5b5f9e)


### Product Categories and Footer
![Screenshot 2025-05-01 162530](https://github.com/user-attachments/assets/936efc65-7545-4d35-a52c-a241b1882858)


### Products Page
![Screenshot 2025-05-01 162547](https://github.com/user-attachments/assets/1196f1a2-0469-4827-a58e-c68d9e98bede)


### Shopping Cart
![Screenshot 2025-05-01 162559](https://github.com/user-attachments/assets/37803f41-4e50-4064-94b8-9f1e2c5651d7)


## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors
* UmaMaheshKondaveti - [GitHub Profile]([https://github.com/yourusername)](https://github.com/UmaMaheshkondaveti)

## 🙏 Acknowledgements
* Tailwind CSS for styling
* Framer Motion for animations
* Lucide Icons for icon library
