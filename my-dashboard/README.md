# CryptoWeather Nexus

CryptoWeather Nexus is a modern, multi-page dashboard that combines real-time weather data, cryptocurrency information, and WebSocket-based notifications. Built using **Next.js, React, Redux, and Tailwind CSS**, this project delivers a seamless user experience with live updates.

## 🌍 Publicly Deployed Link

🔗 [CryptoWeather Nexus Live](https://crypto-weather-nexus.vercel.app/)

---

## 🛠️ Setup Instructions

### Prerequisites
Ensure you have the following installed:
- **Node.js v20+** (recommended)
- **npm or yarn**

### Installation Steps

1. Clone the repository:
   ```sh
   git clone https://github.com/LVSJanakiRamaraju/CryptoWeather-Nexus.git
   cd CryptoWeather-Nexus
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create an **.env.local** file in the root directory and configure API keys:
   ```env
   NEXT_PUBLIC_WEATHER_API_KEY=your_weather_api_key
   NEXT_PUBLIC_CRYPTO_API_KEY=your_crypto_api_key
   ```

4. Run the development server:
   ```sh
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. To build for production:
   ```sh
   npm run build && npm start
   ```

---

## 🏗️ Build & Deployment Instructions

- To deploy, use **Vercel** or **Netlify**:
  ```sh
  vercel deploy
  ```
- Ensure environment variables are set up in your hosting platform.

---

## 🎨 Design Decisions

- **Next.js & Server-Side Rendering (SSR):** Used for SEO and fast initial loads.
- **Redux Toolkit:** Manages global state efficiently.
- **Tailwind CSS:** Provides a sleek and responsive UI.
- **WebSocket Integration:** Real-time notifications for weather and crypto alerts.
- **Dark Mode Support:** A toggleable dark/light theme.

---

## 🔥 Challenges & Solutions

### 1️⃣ **Tailwind CSS Not Working**
- **Issue:** `npx tailwindcss init -p` was failing.
- **Solution:** Installed the correct Tailwind/PostCSS dependencies and updated `postcss.config.js`.

### 2️⃣ **WebSocket Reconnection**
- **Issue:** WebSocket was disconnecting intermittently.
- **Solution:** Implemented automatic reconnection logic using event listeners.

### 3️⃣ **API Rate Limits**
- **Issue:** Some API calls were getting throttled.
- **Solution:** Cached responses and used alternative APIs.

---

## 🔄 Alternative APIs Used

If primary APIs were unavailable, these were used:
- **OpenWeatherMap → WeatherAPI.com**
- **CoinGecko → CoinPaprika**

---

## 🏆 Future Enhancements

- [ ] **User Authentication (OAuth/Google Login)**
- [ ] **Personalized Crypto Watchlists**
- [ ] **PWA Support for Offline Mode**
- [ ] **Mobile App Version**

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 🤝 Contributions
Feel free to fork the repo and submit PRs! Suggestions & feedback are always welcome.

📩 Contact: [rajakanumuri2005@gmail.com](mailto:rajakanumuri2005@gmail.com)
