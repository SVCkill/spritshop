// ==========================================
// SPRITSHOP — APP LOGIC (109 FORTNITE SPRITES)
// ==========================================

// Translations (PL / EN)
const translations = {
    pl: {
        tagline: "EKSKLUZYWNY VAULT DUSZKÓW",
        searchPlaceholder: "Szukaj duszka po nazwie...",
        cart: "KOSZYK",
        heroBadge: "109 DUSZKÓW — OFICJALNY SKLEP DUSZKÓW",
        heroTitlePart1: "WYBIERZ",
        heroTitlePart2: "EKSKLUZYWNE DUSZKI",
        heroDesc: "Wszystkie 109 Duszków z oficjalnymi grafikami i dokładną szansą na drop!",
        browseBtn: "PRZEGLĄDAJ KATALOG (109)",
        statTitle: "Unikalnych Duszków",
        statDesc: "Oficjalne grafiki i ceny w PLN!",
        filterAll: "Wszystkie Duszki (109)",
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
        instantDelivery: "Wymiana w Fortnite (BTT Bot)",
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
        successDesc: "Twoje duszki są gotowe do przekazania w grze Fortnite.",
        orderIdLabel: "ID Zamówienia:",
        statusLabel: "Status:",
        statusCompleted: "ZREALIZOWANO",
        backToShop: "SKLEP",
        footerDesc: "Ekskluzywny vault z 109 Duszkami ze skalowanymi cenami w PLN ($5 Zero Point boost).",
        terms: "Regulamin",
        privacy: "Polityka Prywatności",
        support: "Pomoc",
        owned: "Posiadany",
        notOwned: "Nieposiadany",
        addBtn: "KUP TERAZ",
        edition: "Edycja:",
        foundCount: "Wyświetlono: {count} z 109 Duszków"
    },
    en: {
        tagline: "EXCLUSIVE SPRITE VAULT",
        searchPlaceholder: "Search sprite by name...",
        cart: "CART",
        heroBadge: "109 SPRITES — OFFICIAL SPRITE STORE",
        heroTitlePart1: "CHOOSE",
        heroTitlePart2: "EXCLUSIVE SPRITES",
        heroDesc: "All 109 Sprites with official icons and exact drop chances!",
        browseBtn: "BROWSE CATALOG (109)",
        statTitle: "Unique Sprites",
        statDesc: "Official artwork and scaled pricing in PLN!",
        filterAll: "All Sprites (109)",
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
        instantDelivery: "Fortnite In-Game Trade",
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
        successDesc: "Your sprites are ready for transfer in Fortnite.",
        orderIdLabel: "Order ID:",
        statusLabel: "Status:",
        statusCompleted: "COMPLETED",
        backToShop: "SHOP",
        footerDesc: "Exclusive vault with 109 Sprites & scaled pricing in PLN ($5 Zero Point boost).",
        terms: "Terms of Service",
        privacy: "Privacy Policy",
        support: "Support",
        owned: "Owned",
        notOwned: "Not owned",
        addBtn: "BUY NOW",
        edition: "Edition:",
        foundCount: "Displayed: {count} of 109 Sprites"
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

// Complete 109 Fortnite Sprites Catalog
const rawSpriteList = [
    { name: "John Wick Sprite", base: "John Wick", rarity: "mythic", chance: "0%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_Reload_FillerGrunt_icon_L.webp" },
    { name: "Batman Sprite", base: "Batman", rarity: "mythic", chance: "1.44%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_FossilMeal_Default_L.webp" },
    { name: "Cube Batman Sprite", base: "Cube Batman", rarity: "special", chance: "0.02%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_FossilMeal_Cube_L.webp" },
    { name: "Gold Batman Sprite", base: "Gold Batman", rarity: "special", chance: "0.17%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_FossilMeal_Gold_L.webp" },
    { name: "Gummy Batman Sprite", base: "Gummy Batman", rarity: "special", chance: "0.1%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_FossilMeal_Candy_L.webp" },
    { name: "Galaxy Batman Sprite", base: "Galaxy Batman", rarity: "special", chance: "0.07%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_FossilMeal_Galaxy_L.webp" },
    { name: "Holofoil Batman Sprite", base: "Holofoil Batman", rarity: "special", chance: "0.34%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_FossilMeal_Holofoil_L.webp" },
    { name: "Water Sprite", base: "Water", rarity: "rare", chance: "0%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Water_Unvault_Ch7S3_ui_L.webp" },
    { name: "Gold Water Sprite", base: "Gold Water", rarity: "special", chance: "0.53%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Water_Gold_ui_L.webp" },
    { name: "Quack Water Sprite", base: "Quack Water", rarity: "special", chance: "0%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Water_Quack_ui_L.webp" },
    { name: "Gummy Water Sprite", base: "Gummy Water", rarity: "special", chance: "0.53%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Water_Candy_ui_L.webp" },
    { name: "Galaxy Water Sprite", base: "Galaxy Water", rarity: "special", chance: "0.43%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Water_Galaxy_ui_L.webp" },
    { name: "Gem Water Sprite", base: "Gem Water", rarity: "special", chance: "0.37%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Water_Gem_ui_L.webp" },
    { name: "Holofoil Water Sprite", base: "Holofoil Water", rarity: "special", chance: "0.53%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Water_Holofoil_ui_L.webp" },
    { name: "Earth Sprite", base: "Earth", rarity: "rare", chance: "0%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Earth_Ch7S3_UI_L.webp" },
    { name: "Cube Earth Sprite", base: "Cube Earth", rarity: "special", chance: "0.21%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Earth_Cube_ui_L.webp" },
    { name: "Gold Earth Sprite", base: "Gold Earth", rarity: "special", chance: "0.53%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Earth_Gold_ui_L.webp" },
    { name: "Quack Earth Sprite", base: "Quack Earth", rarity: "special", chance: "0%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Earth_Quack_ui_L.webp" },
    { name: "Gummy Earth Sprite", base: "Gummy Earth", rarity: "special", chance: "0.53%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Earth_Candy_ui_L.webp" },
    { name: "Galaxy Earth Sprite", base: "Galaxy Earth", rarity: "special", chance: "0.43%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Earth_Galaxy_ui_L.webp" },
    { name: "Gem Earth Sprite", base: "Gem Earth", rarity: "special", chance: "0.37%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Earth_Gem_ui_L.webp" },
    { name: "Fire Sprite", base: "Fire", rarity: "rare", chance: "0%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Fire_Unvault_Ch7S3_ui_L.webp" },
    { name: "Cube Fire Sprite", base: "Cube Fire", rarity: "special", chance: "0.21%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Fire_Cube_ui_L.webp" },
    { name: "Gold Fire Sprite", base: "Gold Fire", rarity: "special", chance: "0.53%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Fire_Gold_ui_L.webp" },
    { name: "Quack Fire Sprite", base: "Quack Fire", rarity: "special", chance: "0%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Fire_Quack_ui_L.webp" },
    { name: "Gummy Fire Sprite", base: "Gummy Fire", rarity: "special", chance: "0.53%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Fire_Candy_ui_L.webp" },
    { name: "Galaxy Fire Sprite", base: "Galaxy Fire", rarity: "special", chance: "0.43%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Fire_Galaxy_ui_L.webp" },
    { name: "Holofoil Fire Sprite", base: "Holofoil Fire", rarity: "special", chance: "0.53%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Fire_Holofoil_ui_L.webp" },
    { name: "Duck Sprite", base: "Duck", rarity: "epic", chance: "6.48%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Duck_Default_L.webp" },
    { name: "Gold Duck Sprite", base: "Gold Duck", rarity: "special", chance: "0.62%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Duck_Gold_L.webp" },
    { name: "Gummy Duck Sprite", base: "Gummy Duck", rarity: "special", chance: "0.37%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Duck_Candy_L.webp" },
    { name: "Galaxy Duck Sprite", base: "Galaxy Duck", rarity: "special", chance: "0.25%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Duck_Galaxy_L.webp" },
    { name: "Gem Duck Sprite", base: "Gem Duck", rarity: "special", chance: "0.1%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Duck_Gem_L.webp" },
    { name: "Ghost Sprite", base: "Ghost", rarity: "epic", chance: "5.25%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Ghost_Unvault_L.webp" },
    { name: "Gold Ghost Sprite", base: "Gold Ghost", rarity: "special", chance: "0.62%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Ghost_Gold_L.webp" },
    { name: "Gummy Ghost Sprite", base: "Gummy Ghost", rarity: "special", chance: "0.37%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Ghost_Candy_L.webp" },
    { name: "Galaxy Ghost Sprite", base: "Galaxy Ghost", rarity: "special", chance: "0.25%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Ghost_Galaxy_L.webp" },
    { name: "Holofoil Ghost Sprite", base: "Holofoil Ghost", rarity: "special", chance: "1.23%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Ghost_Holo_L.webp" },
    { name: "Dream Sprite", base: "Dream", rarity: "legendary", chance: "4.45%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Sleepy_ui_L.webp" },
    { name: "Cube Dream Sprite", base: "Cube Dream", rarity: "special", chance: "0.04%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Sleepy_Cube_ui_L.webp" },
    { name: "Gold Dream Sprite", base: "Gold Dream", rarity: "special", chance: "0.43%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Sleepy_Gold_ui_L.webp" },
    { name: "Gummy Dream Sprite", base: "Gummy Dream", rarity: "special", chance: "0.26%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Sleepy_Candy_ui_L.webp" },
    { name: "Galaxy Dream Sprite", base: "Galaxy Dream", rarity: "special", chance: "0.17%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Sleepy_Galaxy_ui_L.webp" },
    { name: "Demon Sprite", base: "Demon", rarity: "epic", chance: "6.48%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_RedDemon_Default_L.webp" },
    { name: "Gold Demon Sprite", base: "Gold Demon", rarity: "special", chance: "0.62%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_RedDemon_Gold_L.webp" },
    { name: "Gummy Demon Sprite", base: "Gummy Demon", rarity: "special", chance: "0.37%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_RedDemon_Candy_L.webp" },
    { name: "Galaxy Demon Sprite", base: "Galaxy Demon", rarity: "special", chance: "0.25%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_RedDemon_Galaxy_L.webp" },
    { name: "Gem Demon Sprite", base: "Gem Demon", rarity: "special", chance: "0.1%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_RedDemon_Gem_L.webp" },
    { name: "Punk Sprite", base: "Punk", rarity: "legendary", chance: "4.45%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Punk_ui_L.webp" },
    { name: "Cube Punk Sprite", base: "Cube Punk", rarity: "special", chance: "0.04%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Punk_Cube_ui_L.webp" },
    { name: "Gold Punk Sprite", base: "Gold Punk", rarity: "special", chance: "0.43%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Punk_Gold_ui_L.webp" },
    { name: "Gummy Punk Sprite", base: "Gummy Punk", rarity: "special", chance: "0.26%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Punk_Candy_ui_L.webp" },
    { name: "Galaxy Punk Sprite", base: "Galaxy Punk", rarity: "special", chance: "0.17%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Punk_Galaxy_ui_L.webp" },
    { name: "Gem Punk Sprite", base: "Gem Punk", rarity: "special", chance: "0%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Punk_Gem_ui_L.webp" },
    { name: "King Sprite", base: "King", rarity: "epic", chance: "5.25%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_King_ui_L.webp" },
    { name: "Gold King Sprite", base: "Gold King", rarity: "special", chance: "0.62%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_King_Gold_ui_L.webp" },
    { name: "Gummy King Sprite", base: "Gummy King", rarity: "special", chance: "0.37%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_King_Candy_ui_L.webp" },
    { name: "Galaxy King Sprite", base: "Galaxy King", rarity: "special", chance: "0.25%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_King_Galaxy_ui_L.webp" },
    { name: "Holofoil King Sprite", base: "Holofoil King", rarity: "special", chance: "1.23%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_King_Holofoil_ui_L.webp" },
    { name: "Burnt Peanut", base: "Burnt Peanut", rarity: "mythic", chance: "2.14%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_BurntPeanut_ui_L.webp" },
    { name: "Vini Jr. Sprite", base: "Vini Jr.", rarity: "mythic", chance: "2.14%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_CokeParmesan_Default_L.webp" },
    { name: "Zero Point Sprite", base: "Zero Point", rarity: "mythic", chance: "0%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_ZeroPoint_ui_L.webp" },
    { name: "Cube Zero Point Sprite", base: "Cube Zero Point", rarity: "special", chance: "0.000014%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_ZeroPoint_Cube_ui_L.webp" },
    { name: "Gold Zero Point Sprite", base: "Gold Zero Point", rarity: "special", chance: "0.00014%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_ZeroPoint_Gold_ui_L.webp" },
    { name: "Quack Zero Point Sprite", base: "Quack Zero Point", rarity: "special", chance: "0%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_ZeroPoint_Quack_ui_L.webp" },
    { name: "Gummy Zero Point Sprite", base: "Gummy Zero Point", rarity: "special", chance: "0.000085%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_ZeroPoint_Candy_ui_L.webp" },
    { name: "Galaxy Zero Point Sprite", base: "Galaxy Zero Point", rarity: "special", chance: "0.000056%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_ZeroPoint_Galaxy_ui_L.webp" },
    { name: "Gem Zero Point Sprite", base: "Gem Zero Point", rarity: "special", chance: "0.00001%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_ZeroPoint_Gem_ui_L.webp" },
    { name: "Holofoil Zero Point Sprite", base: "Holofoil Zero Point", rarity: "special", chance: "0.00028%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_ZeroPoint_Holofoil_ui_L.webp" },
    { name: "Fishy Sprite", base: "Fishy", rarity: "rare", chance: "0%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Fishy_ui_L.webp" },
    { name: "Cube Fishy Sprite", base: "Cube Fishy", rarity: "special", chance: "0.21%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Fishy_Cube_L.webp" },
    { name: "Gold Fishy Sprite", base: "Gold Fishy", rarity: "special", chance: "0.64%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Fishy_Gold_ui_L.webp" },
    { name: "Gummy Fishy Sprite", base: "Gummy Fishy", rarity: "special", chance: "0.53%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Fishy_Candy_ui_L.webp" },
    { name: "Galaxy Fishy Sprite", base: "Galaxy Fishy", rarity: "special", chance: "0.43%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Fishy_Galaxy_ui_L.webp" },
    { name: "Striker Sprite", base: "Striker", rarity: "epic", chance: "5.25%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Soccer_ui_L.webp" },
    { name: "Gold Striker Sprite", base: "Gold Striker", rarity: "special", chance: "0.62%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Soccer_Gold_L.webp" },
    { name: "Gummy Striker Sprite", base: "Gummy Striker", rarity: "special", chance: "0.37%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Soccer_Candy_L.webp" },
    { name: "Galaxy Striker Sprite", base: "Galaxy Striker", rarity: "special", chance: "0.25%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Soccer_Galaxy_L.webp" },
    { name: "Holofoil Striker Sprite", base: "Holofoil Striker", rarity: "special", chance: "1.23%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Soccer_Holofoil_L.webp" },
    { name: "Aura Sprite", base: "Aura", rarity: "epic", chance: "6.48%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Drifter_ui_L.webp" },
    { name: "Gold Aura Sprite", base: "Gold Aura", rarity: "special", chance: "0.62%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Drifter_Gold_ui_L.webp" },
    { name: "Gummy Aura Sprite", base: "Gummy Aura", rarity: "special", chance: "0.37%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Drifter_Candy_ui_L.webp" },
    { name: "Galaxy Aura Sprite", base: "Galaxy Aura", rarity: "special", chance: "0.25%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Drifter_Galaxy_ui_L.webp" },
    { name: "Gem Aura Sprite", base: "Gem Aura", rarity: "special", chance: "0.08%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Drifter_Gem_ui_L.webp" },
    { name: "Boss Sprite", base: "Boss", rarity: "legendary", chance: "4.45%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Boss_ui_L.webp" },
    { name: "Cube Boss Sprite", base: "Cube Boss", rarity: "special", chance: "0.04%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Boss_Cube_ui_L.webp" },
    { name: "Gold Boss Sprite", base: "Gold Boss", rarity: "special", chance: "0.43%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Boss_Gold_ui_L.webp" },
    { name: "Gummy Boss Sprite", base: "Gummy Boss", rarity: "special", chance: "0.26%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Boss_Candy_ui_L.webp" },
    { name: "Galaxy Boss Sprite", base: "Galaxy Boss", rarity: "special", chance: "0.17%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Boss_Galaxy_ui_L.webp" },
    { name: "Grim Sprite", base: "Grim", rarity: "mythic", chance: "0.15%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_GrimReaper_Default_L.webp" },
    { name: "Cube Grim Sprite", base: "Cube Grim", rarity: "special", chance: "0%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_GrimReaper_Cube_L.webp" },
    { name: "Gold Grim Sprite", base: "Gold Grim", rarity: "special", chance: "0.01%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_GrimReaper_Gold_L.webp" },
    { name: "Gummy Grim Sprite", base: "Gummy Grim", rarity: "special", chance: "0.01%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_GrimReaper_Candy_L.webp" },
    { name: "Galaxy Grim Sprite", base: "Galaxy Grim", rarity: "special", chance: "0.01%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_GrimReaper_Galaxy_L.webp" },
    { name: "Gem Grim Sprite", base: "Gem Grim", rarity: "special", chance: "0.00099%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_GrimReaper_Gem_L.webp" },
    { name: "Holofoil Grim Sprite", base: "Holofoil Grim", rarity: "special", chance: "0%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_GrimReaper_Holofoil_L.webp" },
    { name: "Air Sprite", base: "Air", rarity: "rare", chance: "0%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Air_Default_L.webp" },
    { name: "Gold Air Sprite", base: "Gold Air", rarity: "special", chance: "0.53%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Air_Gold_L.webp" },
    { name: "Gummy Air Sprite", base: "Gummy Air", rarity: "special", chance: "0.53%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Air_Candy_L.webp" },
    { name: "Galaxy Air Sprite", base: "Galaxy Air", rarity: "special", chance: "0.43%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Air_Galaxy_L.webp" },
    { name: "Holofoil Air Sprite", base: "Holofoil Air", rarity: "special", chance: "0.53%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Air_Holo_L.webp" },
    { name: "Seven Sprite", base: "Seven", rarity: "legendary", chance: "3.63%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Seven_ui_L.webp" },
    { name: "Gold Seven Sprite", base: "Gold Seven", rarity: "special", chance: "0.43%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Seven_Gold_ui_L.webp" },
    { name: "Gummy Seven Sprite", base: "Gummy Seven", rarity: "special", chance: "0.26%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Seven_Candy_ui_L.webp" },
    { name: "Galaxy Seven Sprite", base: "Galaxy Seven", rarity: "special", chance: "0.17%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Seven_Galaxy_ui_L.webp" },
    { name: "Holofoil Seven Sprite", base: "Holofoil Seven", rarity: "special", chance: "0.85%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Seven_Holofoil_ui_L.webp" },
    { name: "Ironmouse Sprite", base: "Ironmouse", rarity: "mythic", chance: "2.14%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_PedicureAntacid_L.webp" },
    { name: "Pollo Sprite", base: "Pollo", rarity: "mythic", chance: "2.14%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_CompanyStargazer_Default_L.webp" },
    { name: "Llama Sprite", base: "Llama", rarity: "legendary", chance: "4.45%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Llama_ui_L.webp" },
    { name: "Gold Llama Sprite", base: "Gold Llama", rarity: "special", chance: "0.43%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Llama_Gold_ui_L.webp" },
    { name: "Gummy Llama Sprite", base: "Gummy Llama", rarity: "special", chance: "0.26%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Llama_Candy_ui_L.webp" },
    { name: "Galaxy Llama Sprite", base: "Galaxy Llama", rarity: "special", chance: "0.17%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Llama_Galaxy_ui_L.webp" },
    { name: "Gem Llama Sprite", base: "Gem Llama", rarity: "special", chance: "0%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Llama_Gem_ui_L.webp" },
    { name: "Peely Sprite", base: "Peely", rarity: "legendary", chance: "4.62%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Peely_ui_L.webp" },
    { name: "Gold Peely Sprite", base: "Gold Peely", rarity: "special", chance: "0.43%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Peely_Gold_ui_L.webp" },
    { name: "Gummy Peely Sprite", base: "Gummy Peely", rarity: "special", chance: "0.26%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Peely_Candy_ui_L.webp" },
    { name: "Galaxy Peely Sprite", base: "Galaxy Peely", rarity: "special", chance: "0.17%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Peely_Galaxy_ui_L.webp" },
    { name: "Holofoil Peely Sprite", base: "Holofoil Peely", rarity: "special", chance: "0.85%", status: "Not owned", img: "https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Peely_Holofoil_ui_L.webp" }
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

const products = rawSpriteList.map((item, index) => {
    let variant = 'standard';
    if (item.name.includes('Gold')) variant = 'gold';
    else if (item.name.includes('Galaxy')) variant = 'galaxy';
    else if (item.name.includes('Holofoil')) variant = 'holofoil';
    else if (item.name.includes('Gummy')) variant = 'gummy';
    else if (item.name.includes('Cube')) variant = 'cube';
    else if (item.name.includes('Quack')) variant = 'quack';
    else if (item.name.includes('Gem')) variant = 'gem';

    const calculatedPLN = calculatePrice(item);

    return {
        id: index + 1,
        name: item.name,
        baseName: item.base,
        rarity: item.rarity,
        chance: item.chance,
        status: item.status,
        variant: variant,
        pricePLN: calculatedPLN,
        imgUrl: item.img
    };
});

// App & Auth State
let cart = [];
let currentUser = null;
let userOrders = [];

try {
    const savedUser = localStorage.getItem('spritshop_current_user');
    if (savedUser) currentUser = JSON.parse(savedUser);
    const savedOrders = localStorage.getItem('spritshop_user_orders');
    if (savedOrders) userOrders = JSON.parse(savedOrders);
} catch(e) {}

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

// Auth DOM
const authBtn = document.getElementById('auth-btn');
const authBtnLabel = document.getElementById('auth-btn-label');
const authModal = document.getElementById('auth-modal');
const closeAuthBtn = document.getElementById('close-auth-btn');
const tabLoginBtn = document.getElementById('tab-login-btn');
const tabRegisterBtn = document.getElementById('tab-register-btn');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

// Dashboard DOM
const dashboardModal = document.getElementById('dashboard-modal');
const closeDashBtn = document.getElementById('close-dash-btn');
const dashUserName = document.getElementById('dash-user-name');
const dashUserEmail = document.getElementById('dash-user-email');
const dashOrdersList = document.getElementById('dash-orders-list');
const logoutBtn = document.getElementById('logout-btn');

// Modals & Checkout
const itemModal = document.getElementById('item-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const modalImgContainer = document.getElementById('modal-img-container');
const modalBadge = document.getElementById('modal-badge');
const modalTitle = document.getElementById('modal-title');
const modalChance = document.getElementById('modal-chance');
const modalStatus = document.getElementById('modal-status');
const modalPrice = document.getElementById('modal-price');
const modalAddBtn = document.getElementById('modal-add-btn');
let selectedProductModal = null;

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
const successBotNick = document.getElementById('success-bot-nick');
const copyBotNickBtn = document.getElementById('copy-bot-nick-btn');
const openDashboardAfterSuccess = document.getElementById('open-dashboard-after-success');

let currentActiveBotNick = 'SpritVault_Bot01';

// Direct Image Graphic Generator
function generateSpriteGraphic(product) {
    return `<img src="${product.imgUrl}" alt="${product.name}" class="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-110" onerror="this.onerror=null; this.src='https://fortnite.gg/img/icon.jpg'">`;
}

// Update User UI
function updateAuthUI() {
    if (currentUser) {
        if (authBtnLabel) authBtnLabel.textContent = currentUser.username.toUpperCase();
        if (dashUserName) dashUserName.textContent = `WITAJ, ${currentUser.username.toUpperCase()}!`;
        if (dashUserEmail) dashUserEmail.textContent = currentUser.email || `Nick Fortnite: ${currentUser.fortniteNick}`;
    } else {
        if (authBtnLabel) authBtnLabel.textContent = 'ZALOGUJ';
    }
}

// Auth Event Listeners
if (authBtn) {
    authBtn.addEventListener('click', () => {
        if (currentUser) {
            openDashboard();
        } else {
            if (authModal) authModal.classList.remove('closed');
        }
    });
}

if (closeAuthBtn) closeAuthBtn.addEventListener('click', () => authModal.classList.add('closed'));

if (tabLoginBtn && tabRegisterBtn) {
    tabLoginBtn.addEventListener('click', () => {
        tabLoginBtn.classList.add('active');
        tabRegisterBtn.classList.remove('active');
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
    });

    tabRegisterBtn.addEventListener('click', () => {
        tabRegisterBtn.classList.add('active');
        tabLoginBtn.classList.remove('active');
        registerForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    });
}

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('login-input-user').value.trim();
        currentUser = { username: username, email: `${username.toLowerCase()}@spritshop.pl`, fortniteNick: username };
        localStorage.setItem('spritshop_current_user', JSON.stringify(currentUser));
        updateAuthUI();
        authModal.classList.add('closed');
        showToast(currentLang === 'pl' ? `Zalogowano jako ${username}!` : `Logged in as ${username}!`);
    });
}

if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const fnNick = document.getElementById('reg-input-fn').value.trim();
        const email = document.getElementById('reg-input-email').value.trim();
        currentUser = { username: fnNick, email: email, fortniteNick: fnNick };
        localStorage.setItem('spritshop_current_user', JSON.stringify(currentUser));
        updateAuthUI();
        authModal.classList.add('closed');
        showToast(currentLang === 'pl' ? `Zarejestrowano pomyślnie! Witaj, ${fnNick}!` : `Registered successfully! Welcome, ${fnNick}!`);
    });
}

if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        currentUser = null;
        localStorage.removeItem('spritshop_current_user');
        updateAuthUI();
        if (dashboardModal) dashboardModal.classList.add('closed');
        showToast(currentLang === 'pl' ? 'Wylogowano z konta.' : 'Logged out.');
    });
}

// Dashboard Render
function openDashboard() {
    renderUserOrders();
    if (dashboardModal) dashboardModal.classList.remove('closed');
}

function renderUserOrders() {
    if (!dashOrdersList) return;
    dashOrdersList.innerHTML = '';

    if (userOrders.length === 0) {
        dashOrdersList.innerHTML = `
            <div class="text-center text-slate-400 py-12 bg-slate-900/60 rounded-2xl border border-slate-800">
                <i class="fa-solid fa-box-open text-3xl mb-2 text-cyan-400/40 block"></i>
                Nie masz jeszcze żadnych złożonych zamówień.
            </div>`;
        return;
    }

    userOrders.forEach(order => {
        const card = document.createElement('div');
        card.className = 'bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3';
        
        const itemsListHtml = order.items.map(item => `
            <div class="flex items-center gap-2 text-xs text-slate-300">
                <img src="${item.imgUrl}" class="w-7 h-7 rounded-lg object-cover border border-white/10">
                <span>• ${item.name}</span>
                <span class="text-cyan-400 font-extrabold ml-auto">${item.pricePLN.toFixed(2)} PLN</span>
            </div>
        `).join('');

        card.innerHTML = `
            <div class="flex justify-between items-center border-b border-slate-800 pb-2">
                <div>
                    <span class="text-xs font-mono text-cyan-400 font-bold">${order.id}</span>
                    <span class="text-[10px] text-slate-400 block">${order.date}</span>
                </div>
                <span class="px-2.5 py-1 rounded-full text-[10px] font-black uppercase ${order.status === 'ZREALIZOWANO' ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40' : 'bg-amber-950 text-amber-300 border border-amber-500/40'}">
                    ${order.status}
                </span>
            </div>

            <div class="space-y-1.5">${itemsListHtml}</div>

            <div class="bg-slate-950 p-3 rounded-xl border border-amber-500/30 text-xs space-y-1.5">
                <div class="flex justify-between items-center text-amber-300 font-bold">
                    <span>🎮 Dodaj do Znajomych Nick Bota:</span>
                    <button class="copy-dash-bot bg-amber-500 text-slate-950 px-2 py-0.5 rounded text-[10px] font-black uppercase" data-nick="${order.botNick}">Kopiuj</button>
                </div>
                <div class="font-mono text-white text-sm bg-slate-900 px-2.5 py-1 rounded border border-slate-800 font-bold flex justify-between items-center">
                    <span>${order.botNick}</span>
                </div>
                <p class="text-[10px] text-slate-400 leading-tight">
                    💡 <strong>Instrukcja:</strong> Wchodzisz do gry z botem -> Bot daje Duszka -> Zwracasz go -> W lobby Fortnite kupujesz za pyłek!
                </p>
            </div>

            <div class="flex justify-between items-center text-xs border-t border-slate-800 pt-2">
                <span class="text-slate-400 font-bold">Suma:</span>
                <span class="text-cyan-400 font-black text-sm">${order.totalPLN.toFixed(2)} PLN</span>
            </div>
        `;

        card.querySelector('.copy-dash-bot').addEventListener('click', (e) => {
            const nick = e.target.dataset.nick;
            navigator.clipboard.writeText(nick);
            showToast(`Skopiowano nick bota: ${nick}`);
        });

        dashOrdersList.appendChild(card);
    });
}

if (closeDashBtn) closeDashBtn.addEventListener('click', () => dashboardModal.classList.add('closed'));

// Render Products Grid (With Rarity Themes & Instruction Note)
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
        // Rarity Background Gradient Theme applied via CSS class
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
                <div class="flex items-center justify-between text-[11px] text-slate-400 mt-1 mb-2">
                    <span>${editionText} <strong class="text-slate-200">${product.variant}</strong></span>
                    <span class="${product.status === 'Owned' ? 'text-emerald-400 font-bold' : 'text-slate-400'}">${statusText}</span>
                </div>

                <!-- Fortnite Trade Instruction Box under every card -->
                <div class="bg-slate-950/70 border border-cyan-500/20 rounded-xl p-2 mb-3 text-[10px] text-cyan-200/90 leading-tight">
                    <i class="fa-solid fa-handshake mr-1 text-cyan-400"></i> Dodajesz nick bota -> bot daje Duszka -> zwracasz go -> w lobby kupujesz za pyłek!
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

// Modal Preview
function openModal(product) {
    selectedProductModal = product;
    if (modalImgContainer) modalImgContainer.innerHTML = generateSpriteGraphic(product);
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

// Payment Method Selector
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

// Copy Bot Nick
if (copyBotNickBtn) {
    copyBotNickBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(currentActiveBotNick);
        showToast(`Skopiowano nick bota: ${currentActiveBotNick}`);
    });
}

if (openDashboardAfterSuccess) {
    openDashboardAfterSuccess.addEventListener('click', () => {
        if (successModal) successModal.classList.add('closed');
        openDashboard();
    });
}

// Submit Payment & Save Order to Dashboard
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

            const randomIdNum = Math.floor(100000 + Math.random() * 900000);
            const orderIdStr = `#SPRIT-${randomIdNum}`;
            const randomBotNum = Math.floor(10 + Math.random() * 89);
            currentActiveBotNick = `SpritVault_Bot${randomBotNum}`;

            if (successOrderId) successOrderId.textContent = orderIdStr;
            if (successBotNick) successBotNick.textContent = currentActiveBotNick;

            // Save order to User Dashboard
            let totalPLN = 0;
            cart.forEach(i => totalPLN += i.pricePLN);

            const newOrder = {
                id: orderIdStr,
                date: new Date().toLocaleDateString('pl-PL') + ' ' + new Date().toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' }),
                items: [...cart],
                totalPLN: totalPLN,
                status: 'Oczekuje na zaproszenie w Fortnite',
                botNick: currentActiveBotNick
            };

            userOrders.unshift(newOrder);
            localStorage.setItem('spritshop_user_orders', JSON.stringify(userOrders));

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

// Init Language, Auth & Start Store
const langBtn = document.getElementById('lang-toggle-btn');
if (langBtn) {
    langBtn.addEventListener('click', () => {
        const nextLang = currentLang === 'pl' ? 'en' : 'pl';
        setLanguage(nextLang);
    });
}

updateAuthUI();
setLanguage('pl');
