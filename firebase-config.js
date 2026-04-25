// =============================================================
// 🔥 FIREBASE CONFIGURATION
// =============================================================

const firebaseConfig = {
  apiKey: "AIzaSyBwsK7cJfbNcx_JMv6ogdyvjtszcKG37xI",
  authDomain: "promos-maroc.firebaseapp.com",
  projectId: "promos-maroc",
  storageBucket: "promos-maroc.firebasestorage.app",
  messagingSenderId: "56006761255",
  appId: "1:56006761255:web:f8e2e5b6236a722e386702"
};

const ADMIN_EMAIL = "abdelshafie.ahmed@gmail.com";

// --- YOUR NEW SCRAPING ENGINE URL ---
const SMART_PASTE_WORKER_URL = "https://promos-maroc-fetcher.abdelshafie-ahmed.workers.dev";

// =============================================================
// 🌍 GLOBAL EXPORTS (Allows admin.html to see these)
// =============================================================
window.firebaseConfig = firebaseConfig;
window.ADMIN_EMAIL = ADMIN_EMAIL;
window.SMART_PASTE_WORKER_URL = SMART_PASTE_WORKER_URL;
