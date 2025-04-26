
# BrandList – Fullstack Toplist CRUD Application

---

## 🚀 Technologies Used

| Layer | Tech Stack |
|:------|:-----------|
| Backend | Laravel 12, PHP 8.2 |
| Frontend | React 18, TypeScript |
| Database | MySQL 8 |
| Containerization | Docker, Docker Compose |

---

## 🌍 Main Features

- View Toplist of Brands
- Create a New Brand 
- Edit an Existing Brand 
- Delete Brand 
- Filter Brands by:
  - Country


---

## 📂 Project Structure

```bash
/theBrandList/
├── backend/          
├── frontend/        
├── docker-compose.yml
├── README.md
```

---

## 🛠️ Setup Instructions

### 📦 Local Installation (without Docker)

---

### Backend (Laravel)

```bash
cd backend
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve
```

- **Backend API accessible at:** http://localhost:8000/api/brands

---

### Frontend (React)

```bash
cd frontend
npm install
npm start
```

- **Frontend accessible at:** http://localhost:3000

---

### 🐳 Setup with Docker (Recommended)

At the project root:

```bash
docker-compose up --build
```

- **Backend API (Laravel):** http://localhost:8080/api/brands
- **Frontend (React App):** http://localhost:3001

> Make sure ports 8080 and 3001 are free before starting.

---

### 🔥 Important: Manual Migration Required

After starting the containers, **you must run the database migrations manually**:

```bash
docker compose exec backend php artisan migrate --seed
```

✅ This will create the database tables and seed the initial data.

✅ Must be done **only once** when launching the project the first time.

---

## 📄 API Endpoints (Examples)

| Method | URL | Description |
|:------|:----|:------------|
| GET | `/api/brands` | List brands (filtered by CF-IPCountry header) |
| POST | `/api/brands` | Create a brand |
| PUT | `/api/brands/{id}` | Update a brand |
| DELETE | `/api/brands/{id}` | Delete a brand |

---

## 🧪 Testing

- API can be tested using **Postman**.
- A Postman Collection is available (optional import).

---

# 🎯 Quick Commands

| Command | Description |
|:--------|:------------|
| `docker-compose up --build` | Start the whole stack (backend + frontend) |
| `npm start` (frontend) | Start frontend development server |
| `php artisan serve` (backend) | Start Laravel backend server |


