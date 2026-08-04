// ==========================================
// SPRITSHOP — APP LOGIC (108 DUSZKÓW)
// ==========================================

// Translations (PL / EN)
const translations = {
    pl: {
        tagline: "EKSKLUZYWNY VAULT DUSZKÓW",
        searchPlaceholder: "Szukaj duszka po nazwie...",
        cart: "KOSZYK",
        heroBadge: "108 DUSZKÓW — ŁATWY EDYTOR ZDJĘĆ",
        heroTitlePart1: "WYBIERZ",
        heroTitlePart2: "EKSKLUZYWNE DUSZKI",
        heroDesc: "Kliknij w dowolnego duszka, aby wkleić własny link do zdjęcia! Twoje zmiany zapisują się automatycznie.",
        browseBtn: "PRZEGLĄDAJ KATALOG (108)",
        statTitle: "Unikalnych Duszków",
        statDesc: "Wklejaj linki do obrazków bezpośrednio w oknie podglądu!",
        filterAll: "Wszystkie Duszki (108)",
        rarityLabel: "Rzadkość:",
        rarityAll: "Wszystkie",
        raritySpecial: "Specjalne",
        rarityMythic: "Mityczne",
        rarityLegendary: "Legendarne",
        rarityEpic: "Epickie",
        rarityRare: "Rzadkie",
        sortDefault: "Sortowanie: Domyślne",
        sortLow: "Cena: Od najniższej",
        sortHigh: "Cena: Od najwyższej",
        sortChance: "Szansa: Najrzadsze",
        cartHeader: "TWÓJ KOSZYK",
        cartEmpty: "Twój koszyk jest pusty. Dodaj duszki ze sklepu!",
        cartItemCount: "Liczba przedmiotów:",
        deliveryMethod: "Metoda dostawy:",
        instantDelivery: "Natychmiastowa Cyfrowa",
        cartTotal: "Suma zamówienia:",
        proceedToCheckout: "PRZEJDŹ DO PŁATNOŚCI (BLIK / KARTA)",
        dropChance: "Szansa na Drop:",
        ownershipStatus: "Status Posiadania:",
        itemPrice: "Cena Duszka:",
        addToCart: "DODAJ DO KOSZYKA",
        securePayment: "BEZPIECZNA PŁATNOŚĆ SPRITSHOP",
        checkoutTitle: "REALIZACJA ZAMÓWIENIA",
        itemsSummary: "Zestawienie Przedmiotów",
        totalAmount: "ŁĄCZNA KWOTA:",
        choosePayment: "Wybierz Metodę Płatności:",
        blikSub: "Szybki kod",
        cardSub: "Karta Visa/MC",
        payuSub: "PayU / P24",
        blikPrompt: "WPISZ 6-CYFROWY KOD BLIK",
        blikHelp: "Potwierdź płatność w swojej aplikacji bankowej po kliknięciu zapłać.",
        cardNumber: "Numer Karty",
        cardExpiry: "Ważność (MM/YY)",
        submitPayment: "POTWIERDŹ I ZAPŁAĆ (BLIK)",
        successTitle: "PŁATNOŚĆ PRZYJĘTA!",
        successDesc: "Twoje duszki zostały natychmiastowo dodane do Twojego konta SpritShop.",
        orderIdLabel: "ID Zamówienia:",
        statusLabel: "Status:",
        statusCompleted: "ZREALIZOWANO",
        backToShop: "WRÓĆ DO SKLEPU",
        footerDesc: "Ekskluzywny vault z 108 Duszkami ze skalowanymi cenami w PLN ($5 Zero Point boost).",
        terms: "Regulamin",
        privacy: "Polityka Prywatności",
        support: "Pomoc",
        owned: "Posiadany",
        notOwned: "Nieposiadany",
        addBtn: "KUP TERAZ",
        edition: "Edycja:",
        foundCount: "Wyświetlono: {count} z 108 Duszków",
        pasteImageLabel: "Wklej link do obrazka dla tego duszka:"
    },
    en: {
        tagline: "EXCLUSIVE SPRITE VAULT",
        searchPlaceholder: "Search sprite by name...",
        cart: "CART",
        heroBadge: "108 SPRITES — EASY IMAGE EDITOR",
        heroTitlePart1: "CHOOSE",
        heroTitlePart2: "EXCLUSIVE SPRITES",
        heroDesc: "Click on any sprite to paste your custom image URL! Your changes are saved automatically.",
        browseBtn: "BROWSE CATALOG (108)",
        statTitle: "Unique Sprites",
        statDesc: "Paste image links directly in the preview modal!",
        filterAll: "All Sprites (108)",
        rarityLabel: "Rarity:",
        rarityAll: "All",
        raritySpecial: "Special",
        rarityMythic: "Mythic",
        rarityLegendary: "Legendary",
        rarityEpic: "Epic",
        rarityRare: "Rare",
        sortDefault: "Sorting: Default",
        sortLow: "Price: Low to High",
        sortHigh: "Price: High to Low",
        sortChance: "Chance: Rarest First",
        cartHeader: "YOUR CART",
        cartEmpty: "Your cart is empty. Add sprites from the shop!",
        cartItemCount: "Items count:",
        deliveryMethod: "Delivery method:",
        instantDelivery: "Instant Digital",
        cartTotal: "Order Total:",
        proceedToCheckout: "PROCEED TO CHECKOUT (BLIK / CARD)",
        dropChance: "Drop Chance:",
        ownershipStatus: "Ownership Status:",
        itemPrice: "Sprite Price:",
        addToCart: "ADD TO CART",
        securePayment: "SECURE SPRITSHOP CHECKOUT",
        checkoutTitle: "CHECKOUT ORDER",
        itemsSummary: "Items Summary",
        totalAmount: "TOTAL AMOUNT:",
        choosePayment: "Choose Payment Method:",
        blikSub: "Instant code",
        cardSub: "Visa/MC Card",
        payuSub: "PayU / Bank",
        blikPrompt: "ENTER 6-DIGIT BLIK CODE",
        blikHelp: "Confirm payment in your banking app after clicking pay.",
        cardNumber: "Card Number",
        cardExpiry: "Expiry (MM/YY)",
        submitPayment: "CONFIRM & PAY (BLIK)",
        successTitle: "PAYMENT APPROVED!",
        successDesc: "Your sprites have been added to your SpritShop account instantly.",
        orderIdLabel: "Order ID:",
        statusLabel: "Status:",
        statusCompleted: "COMPLETED",
        backToShop: "BACK TO SHOP",
        footerDesc: "Exclusive vault with 108 Sprites & scaled pricing in PLN ($5 Zero Point boost).",
        terms: "Terms of Service",
        privacy: "Privacy Policy",
        support: "Support",
        owned: "Owned",
        notOwned: "Not owned",
        addBtn: "BUY NOW",
        edition: "Edition:",
        foundCount: "Displayed: {count} of 108 Sprites",
        pasteImageLabel: "Paste image link for this sprite:"
    }
};

let currentLang = 'pl';

function setLanguage(lang) {
    currentLang = lang;
    const flagEl = document.getElementById('current-lang-flag');
    const codeEl = document.getElementById('current-lang-code');
    if (flagEl) flagEl.textContent = lang === 'pl' ? '🇵🇱' : '🇬🇧';
    if (codeEl) codeEl.textContent = lang.toUpperCase();

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    filterProducts();
}

// Raw Sprite Catalog (108 items)
const rawSpriteList = [
    { name: "John Wick Sprite", base: "John Wick", rarity: "mythic", chance: "0%", status: "Not owned" },
    { name: "Batman Sprite", base: "Batman", rarity: "mythic", chance: "1.44%", status: "Not owned" },
    { name: "Cube Batman Sprite", base: "Cube Batman", rarity: "special", chance: "0.02%", status: "Not owned" },
    { name: "Gold Batman Sprite", base: "Gold Batman", rarity: "special", chance: "0.17%", status: "Not owned" },
    { name: "Gummy Batman Sprite", base: "Gummy Batman", rarity: "special", chance: "0.1%", status: "Not owned" },
    { name: "Galaxy Batman Sprite", base: "Galaxy Batman", rarity: "special", chance: "0.07%", status: "Not owned" },
    { name: "Holofoil Batman Sprite", base: "Holofoil Batman", rarity: "special", chance: "0.34%", status: "Not owned" },
    { name: "Water Sprite", base: "Water", rarity: "rare", chance: "0%", status: "Not owned" },
    { name: "Gold Water Sprite", base: "Gold Water", rarity: "special", chance: "0.53%", status: "Not owned" },
    { name: "Quack Water Sprite", base: "Quack Water", rarity: "special", chance: "0%", status: "Not owned" },
    { name: "Gummy Water Sprite", base: "Gummy Water", rarity: "special", chance: "0.53%", status: "Not owned" },
    { name: "Galaxy Water Sprite", base: "Galaxy Water", rarity: "special", chance: "0.43%", status: "Not owned" },
    { name: "Holofoil Water Sprite", base: "Holofoil Water", rarity: "special", chance: "0.53%", status: "Not owned" },
    { name: "Earth Sprite", base: "Earth", rarity: "rare", chance: "0%", status: "Not owned" },
    { name: "Cube Earth Sprite", base: "Cube Earth", rarity: "special", chance: "0.21%", status: "Not owned" },
    { name: "Gold Earth Sprite", base: "Gold Earth", rarity: "special", chance: "0.53%", status: "Not owned" },
    { name: "Quack Earth Sprite", base: "Quack Earth", rarity: "special", chance: "0%", status: "Not owned" },
    { name: "Gummy Earth Sprite", base: "Gummy Earth", rarity: "special", chance: "0.53%", status: "Not owned" },
    { name: "Galaxy Earth Sprite", base: "Galaxy Earth", rarity: "special", chance: "0.43%", status: "Not owned" },
    { name: "Fire Sprite", base: "Fire", rarity: "rare", chance: "0%", status: "Not owned" },
    { name: "Cube Fire Sprite", base: "Cube Fire", rarity: "special", chance: "0.21%", status: "Not owned" },
    { name: "Gold Fire Sprite", base: "Gold Fire", rarity: "special", chance: "0.53%", status: "Not owned" },
    { name: "Quack Fire Sprite", base: "Quack Fire", rarity: "special", chance: "0%", status: "Not owned" },
    { name: "Gummy Fire Sprite", base: "Gummy Fire", rarity: "special", chance: "0.53%", status: "Not owned" },
    { name: "Galaxy Fire Sprite", base: "Galaxy Fire", rarity: "special", chance: "0.43%", status: "Not owned" },
    { name: "Holofoil Fire Sprite", base: "Holofoil Fire", rarity: "special", chance: "0.53%", status: "Not owned" },
    { name: "Duck Sprite", base: "Duck", rarity: "epic", chance: "6.48%", status: "Not owned" },
    { name: "Gold Duck Sprite", base: "Gold Duck", rarity: "special", chance: "0.62%", status: "Not owned" },
    { name: "Gummy Duck Sprite", base: "Gummy Duck", rarity: "special", chance: "0.37%", status: "Not owned" },
    { name: "Galaxy Duck Sprite", base: "Galaxy Duck", rarity: "special", chance: "0.25%", status: "Not owned" },
    { name: "Ghost Sprite", base: "Ghost", rarity: "epic", chance: "5.25%", status: "Not owned" },
    { name: "Gold Ghost Sprite", base: "Gold Ghost", rarity: "special", chance: "0.62%", status: "Not owned" },
    { name: "Gummy Ghost Sprite", base: "Gummy Ghost", rarity: "special", chance: "0.37%", status: "Not owned" },
    { name: "Galaxy Ghost Sprite", base: "Galaxy Ghost", rarity: "special", chance: "0.25%", status: "Not owned" },
    { name: "Holofoil Ghost Sprite", base: "Holofoil Ghost", rarity: "special", chance: "1.23%", status: "Not owned" },
    { name: "Dream Sprite", base: "Dream", rarity: "legendary", chance: "4.45%", status: "Not owned" },
    { name: "Cube Dream Sprite", base: "Cube Dream", rarity: "special", chance: "0.04%", status: "Not owned" },
    { name: "Gold Dream Sprite", base: "Gold Dream", rarity: "special", chance: "0.43%", status: "Not owned" },
    { name: "Gummy Dream Sprite", base: "Gummy Dream", rarity: "special", chance: "0.26%", status: "Not owned" },
    { name: "Galaxy Dream Sprite", base: "Galaxy Dream", rarity: "special", chance: "0.17%", status: "Not owned" },
    { name: "Demon Sprite", base: "Demon", rarity: "epic", chance: "6.48%", status: "Not owned" },
    { name: "Gold Demon Sprite", base: "Gold Demon", rarity: "special", chance: "0.62%", status: "Not owned" },
    { name: "Gummy Demon Sprite", base: "Gummy Demon", rarity: "special", chance: "0.37%", status: "Not owned" },
    { name: "Galaxy Demon Sprite", base: "Galaxy Demon", rarity: "special", chance: "0.25%", status: "Not owned" },
    { name: "Punk Sprite", base: "Punk", rarity: "legendary", chance: "4.45%", status: "Not owned" },
    { name: "Cube Punk Sprite", base: "Cube Punk", rarity: "special", chance: "0.04%", status: "Not owned" },
    { name: "Gold Punk Sprite", base: "Gold Punk", rarity: "special", chance: "0.43%", status: "Not owned" },
    { name: "Gummy Punk Sprite", base: "Gummy Punk", rarity: "special", chance: "0.26%", status: "Not owned" },
    { name: "Galaxy Punk Sprite", base: "Galaxy Punk", rarity: "special", chance: "0.17%", status: "Not owned" },
    { name: "King Sprite", base: "King", rarity: "epic", chance: "5.25%", status: "Not owned" },
    { name: "Gold King Sprite", base: "Gold King", rarity: "special", chance: "0.62%", status: "Not owned" },
    { name: "Gummy King Sprite", base: "Gummy King", rarity: "special", chance: "0.37%", status: "Not owned" },
    { name: "Galaxy King Sprite", base: "Galaxy King", rarity: "special", chance: "0.25%", status: "Not owned" },
    { name: "Holofoil King Sprite", base: "Holofoil King", rarity: "special", chance: "1.23%", status: "Not owned" },
    { name: "Burnt Peanut", base: "Burnt Peanut", rarity: "mythic", chance: "2.14%", status: "Not owned" },
    { name: "Vini Jr. Sprite", base: "Vini Jr.", rarity: "mythic", chance: "2.14%", status: "Not owned" },
    { name: "Zero Point Sprite", base: "Zero Point", rarity: "mythic", chance: "0%", status: "Not owned" },
    { name: "Cube Zero Point Sprite", base: "Cube Zero Point", rarity: "special", chance: "0.000014%", status: "Not owned" },
    { name: "Gold Zero Point Sprite", base: "Gold Zero Point", rarity: "special", chance: "0.00014%", status: "Not owned" },
    { name: "Quack Zero Point Sprite", base: "Quack Zero Point", rarity: "special", chance: "0%", status: "Not owned" },
    { name: "Gummy Zero Point Sprite", base: "Gummy Zero Point", rarity: "special", chance: "0.000085%", status: "Not owned" },
    { name: "Galaxy Zero Point Sprite", base: "Galaxy Zero Point", rarity: "special", chance: "0.000056%", status: "Not owned" },
    { name: "Holofoil Zero Point Sprite", base: "Holofoil Zero Point", rarity: "special", chance: "0.00028%", status: "Not owned" },
    { name: "Fishy Sprite", base: "Fishy", rarity: "rare", chance: "0%", status: "Not owned" },
    { name: "Cube Fishy Sprite", base: "Cube Fishy", rarity: "special", chance: "0.21%", status: "Not owned" },
    { name: "Gold Fishy Sprite", base: "Gold Fishy", rarity: "special", chance: "0.64%", status: "Not owned" },
    { name: "Gummy Fishy Sprite", base: "Gummy Fishy", rarity: "special", chance: "0.53%", status: "Not owned" },
    { name: "Galaxy Fishy Sprite", base: "Galaxy Fishy", rarity: "special", chance: "0.43%", status: "Not owned" },
    { name: "Striker Sprite", base: "Striker", rarity: "epic", chance: "5.25%", status: "Not owned" },
    { name: "Gold Striker Sprite", base: "Gold Striker", rarity: "special", chance: "0.62%", status: "Not owned" },
    { name: "Gummy Striker Sprite", base: "Gummy Striker", rarity: "special", chance: "0.37%", status: "Not owned" },
    { name: "Galaxy Striker Sprite", base: "Galaxy Striker", rarity: "special", chance: "0.25%", status: "Not owned" },
    { name: "Holofoil Striker Sprite", base: "Holofoil Striker", rarity: "special", chance: "1.23%", status: "Not owned" },
    { name: "Aura Sprite", base: "Aura", rarity: "epic", chance: "6.48%", status: "Not owned" },
    { name: "Gold Aura Sprite", base: "Gold Aura", rarity: "special", chance: "0.62%", status: "Not owned" },
    { name: "Gummy Aura Sprite", base: "Gummy Aura", rarity: "special", chance: "0.37%", status: "Not owned" },
    { name: "Galaxy Aura Sprite", base: "Galaxy Aura", rarity: "special", chance: "0.25%", status: "Not owned" },
    { name: "Boss Sprite", base: "Boss", rarity: "legendary", chance: "4.45%", status: "Not owned" },
    { name: "Cube Boss Sprite", base: "Cube Boss", rarity: "special", chance: "0.04%", status: "Not owned" },
    { name: "Gold Boss Sprite", base: "Gold Boss", rarity: "special", chance: "0.43%", status: "Not owned" },
    { name: "Gummy Boss Sprite", base: "Gummy Boss", rarity: "special", chance: "0.26%", status: "Not owned" },
    { name: "Galaxy Boss Sprite", base: "Galaxy Boss", rarity: "special", chance: "0.17%", status: "Not owned" },
    { name: "Grim Sprite", base: "Grim", rarity: "mythic", chance: "0.15%", status: "Not owned" },
    { name: "Cube Grim Sprite", base: "Cube Grim", rarity: "special", chance: "0%", status: "Not owned" },
    { name: "Gold Grim Sprite", base: "Gold Grim", rarity: "special", chance: "0.01%", status: "Not owned" },
    { name: "Gummy Grim Sprite", base: "Gummy Grim", rarity: "special", chance: "0.01%", status: "Not owned" },
    { name: "Galaxy Grim Sprite", base: "Galaxy Grim", rarity: "special", chance: "0.01%", status: "Not owned" },
    { name: "Holofoil Grim Sprite", base: "Holofoil Grim", rarity: "special", chance: "0%", status: "Not owned" },
    { name: "Air Sprite", base: "Air", rarity: "rare", chance: "0%", status: "Not owned" },
    { name: "Gold Air Sprite", base: "Gold Air", rarity: "special", chance: "0.53%", status: "Not owned" },
    { name: "Gummy Air Sprite", base: "Gummy Air", rarity: "special", chance: "0.53%", status: "Not owned" },
    { name: "Galaxy Air Sprite", base: "Galaxy Air", rarity: "special", chance: "0.43%", status: "Not owned" },
    { name: "Holofoil Air Sprite", base: "Holofoil Air", rarity: "special", chance: "0.53%", status: "Not owned" },
    { name: "Seven Sprite", base: "Seven", rarity: "legendary", chance: "3.63%", status: "Not owned" },
    { name: "Gold Seven Sprite", base: "Gold Seven", rarity: "special", chance: "0.43%", status: "Not owned" },
    { name: "Gummy Seven Sprite", base: "Gummy Seven", rarity: "special", chance: "0.26%", status: "Not owned" },
    { name: "Galaxy Seven Sprite", base: "Galaxy Seven", rarity: "special", chance: "0.17%", status: "Not owned" },
    { name: "Holofoil Seven Sprite", base: "Holofoil Seven", rarity: "special", chance: "0.85%", status: "Not owned" },
    { name: "Pollo Sprite", base: "Pollo", rarity: "mythic", chance: "2.14%", status: "Not owned" },
    { name: "Llama Sprite", base: "Llama", rarity: "legendary", chance: "4.45%", status: "Not owned" },
    { name: "Gold Llama Sprite", base: "Gold Llama", rarity: "special", chance: "0.43%", status: "Not owned" },
    { name: "Gummy Llama Sprite", base: "Gummy Llama", rarity: "special", chance: "0.26%", status: "Not owned" },
    { name: "Galaxy Llama Sprite", base: "Galaxy Llama", rarity: "special", chance: "0.17%", status: "Not owned" },
    { name: "Gem Llama Sprite", base: "Gem Llama", rarity: "special", chance: "0%", status: "Not owned" },
    { name: "Peely Sprite", base: "Peely", rarity: "legendary", chance: "4.62%", status: "Not owned" },
    { name: "Gold Peely Sprite", base: "Gold Peely", rarity: "special", chance: "0.43%", status: "Not owned" },
    { name: "Gummy Peely Sprite", base: "Gummy Peely", rarity: "special", chance: "0.26%", status: "Not owned" },
    { name: "Galaxy Peely Sprite", base: "Galaxy Peely", rarity: "special", chance: "0.17%", status: "Not owned" }
];

// Price Calculation Algorithm
function calculatePrice(item) {
    let basePrice = 9.99;

    if (item.rarity === 'epic') basePrice = 19.99;
    else if (item.rarity === 'legendary') basePrice = 34.99;
    else if (item.rarity === 'mythic') basePrice = 49.99;
    else if (item.rarity === 'special') basePrice = 39.99;

    const chanceVal = parseFloat(item.chance);
    if (item.rarity === 'special') {
        if (chanceVal === 0) basePrice += 40.00;
        else if (chanceVal < 0.001) basePrice += 35.00;
        else if (chanceVal < 0.05) basePrice += 25.00;
        else if (chanceVal < 0.3) basePrice += 15.00;
        else if (chanceVal < 0.6) basePrice += 10.00;
        else basePrice += 5.00;
    }

    if (item.name.toLowerCase().includes('zero point') || item.name.toLowerCase().includes('point')) {
        basePrice += 20.00; // $5 USD boost in PLN
    }

    return Math.round(basePrice * 100) / 100;
}

// Load saved custom images from localStorage
let savedImages = {};
try {
    const local = localStorage.getItem('spritshop_custom_images');
    if (local) savedImages = JSON.parse(local);
} catch(e) {}

const products = rawSpriteList.map((item, index) => {
    let variant = 'standard';
    if (item.name.includes('Gold')) variant = 'gold';
    else if (item.name.includes('Galaxy')) variant = 'galaxy';
    else if (item.name.includes('Holofoil')) variant = 'holofoil';
    else if (item.name.includes('Gummy')) variant = 'gummy';
    else if (item.name.includes('Cube')) variant = 'cube';
    else if (item.name.includes('Quack')) variant = 'quack';

    const calculatedPLN = calculatePrice(item);
    const customImg = savedImages[item.name] || null;

    return {
        id: index + 1,
        name: item.name,
        baseName: item.base,
        rarity: item.rarity,
        chance: item.chance,
        status: item.status,
        variant: variant,
        pricePLN: calculatedPLN,
        imgUrl: customImg && customImg.trim().length > 0 ? customImg.trim() : null
    };
});

// App State
let cart = [];
let currentVariantFilter = 'all';
let currentRarityFilter = 'all';
let currentSort = 'default';
let searchQuery = '';

// DOM Elements
const productsGrid = document.getElementById('products-grid');
const shopSearch = document.getElementById('shop-search');
const resultsCount = document.getElementById('results-count');
const priceSort = document.getElementById('price-sort');
const cartBtn = document.getElementById('cart-btn');
const cartDrawer = document.getElementById('cart-drawer');
const closeCartBtn = document.getElementById('close-cart-btn');
const cartItemsList = document.getElementById('cart-items-list');
const cartTotalBadge = document.getElementById('cart-total-badge');
const cartTotalPln = document.getElementById('cart-total-pln');
const cartTotalItemsCount = document.getElementById('cart-total-items-count');
const checkoutBtn = document.getElementById('checkout-btn');

// Modals
const itemModal = document.getElementById('item-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const modalImgContainer = document.getElementById('modal-img-container');
const modalImgUrlInput = document.getElementById('modal-img-url-input');
const saveImgUrlBtn = document.getElementById('save-img-url-btn');
const modalBadge = document.getElementById('modal-badge');
const modalTitle = document.getElementById('modal-title');
const modalChance = document.getElementById('modal-chance');
const modalStatus = document.getElementById('modal-status');
const modalPrice = document.getElementById('modal-price');
const modalAddBtn = document.getElementById('modal-add-btn');
let selectedProductModal = null;

// Checkout Modal
const checkoutModal = document.getElementById('checkout-modal');
const closeCheckoutBtn = document.getElementById('close-checkout-btn');
const checkoutItemsCount = document.getElementById('checkout-items-count');
const checkoutItemsPreview = document.getElementById('checkout-items-preview');
const checkoutFinalPrice = document.getElementById('checkout-final-price');
const submitPaymentBtn = document.getElementById('submit-payment-btn');
const submitPaymentText = document.getElementById('submit-payment-text');
const successModal = document.getElementById('success-modal');
const closeSuccessBtn = document.getElementById('close-success-btn');
const successOrderId = document.getElementById('success-order-id');

// Dynamic SVG Avatar or Image Graphic Generator
function generateSpriteGraphic(product) {
    if (product.imgUrl && product.imgUrl.trim() !== '') {
        return `<img src="${product.imgUrl}" alt="${product.name}" class="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-110">`;
    }

    let bgGradient = 'linear-gradient(135deg, #1e293b, #0f172a)';
    let iconClass = 'fa-ghost';
    let iconColor = '#94a3b8';

    if (product.rarity === 'special') {
        bgGradient = 'linear-gradient(135deg, #ec4899, #8b5cf6, #06b6d4)';
        iconColor = '#ffffff';
    } else if (product.rarity === 'mythic') {
        bgGradient = 'linear-gradient(135deg, #991b1b, #ef4444)';
        iconColor = '#fecaca';
    } else if (product.rarity === 'legendary') {
        bgGradient = 'linear-gradient(135deg, #b45309, #f59e0b)';
        iconColor = '#fef08a';
    } else if (product.rarity === 'epic') {
        bgGradient = 'linear-gradient(135deg, #6b21a8, #a855f7)';
        iconColor = '#e9d5ff';
    } else if (product.rarity === 'rare') {
        bgGradient = 'linear-gradient(135deg, #1d4ed8, #3b82f6)';
        iconColor = '#bfdbfe';
    }

    if (product.variant === 'gold') { iconClass = 'fa-wand-magic-sparkles'; iconColor = '#fbbf24'; }
    else if (product.variant === 'galaxy') { iconClass = 'fa-meteor'; iconColor = '#c084fc'; }
    else if (product.variant === 'holofoil') { iconClass = 'fa-dharmachakra'; iconColor = '#38bdf8'; }
    else if (product.variant === 'gummy') { iconClass = 'fa-candy-cane'; iconColor = '#f472b6'; }
    else if (product.variant === 'cube') { iconClass = 'fa-cube'; iconColor = '#a855f7'; }
    else if (product.variant === 'quack') { iconClass = 'fa-crow'; iconColor = '#facc15'; }

    if (product.name.includes('Batman')) iconClass = 'fa-mask';
    else if (product.name.includes('Fire')) iconClass = 'fa-fire';
    else if (product.name.includes('Water')) iconClass = 'fa-droplet';
    else if (product.name.includes('Earth')) iconClass = 'fa-earth-americas';
    else if (product.name.includes('Duck')) iconClass = 'fa-dove';
    else if (product.name.includes('King')) iconClass = 'fa-crown';
    else if (product.name.includes('Demon')) iconClass = 'fa-spaghetti-monster-flying';
    else if (product.name.includes('Llama')) iconClass = 'fa-horse';
    else if (product.name.includes('Peely')) iconClass = 'fa-lemon';

    return `
        <div class="w-full h-full flex flex-col items-center justify-center relative overflow-hidden" style="background: ${bgGradient}">
            <div class="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
            <i class="fa-solid ${iconClass} text-5xl z-10 transform hover:scale-125 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]" style="color: ${iconColor}"></i>
            <span class="text-[9px] font-black uppercase text-white/80 tracking-widest z-10 mt-2">${product.variant.toUpperCase()}</span>
        </div>
    `;
}

// Save Custom Image URL for selected product
if (saveImgUrlBtn) {
    saveImgUrlBtn.addEventListener('click', () => {
        if (!selectedProductModal) return;
        const url = modalImgUrlInput.value.trim();
        selectedProductModal.imgUrl = url.length > 0 ? url : null;
        
        savedImages[selectedProductModal.name] = selectedProductModal.imgUrl;
        try {
            localStorage.setItem('spritshop_custom_images', JSON.stringify(savedImages));
        } catch(e) {}

        modalImgContainer.innerHTML = generateSpriteGraphic(selectedProductModal);
        filterProducts();
        showToast(currentLang === 'pl' ? `Zapisano obrazek dla "${selectedProductModal.name}"!` : `Image saved for "${selectedProductModal.name}"!`);
    });
}

// Render Products Grid
function renderProducts(items) {
    if (!productsGrid) return;
    productsGrid.innerHTML = '';
    const foundText = translations[currentLang].foundCount.replace('{count}', items.length);
    if (resultsCount) resultsCount.textContent = foundText;

    if (items.length === 0) {
        productsGrid.innerHTML = `
            <div class="col-span-full text-center text-slate-400 py-16 bg-slate-900/60 rounded-3xl border border-slate-800">
                <i class="fa-solid fa-ghost text-4xl mb-3 text-cyan-500/40 block"></i>
                ${currentLang === 'pl' ? 'Nie znaleziono żadnego duszka.' : 'No sprites found.'}
            </div>`;
        return;
    }

    items.forEach(product => {
        const card = document.createElement('div');
        card.className = `sprit-card ${product.rarity} p-4 flex flex-col justify-between`;
        
        const rarityLabelText = translations[currentLang][`rarity${product.rarity.charAt(0).toUpperCase() + product.rarity.slice(1)}`] || product.rarity;
        const statusText = product.status === 'Owned' ? translations[currentLang].owned : translations[currentLang].notOwned;
        const addBtnText = translations[currentLang].addBtn;
        const editionText = translations[currentLang].edition;
        const isZeroPoint = product.name.toLowerCase().includes('zero point') || product.name.toLowerCase().includes('point');

        card.innerHTML = `
            <div>
                <div class="relative overflow-hidden rounded-xl mb-3 h-44 bg-slate-950 border border-white/10 shadow-inner">
                    ${generateSpriteGraphic(product)}
                    <span class="absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase shadow-md badge-${product.rarity}">${rarityLabelText}</span>
                    <span class="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase bg-slate-950/80 text-cyan-300 border border-cyan-500/30">
                        ${product.chance}
                    </span>
                    ${isZeroPoint ? '<span class="absolute bottom-2 right-2 px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-amber-500 text-slate-950 shadow-md">+$5 BOOST</span>' : ''}
                </div>
                <h3 class="text-base font-black uppercase font-heading text-white line-clamp-1">${product.name}</h3>
                <div class="flex items-center justify-between text-[11px] text-slate-400 mt-1 mb-3">
                    <span>${editionText} <strong class="text-slate-200">${product.variant}</strong></span>
                    <span class="${product.status === 'Owned' ? 'text-emerald-400 font-bold' : 'text-slate-400'}">${statusText}</span>
                </div>
            </div>

            <div class="flex items-center justify-between pt-2.5 border-t border-white/10">
                <div>
                    <div class="text-cyan-400 font-black text-lg">
                        ${product.pricePLN.toFixed(2)} PLN
                    </div>
                </div>
                <button class="add-to-cart-btn sprit-btn text-xs px-3.5 py-1.5 rounded-lg" data-id="${product.id}">
                    ${addBtnText}
                </button>
            </div>
        `;

        card.addEventListener('click', (e) => {
            if (!e.target.closest('.add-to-cart-btn')) {
                openModal(product);
            }
        });

        productsGrid.appendChild(card);
    });

    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const pid = parseInt(btn.dataset.id);
            addToCart(pid);
        });
    });
}

// Filter & Sort Logic
function filterProducts() {
    let filtered = products.filter(p => {
        const matchesVariant = currentVariantFilter === 'all' || p.variant === currentVariantFilter;
        const matchesRarity = currentRarityFilter === 'all' || p.rarity === currentRarityFilter;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery) || p.baseName.toLowerCase().includes(searchQuery);
        return matchesVariant && matchesRarity && matchesSearch;
    });

    if (currentSort === 'low') {
        filtered.sort((a, b) => a.pricePLN - b.pricePLN);
    } else if (currentSort === 'high') {
        filtered.sort((a, b) => b.pricePLN - a.pricePLN);
    } else if (currentSort === 'chance') {
        filtered.sort((a, b) => parseFloat(a.chance) - parseFloat(b.chance));
    }

    renderProducts(filtered);
}

if (shopSearch) {
    shopSearch.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        filterProducts();
    });
}

if (priceSort) {
    priceSort.addEventListener('change', (e) => {
        currentSort = e.target.value;
        filterProducts();
    });
}

document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
        document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        currentVariantFilter = pill.dataset.variant;
        filterProducts();
    });
});

document.querySelectorAll('.rarity-filter').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.rarity-filter').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentRarityFilter = btn.dataset.rarity;
        filterProducts();
    });
});

// Modal Preview & Image Editor
function openModal(product) {
    selectedProductModal = product;
    if (modalImgContainer) modalImgContainer.innerHTML = generateSpriteGraphic(product);
    if (modalImgUrlInput) modalImgUrlInput.value = product.imgUrl || '';
    if (modalTitle) modalTitle.textContent = product.name;
    if (modalChance) modalChance.textContent = product.chance;
    const statusText = product.status === 'Owned' ? translations[currentLang].owned : translations[currentLang].notOwned;
    if (modalStatus) modalStatus.textContent = statusText;
    if (modalPrice) modalPrice.textContent = `${product.pricePLN.toFixed(2)} PLN`;
    const rarityText = translations[currentLang][`rarity${product.rarity.charAt(0).toUpperCase() + product.rarity.slice(1)}`] || product.rarity;
    if (modalBadge) {
        modalBadge.textContent = rarityText;
        modalBadge.className = `px-3 py-1 rounded-full text-[10px] font-black uppercase mb-2 inline-block badge-${product.rarity}`;
    }
    if (itemModal) itemModal.classList.remove('closed');
}

if (closeModalBtn) closeModalBtn.addEventListener('click', () => itemModal.classList.add('closed'));
if (modalAddBtn) {
    modalAddBtn.addEventListener('click', () => {
        if (selectedProductModal) {
            addToCart(selectedProductModal.id);
            itemModal.classList.add('closed');
        }
    });
}

// Cart Drawer
if (cartBtn) cartBtn.addEventListener('click', () => cartDrawer.classList.remove('closed'));
if (closeCartBtn) closeCartBtn.addEventListener('click', () => cartDrawer.classList.add('closed'));

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
        showToast(currentLang === 'pl' ? `Dodano "${product.name}" do koszyka!` : `Added "${product.name}" to cart!`);
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    if (cartTotalItemsCount) cartTotalItemsCount.textContent = cart.length;
    if (cartItemsList) cartItemsList.innerHTML = '';

    let totalPLN = 0;

    if (cart.length === 0) {
        if (cartItemsList) cartItemsList.innerHTML = `<p class="text-slate-400 text-sm text-center py-12">${translations[currentLang].cartEmpty}</p>`;
    } else {
        cart.forEach((item, index) => {
            totalPLN += item.pricePLN;
            const div = document.createElement('div');
            div.className = 'flex items-center justify-between bg-slate-900 border border-slate-800 rounded-2xl p-3 shadow-md';
            div.innerHTML = `
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl overflow-hidden border border-white/10 flex-shrink-0">
                        ${generateSpriteGraphic(item)}
                    </div>
                    <div>
                        <div class="text-xs font-bold text-white line-clamp-1">${item.name}</div>
                        <div class="text-[11px] text-cyan-400 font-extrabold">
                            ${item.pricePLN.toFixed(2)} PLN
                        </div>
                    </div>
                </div>
                <button class="remove-item-btn text-slate-400 hover:text-red-400 text-sm px-2 py-1 transition">✕</button>
            `;
            div.querySelector('.remove-item-btn').addEventListener('click', () => removeFromCart(index));
            if (cartItemsList) cartItemsList.appendChild(div);
        });
    }

    if (cartTotalBadge) cartTotalBadge.textContent = `${totalPLN.toFixed(2)} PLN`;
    if (cartTotalPln) cartTotalPln.textContent = `${totalPLN.toFixed(2)} PLN`;
}

// Checkout Modal
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            showToast(currentLang === 'pl' ? 'Twój koszyk jest pusty!' : 'Your cart is empty!');
            return;
        }
        if (cartDrawer) cartDrawer.classList.add('closed');
        openCheckout();
    });
}

function openCheckout() {
    if (checkoutItemsCount) checkoutItemsCount.textContent = `${cart.length} Sprites`;
    if (checkoutItemsPreview) checkoutItemsPreview.innerHTML = '';
    
    let totalPLN = 0;
    cart.forEach(item => {
        totalPLN += item.pricePLN;
        const d = document.createElement('div');
        d.className = 'flex justify-between items-center text-slate-300';
        d.innerHTML = `<span>• ${item.name}</span> <span class="text-cyan-400 font-bold">${item.pricePLN.toFixed(2)} PLN</span>`;
        if (checkoutItemsPreview) checkoutItemsPreview.appendChild(d);
    });

    if (checkoutFinalPrice) checkoutFinalPrice.textContent = `${totalPLN.toFixed(2)} PLN`;
    if (checkoutModal) checkoutModal.classList.remove('closed');
}

if (closeCheckoutBtn) closeCheckoutBtn.addEventListener('click', () => checkoutModal.classList.add('closed'));

// Payment Selector
document.querySelectorAll('.pay-method-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.pay-method-btn').forEach(b => {
            b.classList.remove('active', 'border-cyan-400');
            b.classList.add('border-slate-800');
        });
        btn.classList.add('active', 'border-cyan-400');
        btn.classList.remove('border-slate-800');

        const method = btn.dataset.method;
        document.querySelectorAll('.pay-box').forEach(box => box.classList.add('hidden'));
        const targetBox = document.getElementById(`pay-box-${method}`);
        if (targetBox) targetBox.classList.remove('hidden');

        if (submitPaymentText) {
            submitPaymentText.textContent = `${currentLang === 'pl' ? 'POTWIERDŹ I ZAPŁAĆ' : 'CONFIRM & PAY'} (${method.toUpperCase()})`;
        }
    });
});

const blikInput = document.getElementById('blik-code-input');
if (blikInput) {
    blikInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, '');
    });
}

// Audio Synth
let audioCtx = null;
function playWinSound() {
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();

        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, audioCtx.currentTime);
        osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.1);
        osc.frequency.setValueAtTime(783.99, audioCtx.currentTime + 0.2);

        gain.gain.setValueAtTime(0.4, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start();
        osc.stop(audioCtx.currentTime + 0.5);
    } catch(e) {}
}

// Submit Payment
if (submitPaymentBtn) {
    submitPaymentBtn.addEventListener('click', () => {
        submitPaymentBtn.disabled = true;
        submitPaymentBtn.innerHTML = `<i class="fa-solid fa-spinner animate-spin"></i> ${currentLang === 'pl' ? 'PRZETWARZANIE...' : 'PROCESSING...'}`;

        setTimeout(() => {
            submitPaymentBtn.disabled = false;
            submitPaymentBtn.innerHTML = `<i class="fa-solid fa-lock text-slate-950"></i> <span id="submit-payment-text">${translations[currentLang].submitPayment}</span>`;
            
            if (checkoutModal) checkoutModal.classList.add('closed');
            
            cart.forEach(item => {
                item.status = 'Owned';
            });

            const randomId = Math.floor(100000 + Math.random() * 900000);
            if (successOrderId) successOrderId.textContent = `#SPRIT-${randomId}`;
            if (successModal) successModal.classList.remove('closed');

            playWinSound();

            cart = [];
            updateCart();
            filterProducts();
        }, 1500);
    });
}

if (closeSuccessBtn) closeSuccessBtn.addEventListener('click', () => successModal.classList.add('closed'));

// Toast Helper
function showToast(msg) {
    const toast = document.getElementById('shop-toast');
    const toastText = document.getElementById('toast-text');
    if (!toast || !toastText) return;
    toastText.textContent = msg;
    toast.style.opacity = '1';
    toast.style.pointerEvents = 'auto';
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.pointerEvents = 'none';
    }, 2500);
}

// Canvas Particles
const canvas = document.getElementById('sprit-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let width, height;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    class EnergyParticle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 2.5 + 0.8;
            this.speedY = -Math.random() * 0.6 - 0.2;
            this.opacity = Math.random() * 0.6 + 0.2;
            this.color = Math.random() > 0.5 ? '6, 182, 212' : '236, 72, 153';
        }
        update() {
            this.y += this.speedY;
            if (this.y < 0) this.y = height;
        }
        draw() {
            ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    const particles = Array.from({ length: 60 }, () => new EnergyParticle());
    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(animate);
    }
    animate();
}

// Init Language
const langBtn = document.getElementById('lang-toggle-btn');
if (langBtn) {
    langBtn.addEventListener('click', () => {
        const nextLang = currentLang === 'pl' ? 'en' : 'pl';
        setLanguage(nextLang);
    });
}

setLanguage('pl');
