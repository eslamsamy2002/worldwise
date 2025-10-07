# 🌍 WorldWide 

A React application that helps you explore **cities** and **countries** around the world.
It includes **authentication, protected routes, and CRUD operations** on cities, with a clean context-based state management approach.

---

## 🚀 Features

* 🔑 **Authentication system** (fake auth with login/logout).
* 🏙 **Cities management** – add, view, and delete cities.
* 🌎 **Countries list**.
* 🔒 **Protected routes** – only logged-in users can access the app.
* ⚡ **Context + Reducer state management** (`AuthContext`, `CitiesContext`).
* 🎨 Modular React component structure with reusable layouts.
* 🌀 **Loading states** with full-page spinner.
* 🛡 Error handling with graceful fallbacks.
✨ Beautiful animations (Lottie-powered).
📱 Responsive design – works seamlessly on desktop & mobile.

---

## 📂 Project Structure

```
src/
│── components/
│   ├── CityList.jsx
│   ├── CountryList.jsx
│   ├── City.jsx
│   ├── Form.jsx
│   ├── SpinnerFullPage.jsx
│
│── contexts/
│   ├── CitiesContext.jsx
│   ├── FakeAuthContext.jsx
│
│── pages/
│   ├── Homepage.jsx
│   ├── Product.jsx
│   ├── Pricing.jsx
│   ├── Login.jsx
│   ├── AppLayout.jsx
│   ├── ProtectedRoute.jsx
│   ├── PageNotFound.jsx
│
│── App.jsx
│── index.jsx
```

---

##  Tech Stack

* **React 18**
* **React Router v6**
* **Context API + useReducer**
* **Fake Authentication (demo user)**
* **JSON Server (mock API for cities & countries)**

---

## ⚙️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/worldwide-explorer.git
   cd worldwide-explorer
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run JSON Server** (mock backend)

   ```bash
   npx json-server --watch data/db.json --port 3000
   ```

4. **Start the React app**

   ```bash
   npm start
   ```

---

## Login Credentials

Use the demo account:

```
Email: jack@example.com
Password: qwerty
```

---

## 🎥 Demo

//![App Demo](./worldwise.gif)



---

##  Contributing

Contributions are welcome! If you’d like to add new features, fix bugs, or improve docs:

1. Fork the repo
2. Create a new branch (`feature-branch`)
3. Commit your changes
4. Open a Pull Request

---

##  License

This project is licensed under the **MIT License**.

---

✨ Built with ❤️ using React & Context API

---


