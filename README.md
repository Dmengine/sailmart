# Sail Mart

Sail Mart is a modern e-commerce platform built using React and Vite. This project enables users to authenticate, browse products, add items to their cart, checkout, and filter products by variant. The platform also includes an About page, a Contact page, and React Skeleton for better UI/UX.

## Live Demo
- **Live URL**: [Deployed on Vercel](https://sailmart-one.vercel.app/)

## Repository
- **GitHub Repo**: [Sail Mart GitHub](https://github.com/Dmengine/sailmart)


## Technologies Used

### Frontend
- **React + Vite**: A fast build tool for modern web applications.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **React Skeleton**: Used for loading placeholders to enhance UX.

### API & Data Handling
- **Fetch API with Async/Await**: Used for making API calls.
- **FakeStoreAPI**: Provides mock e-commerce data for product listings.
- **EmailJS**: Used for handling contact form submissions via email.
- **Paystack**: Used for payment integration.

### Project Management & Architecture
- **Jira**: Used for task management and collaboration.
- **Draw.io**: Utilized for architectural flow diagrams.
- **GitHub**: Version control and code repository.

### Deployment
- **Vercel**: Used for deploying the application.

---

## Features
- **User Authentication**
- **Product Listing & Filtering**
- **Add to Cart & Checkout**
- **Responsive UI with Tailwind CSS**
- **React Skeleton Loading Effect**
- **About & Contact Pages**
- **Display Products details like images, price, and description**
- **Contact Form with EmailJS**

---

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Dmengine/sailmart.git
   ```
2. Navigate to the project directory:
   ```bash
   cd sailmart
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

---

## Creating the Project
This project was bootstrapped using **React + Vite**.

```bash
npm create vite@latest sailmart --template react
```

### CSS Library
We used **Tailwind CSS** for styling:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### API Consumption
We used **Fetch API with Async/Await** to interact with **FakeStoreAPI**:
```js
const fetchProducts = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};
fetchProducts();
```

---



## Contributors
- **Development Team**: [
    Oladimeji Ayinde - Team Lead,
    Fesomu Yusuf - Assistance,
    Emem Etukudo - Community Manager,
    Onyeani Faith - Facilitator,
    Emmanuel Alabi - Business Strategist,
    Balogun Taoheed,
    Mary Francis,
    Aminat Amusa
    Daniel John
]

For any questions or contributions, feel free to create an issue on GitHub.

Happy coding! 🚀


