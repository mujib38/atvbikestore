/* ============================================================
   PRODUCTS DATA FILE
   ============================================================
   Yahan par apne saare products add/edit/delete karo.
   Har product ek object hai is format me:

   {
     id: "unique-id",              // koi bhi unique text, spaces mat use karo
     category: "atv",              // sirf: "atv" | "utv" | "dirtbike"
     name: "49cc Dirt Bike",       // product ka naam
     price: "45,000",              // price bina ₹ symbol ke (symbol khud add hota hai)
     priceNote: "Onwards",         // optional chhota note price ke baad (ya "" khali rakho)
     engine: "49cc",               // engine capacity
     topSpeed: "40 km/h",          // top speed (optional, "" rakh sakte ho)
     inStock: true,                // true = "In Stock" dikhega, false = "Out of Stock"
     image: "images/product1.jpg", // apni image ka path (images folder me daalna)
     description: "Short description of the bike for WhatsApp message."
   }

   NAYA PRODUCT ADD KARNE KE LIYE:
   Neeche di gayi list me bas naya { } object copy-paste karke
   apni details bhar do. Comma (,) lagana mat bhoolna objects ke beech.

   IMAGE KAISE LAGAYE:
   1. "images" naam ka folder banao (agar nahi hai) is file ke sath
   2. Apni product photo us folder me daalo, e.g. images/atv-red-200cc.jpg
   3. Us product ke "image" field me wahi path likho

   Agar image nahi hai to image: "" khali rakho — placeholder dikh jayega.
   ============================================================ */

const PRODUCTS = [

  // ---------------- ATV ----------------
  {
    id: "atv-125cc-classic",
    category: "atv",
    name: "125cc ATV Classic",
    price: "75,000",
    priceNote: "Onwards",
    engine: "125cc",
    topSpeed: "50 km/h",
    inStock: true,
    image: "",
    description: "125cc ATV Classic ke baare me jankari chahiye."
  },
  {
    id: "atv-200cc-super",
    category: "atv",
    name: "200cc Super ATV",
    price: "2,10,000",
    priceNote: "Onwards",
    engine: "200cc",
    topSpeed: "65 km/h",
    inStock: true,
    image: "",
    description: "200cc Super ATV ke baare me jankari chahiye."
  },
  {
    id: "atv-250cc-sport",
    category: "atv",
    name: "250cc Sport ATV",
    price: "2,20,000",
    priceNote: "Onwards",
    engine: "250cc",
    topSpeed: "75 km/h",
    inStock: false,
    image: "",
    description: "250cc Sport ATV ke baare me jankari chahiye."
  },

  // ---------------- UTV ----------------
  {
    id: "utv-500cc-farm",
    category: "utv",
    name: "500cc UTV Farm Edition",
    price: "5,40,000",
    priceNote: "Onwards",
    engine: "500cc",
    topSpeed: "60 km/h",
    inStock: true,
    image: "",
    description: "500cc UTV Farm Edition ke baare me jankari chahiye."
  },
  {
    id: "utv-800cc-utility",
    category: "utv",
    name: "800cc UTV Utility",
    price: "discuss on whatsapp",
    priceNote: "Onwards",
    engine: "800cc",
    topSpeed: "80 km/h",
    inStock: true,
    image: "",
    description: "800cc UTV Utility ke baare me jankari chahiye."
  },

  // ---------------- DIRT BIKE ----------------
  {
    id: "dirtbike-49cc",
    category: "dirtbike",
    name: "49cc Dirt Bike",
    price: "27,000",
    priceNote: "Onwards",
    engine: "49cc",
    topSpeed: "40 km/h",
    inStock: true,
    image: "",
    description: "49cc Dirt Bike ke baare me jankari chahiye."
  },
  {
    id: "dirtbike-125cc-motocross",
    category: "dirtbike",
    name: "125cc Motocross",
    price: "75,000",
    priceNote: "Onwards",
    engine: "125cc",
    topSpeed: "70 km/h",
    inStock: true,
    image: "",
    description: "125cc Motocross ke baare me jankari chahiye."
  },
  {
    id: "dirtbike-135cc-phantom",
    category: "dirtbike",
    name: "135cc Phantom",
    price: "90,000",
    priceNote: "Onwards",
    engine: "135cc",
    topSpeed: "75 km/h",
    inStock: true,
    image: "",
    description: "135cc Phantom ke baare me jankari chahiye."
  },

];

/* ============================================================
   STORE SETTINGS
   ============================================================
   WhatsApp number yahan set karo (country code ke sath, + ya 0 nahi)
   ============================================================ */
const STORE_CONFIG = {
  whatsappNumber: "918866193774",   // Instagram bio se liya gaya number
  defaultMessage: "Hi, i want to purchase atv: "
};
