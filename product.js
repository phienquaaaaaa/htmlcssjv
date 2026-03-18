// Shared product catalog
const productRaw = [
    { name: "Quantum Widget", description: "A revolutionary device that defies physics.", price: "$99.99" },
    { name: "Invisible Cloak", description: "Perfect for stealth operations or avoiding awkward conversations.", price: "$149.99" },
    { name: "Time Machine Remote", description: "Control your temporal adventures with ease.", price: "$299.99" },
    { name: "Flying Carpet", description: "Traditional transportation with a modern twist.", price: "$199.99" },
    { name: "Telepathy Headset", description: "Read minds or share thoughts wirelessly.", price: "$79.99" },
    { name: "Gravity Boots", description: "Walk on walls or ceilings with these anti-gravity boots.", price: "$249.99" },
    { name: "Memory Eraser", description: "Forget the bad times, remember the good ones.", price: "$59.99" },
    { name: "Shape-Shifting Mirror", description: "Reflect your wildest dreams.", price: "$189.99" },
    { name: "Potion of Eternal Youth", description: "Stay young forever, or at least feel like it.", price: "$399.99" },
    { name: "Robot Butler", description: "Your personal assistant that never complains.", price: "$499.99" },
    { name: "Laser Pointer Cat Toy", description: "For cats that rule the world.", price: "$9.99" },
    { name: "Invisibility Spray", description: "Become invisible for up to 5 minutes.", price: "$29.99" },
    { name: "Mind Reading Glasses", description: "See what others are thinking.", price: "$119.99" },
    { name: "Teleportation Ring", description: "Instant travel to anywhere you've been.", price: "$349.99" },
    { name: "Weather Control Device", description: "Make it rain or shine on command.", price: "$279.99" },
    { name: "Alien Translator", description: "Communicate with extraterrestrials.", price: "$89.99" },
    { name: "Super Strength Gloves", description: "Lift cars with ease.", price: "$159.99" },
    { name: "Dream Recorder", description: "Capture and replay your dreams.", price: "$69.99" },
    { name: "Holographic Projector", description: "Create lifelike 3D images.", price: "$229.99" },
    { name: "Time Freeze Watch", description: "Stop time for everyone but you.", price: "$319.99" },
    { name: "Magic Wand", description: "Perform real magic tricks.", price: "$49.99" },
    { name: "Flying Broomstick", description: "Classic witch transportation.", price: "$179.99" },
    { name: "Invisibility Cloak Junior", description: "For kids who want to play hide and seek.", price: "$39.99" },
    { name: "Robot Pet", description: "A loyal companion that never needs feeding.", price: "$129.99" },
    { name: "Potion of Strength", description: "Become stronger than ever.", price: "$79.99" },
    { name: "Crystal Ball", description: "See the future or just use as a paperweight.", price: "$59.99" },
    { name: "Jetpack", description: "Fly through the skies.", price: "$399.99" },
    { name: "Mind Control Device", description: "Influence thoughts subtly.", price: "$199.99" },
    { name: "Shrink Ray", description: "Make things smaller or yourself bigger.", price: "$289.99" },
    { name: "Force Field Generator", description: "Protect yourself from harm.", price: "$249.99" },
    { name: "Talking Mirror", description: "Your reflection gives advice.", price: "$99.99" },
    { name: "Potion of Invisibility", description: "Drink to become unseen.", price: "$49.99" },
    { name: "Hoverboard", description: "Glide effortlessly on air.", price: "$149.99" },
    { name: "Telekinesis Gloves", description: "Move objects with your mind.", price: "$179.99" },
    { name: "Dream Weaver", description: "Create your own dream worlds.", price: "$219.99" },
    { name: "Alien Detector", description: "Find extraterrestrial life.", price: "$39.99" },
    { name: "Super Speed Shoes", description: "Run faster than the speed of light.", price: "$299.99" },
    { name: "Memory Enhancer", description: "Never forget anything again.", price: "$89.99" },
    { name: "Holographic Disguise", description: "Change your appearance instantly.", price: "$159.99" },
    { name: "Time Travel Diary", description: "Record your journeys through time.", price: "$69.99" },
    { name: "Magic Carpet Cleaner", description: "Keep your flying carpet spotless.", price: "$19.99" },
    { name: "Robot Chef", description: "Cook gourmet meals automatically.", price: "$599.99" },
    { name: "Potion of Wisdom", description: "Gain infinite knowledge.", price: "$499.99" },
    { name: "Invisibility Ink", description: "Write messages that disappear.", price: "$14.99" },
    { name: "Gravity Defier", description: "Float like a feather.", price: "$189.99" },
    { name: "Mind Link Device", description: "Connect minds across distances.", price: "$239.99" },
    { name: "Shape-Shifting Potion", description: "Change your form at will.", price: "$129.99" },
    { name: "Flying Machine Kit", description: "Build your own aircraft.", price: "$349.99" },
    { name: "Telepathic Communicator", description: "Talk without speaking.", price: "$99.99" },
    { name: "Dream Catcher Pro", description: "Capture and analyze dreams.", price: "$79.99" },
    { name: "Alien Language Dictionary", description: "Learn to speak alien tongues.", price: "$29.99" }
];

// Helpers
function slugify(text) {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9\-]/g, '')
        .replace(/\-+/g, '-')
        .replace(/^-+|-+$/g, '');
}

function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
    return Math.floor(randomBetween(min, max + 1));
}

function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function buildImageUrl(seed) {
    return `https://picsum.photos/seed/${encodeURIComponent(seed)}/520/320`;
}

function buildStars(rating) {
    const full = Math.floor(rating);
    const half = rating - full >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);

    return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

function generateComments(productName) {
    const voices = [
        "Absolutely loved it!",
        "Would buy again.",
        "Worth every penny.",
        "Exceeded my expectations.",
        "A little too wild for daily use.",
        "My friends keep asking where I got it.",
        "The design is gorgeous.",
        "Works exactly as described.",
        "The packaging felt magical.",
        "Five stars, would recommend to anyone."
    ];

    const results = [];
    const count = randomInt(3, 7);

    for (let i = 0; i < count; i++) {
        results.push({
            author: `User${randomInt(123, 999)}`,
            rating: Math.round(randomBetween(3.4, 5) * 10) / 10,
            text: `${pickRandom(voices)} ${pickRandom(voices)}`,
            date: new Date(Date.now() - randomInt(0, 30) * 86400000).toLocaleDateString(),
        });
    }

    return results;
}

// Build the product catalog with computed fields
const products = productRaw.map((item, idx) => {
    const id = slugify(item.name);
    const rating = Math.round(randomBetween(3.4, 5) * 10) / 10;
    const reviews = generateComments(item.name);

    return {
        id,
        index: idx + 1,
        ...item,
        imageUrl: buildImageUrl(`${id}-${idx}`),
        rating,
        reviews,
        reviewCount: reviews.length,
        slug: id,
        details: {
            stock: randomInt(0, 99),
            warranty: `${randomInt(1, 3)} year${randomInt(1, 3) === 1 ? '' : 's'}`,
            shipping: pickRandom(['Free', '$4.99', '$9.99', 'Free over $50']),
        },
    };
});

// DOM
const detailPage = document.getElementById('product-detail');
const missingPage = document.getElementById('missing');
const detailImage = document.getElementById('detailImage');
const detailName = document.getElementById('detailName');
const detailPrice = document.getElementById('detailPrice');
const detailRating = document.getElementById('detailRating');
const detailDescription = document.getElementById('detailDescription');
const detailStock = document.getElementById('detailStock');
const detailWarranty = document.getElementById('detailWarranty');
const buyButton = document.getElementById('buyButton');
const buyMessage = document.getElementById('buyMessage');
const reviewList = document.getElementById('reviewList');
const recommendList = document.getElementById('recommendList');

function getProductIdFromQuery() {
    const params = new URLSearchParams(window.location.search);
    return params.get('product');
}

function renderRecommendations(currentProduct) {
    const pool = products.filter(p => p.id !== currentProduct.id);
    const shuffled = pool.sort(() => 0.5 - Math.random());
    const picks = shuffled.slice(0, 4);

    recommendList.innerHTML = '';
    picks.forEach(item => {
        const card = document.createElement('div');
        card.className = 'recommend-card';
        card.innerHTML = `
            <h4>${item.name}</h4>
            <p class="price">${item.price}</p>
        `;
        card.addEventListener('click', () => {
            window.location.search = `?product=${item.id}`;
        });
        recommendList.appendChild(card);
    });
}

function renderProductDetail(product) {
    detailImage.src = product.imageUrl;
    detailImage.alt = product.name;
    detailName.textContent = product.name;
    detailPrice.textContent = product.price;
    detailRating.textContent = `${buildStars(product.rating)} ${product.rating}`;
    detailDescription.textContent = product.description;
    detailStock.textContent = product.details.stock;
    detailWarranty.textContent = product.details.warranty;

    buyMessage.hidden = true;

    reviewList.innerHTML = '';
    product.reviews.forEach(review => {
        const reviewEl = document.createElement('div');
        reviewEl.className = 'review';
        reviewEl.innerHTML = `
            <div class="review-meta">
                <div><strong>${review.author}</strong> • ${review.date}</div>
                <div>${buildStars(review.rating)} ${review.rating}</div>
            </div>
            <p class="review-text">${review.text}</p>
        `;
        reviewList.appendChild(reviewEl);
    });

    renderRecommendations(product);
}

function showProductPage(productId) {
    const product = products.find(p => p.id === productId);

    if (!product) {
        detailPage.hidden = true;
        missingPage.hidden = false;
        return;
    }

    renderProductDetail(product);
    detailPage.hidden = false;
    missingPage.hidden = true;
}

buyButton.addEventListener('click', () => {
    buyMessage.hidden = false;
    buyButton.disabled = true;
    buyButton.textContent = 'Purchased';

    setTimeout(() => {
        buyMessage.hidden = true;
        buyButton.disabled = false;
        buyButton.textContent = 'Buy Now';
    }, 2200);
});

// Initialize
showProductPage(getProductIdFromQuery());
