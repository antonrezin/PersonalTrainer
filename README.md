## 🏋️ Personal Trainer (React with Vite)

I **developed a Personal Trainer web application** that allows managing customers and their training sessions efficiently.

The website **welcomes users with a Welcome text on the Home page**, and includes:  
- 🧍‍♂️ **Customer list**  
- 🏋️ **Training management**  
- 📅 **Calendar view**  
- 📊 **Training statistics chart**

Everything is **fetched dynamically** from the database when navigating between pages, ensuring that all data on the four main views is always up to date.

### ✨ Features

- **Full CRUD functionality** – view, add, edit, and delete customers from the database.  
- **Customer details** include: first name, last name, address, postal code, city, email, and phone number.  
- On the **Trainings** page, you can delete existing trainings or add new ones by selecting:  
  - Date  
  - Duration (in minutes)  
  - Activity  
  - Existing customer (fetched dynamically from the database)  
- The **Calendar** view displays all scheduled trainings and allows filtering by **month**, **week**, **day**, or **agenda**.  
- The **Chart** visualizes total training duration by activity category (in minutes).  

### 🧩 Tech Stack
- **React with Vite**  
- **JavaScript**  
- **Material UI**  
- **REST API integration**

The app is built with **React** and **Vite**, using a **pre-existing database** and communicating through **REST API calls** to manage and display training data.

🚀 **Live Demo:** [https://antonrezin.github.io/PersonalTrainer/](https://antonrezin.github.io/PersonalTrainer/)
