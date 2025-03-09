# 🎬 React Movie Search App

## 📌 Project Overview
This is a **React-based movie search application** that integrates with the [OMDB API](https://www.omdbapi.com/) to fetch and display movies. Users can **search for movies**, view detailed information, **filter by type**, and manage a list of favorites. The app also includes **pagination** for large result sets.

---

## 🚀 Features
- ✅ **Search Movies** - Enter keywords to find movies using the OMDB API.  
- ✅ **Movie Details** - View an individual movie's details, including its title, year, genre, plot summary, ratings, and cast.  
- ✅ **Favorites List** - Save and manage your favorite movies.  
- ✅ **Pagination** - Navigate through large sets of search results efficiently.  
- ✅ **Movie Type Filter** - Filter results based on movie type (Movie, Series, Episode) directly from the API.  
- ✅ **Error Handling** - Displays user-friendly messages if API requests fail or no results are found.  
- ✅ **Clean UI & Responsive Design** - A modern, dark-themed interface with smooth transitions.  

---

## 🛠️ Tech Stack
- **React.js** - Frontend library for UI development.
- **React Router** - Enables navigation between pages.
- **JavaScript (ES6+)** - For logic and functionality.
- **CSS (Without Tailwind)** - Custom dark theme with responsiveness and smooth interactions.
- **OMDB API** - Used for fetching movie data.
- **Netlify** - Deployment platform.

---

## 📂 Project Structure
```
📁 movie-search-app
│── 📁 src
│   ├── 📁 api
│   │   ├── api.js        # Handles API requests
│   ├── 📁 components
│   │   ├── SearchBar.jsx  # Search input UI
│   │   ├── MoviesGrid.jsx  # Displays search results
│   │   ├── Pagination.jsx  # Handles pagination
│   ├── 📁 pages
│   │   ├── SearchPage.jsx  # Main search page
│   │   ├── MovieDetails.jsx # Movie detail page
│   ├── App.js            # Main app component
│   ├── index.js          # React entry point
│   ├── index.css         # Global styles
│── 📁 public
│── .gitignore
│── package.json
│── README.md
```

---

## 🔧 Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/movie-search-app.git
cd movie-search-app
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Get OMDB API Key
- Go to [OMDB API](https://www.omdbapi.com/) and get a free API key.
- Create a `.env` file in the root directory and add:
```env
REACT_APP_OMDB_API_KEY=your_api_key_here
```

### 4️⃣ Run the App Locally
```sh
npm start
```
The app will run at **[http://localhost:3000/](http://localhost:3000/)**.

---

## 🌍 Deployment
### **Deploy to Netlify**
1. Push your code to GitHub.
2. Go to [Netlify](https://www.netlify.com/) and connect your GitHub repository.
3. Deploy your site in one click!

---

## 📜 License
This project is **open-source** and available under the **MIT License**.

---

## 🎯 Future Improvements
- **Add user authentication** for personalized favorites.
- **Improve UI/UX** with animations and better layouts.
- **Optimize API calls** for better performance.
- **Implement a caching mechanism** to reduce API calls.
- **Enhance accessibility** for a more inclusive user experience.

---
