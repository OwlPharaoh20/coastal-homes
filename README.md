

# **Coastal Homes - Real Estate Listing Website**

## **Project Overview**
Coastal Homes is a responsive real estate listing platform designed with a modern tech stack. The project showcases property listings with detailed descriptions, an interactive map for property locations, and a review system for user feedback.

### **Features**
- Dynamic property listing with images, prices, and locations.
- Detailed property view pages.
- Map integration to display property locations.
- User review system for property feedback (to be finalized).
- Fully responsive design using Tailwind CSS.

---

## **Tech Stack**
- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Firebase Firestore
- **Map Integration:** Leaflet (OpenStreetMap)

---

## **Installation and Setup**

### **1. Prerequisites**
- Node.js (>= 14.x)
- npm or yarn

### **2. Clone the Repository**
```bash
git clone https://github.com/OwlPharaoh20/coastal-homes.git
cd coastal-homes
```

### **3. Install Dependencies**
```bash
npm install
```

### **4. Environment Configuration**
1. Create a `.env` file in the root directory.
2. Add your Firebase configuration:
   ```
   VITE_API_KEY=YOUR_API_KEY
   VITE_AUTH_DOMAIN=YOUR_PROJECT_ID.firebaseapp.com
   VITE_PROJECT_ID=YOUR_PROJECT_ID
   VITE_STORAGE_BUCKET=YOUR_PROJECT_ID.appspot.com
   VITE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
   VITE_APP_ID=YOUR_APP_ID
   ```

### **5. Run the Development Server**
```bash
npm run dev
```
Access the application at `http://localhost:5173`.

### **6. Build for Production**
```bash
npm run build
```

### **7. Deploy**
- The project is deployed using [Vercel](https://vercel.com/). Update the deployment using:
  ```bash
  git push
  ```

---

## **Project File Structure**
```
coastal-homes/
├── public/                # Public assets
├── src/
│   ├── assets/            # Static assets like images
│   ├── components/        # Reusable React components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── PropertyCard.jsx
│   │   ├── PropertyMap.jsx
│   │   ├── ReviewForm.jsx
│   │   └── ReviewsList.jsx
│   ├── pages/             # Page-level components
│   │   ├── Home.jsx
│   │   └── PropertyDetail.jsx
│   ├── properties.js      # Property data
│   ├── firebase.js        # Firebase configuration
│   └── App.jsx            # Main app component
├── package.json           # Project dependencies
└── vite.config.js         # Vite configuration
```

---

## **Pending Tasks**
1. **Fix `PropertyMap` Rendering:**
   - Investigate why the `PropertyMap` component does not render on the `PropertyDetail` page.
   - Debug the `lat` and `lng` values being passed to the component.

2. **Rework Review System:**
   - Resolve issues with `ReviewForm.jsx` and `ReviewsList.jsx`:
     - Ensure Firestore integration is working.
     - Add proper error handling and form validation.

3. **UserProfile COmponent rework

---

## **How to Resume Development**
- Check pending tasks listed above.
- Revisit console logs for errors related to `PropertyMap` and the review system.
- Follow the debugging steps in the project documentation for quick resolution.

---

## **Contributing**
Contributions are welcome! Fork the repository and create a pull request for any enhancements or bug fixes.

---

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

