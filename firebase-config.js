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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Services
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

const ADMIN_EMAIL = "abdelshafie.ahmed@gmail.com";

// --- YOUR NEW SCRAPING ENGINE URL ---
const SMART_PASTE_WORKER_URL = "https://promos-maroc-fetcher.abdelshafie-ahmed.workers.dev";

// =============================================================
// 🌍 GLOBAL EXPORTS (Making them available to admin.html)
// =============================================================
window.db = db;
window.auth = auth;
window.storage = storage;
window.ADMIN_EMAIL = ADMIN_EMAIL;
window.SMART_PASTE_WORKER_URL = SMART_PASTE_WORKER_URL;
