// Raw product catalog (kept separate for easy updates)
const currentUser = JSON.parse(localStorage.getItem("user"));

if (!currentUser) {
    window.location.href = "login.html";
}

function checkRole() {
    const role = currentUser.role;

    if (role === "customer") {
        console.log("Khách hàng");
        // chỉ xem, không sửa
    }

    if (role === "staff") {
        console.log("Nhân viên");
        // ví dụ: cho phép chỉnh sửa sản phẩm
    }

    if (role === "admin") {
        console.log("Quản lý");
        // full quyền
    }
}

checkRole();

function logout() {
    localStorage.removeItem("user");
    window.location.href = "login.html";
}

const productRaw = [
    { name: "Váy thiết kế", description: "Màu đỏ, có độ dài 60cm, chiều rộng 40cm, ren đen bọc ở chân váy, co dãn", price: "280.000 VND", imageUrl: "https://i.ibb.co/q6W3xmg/z7632798488403-cafb2d3010e79a5fd573cbef2eab452a.jpg" },
    { name: "Giày đỏ đính kim cương", description: "Món quà tuyệt vời cho 14/2 .", price: "100.000.000 VND", imageUrl: "https://i.ibb.co/bMcyLDxM/z7633077822456-64f89263e840c620d0662cfe6f4a4a1e.jpg" },
    { name: "Bữa sáng phong cách châu âu", description: "Được làm từ các chất liệu thược hạng của châu Âu.", price: "120.000 VND", imageUrl: "https://images.unsplash.com/photo-1773754109448-13d2af138059?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Ghế tình nhân ", description: "Thiết kế độc đáo, bắt mắt được làm từ đồ án tốt nghiệp của những sinh viên kién trúc hàng đầu.", price: "199.99 VND", imageUrl: "https://images.unsplash.com/photo-1760716478137-d861d5b354e8?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Móc treo Voi", description: "Nguồn gốc từ Thái Lan.", price: "79.99 VND", imageUrl: "https://images.unsplash.com/photo-1760192159044-881ce9629623?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Mô hình tường thành cổ", description: "Được lấy ý tưởng từ phong cách âu cổ.", price: "249.99 VND", imageUrl: "https://images.unsplash.com/photo-1763768501951-468593bf3267?q=80&w=743&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Chổi lau nhà", description: "Đa di năng, đa phương tiện. Nếu bạn cần quét nhà không sao vì đã có ngay, nếu bạn cầu đánh con cũng có luôn 1 vũ khí dành cho bạn.", price: "59.99 VND", imageUrl: "https://images.unsplash.com/photo-1763638921426-24871b2fb49b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Pha lê bọt biển", description: "Chỉ đơn giản là dành cho fan của bộ phim hoạt hình này.", price: "189.99 VND", imageUrl: "https://images.unsplash.com/photo-1758789887939-dea05e990b48?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Hòm kho báu của vua solomon", description: "Đây chính là hộp pandora trong truyền thuyết, mua nó để sở hữu những con quái vậy.", price: "399.99 VND", imageUrl: "https://images.unsplash.com/photo-1669823734801-eb60fc45c9c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Điếu thuốc lào độc đáo", description: "Dành cho anh em vừa nghiện lại vừa đam mê nghệ thuật.", price: "499.99 VND", imageUrl: "https://images.unsplash.com/photo-1669823734801-eb60fc45c9c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Nến thơm ", description: "Nến thơm được thiết kế theo phong cách tân cổ điển.", price: "9.99 VND", imageUrl: "https://plus.unsplash.com/premium_photo-1761372023037-ae43b9e03ba7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Móc treo quần áo ngữa ", description: "Được làm từ da loài ngựa vằn cực hiếm của châu Phi.", price: "29.99 VND", imageUrl: "https://plus.unsplash.com/premium_photo-1770118635306-10f94c36efb3?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Tượng nữ thần cầu nguyện", description: "Quá cute để bỏ lỡ.", price: "119.99 VND", imageUrl: "https://images.unsplash.com/photo-1732543569768-51540e346b3d?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Vòng bắt ước mơ", description: "Bạn mơ thấy ác mộng, mua mặt hàng này về để không bao giờ.", price: "349.99 VND", imageUrl: "https://plus.unsplash.com/premium_photo-1723924946708-973d65d3bf4f?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Bình hoa", description: "Đơn giản và độc đáo.", price: "279.99 VND", imageUrl: "https://plus.unsplash.com/premium_photo-1723637949985-f4d057d970ed?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Ly nước sang trọng ", description: "Độc đáo, sang trọng, và quyền quý. Được làm từ pha lê .", price: "89.99 VND", imageUrl: "https://plus.unsplash.com/premium_photo-1748522521877-845d921c112f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Đồng hồ nữ thần sắc đẹp", description: "Y như tên gọi của hình nhân ngồi trên nó.", price: "159.99 VND", imageUrl: "https://plus.unsplash.com/premium_photo-1748522521877-845d921c112f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Cốc khó chịu", description: "Cốc đặc biệt dành cho những cô người yêu nóng tính(Nguyễn Thảo An người yêu của Lê Hoàng Nam aka người dev phần này).", price: "69.99 VND", imageUrl: "https://images.unsplash.com/photo-1760960553764-9bebee403a36?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Sofa 1 người", description: "Làm từ lông con gì đó không biết và bông. Dành cho người yêu thích sự cô độc nhưng vẫn muốn ấm cũng những ngày đông về.", price: "229.99 VND", imageUrl: "https://plus.unsplash.com/premium_photo-1664391899883-59de759c56a8?q=80&w=972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Set mô hình mèo nhật", description: "Bạn đam mê văn hóa Nhật Bản. Sản phẩm này hoàn toàn là dành cho bạn.", price: "319.99 VND", imageUrl: "https://images.unsplash.com/photo-1766065958771-885b264b61ea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Đèn gãy", description: "Cuộc sống vốn áp lực nhưng xin đừng từ bỏ, hãy giống như chiếc đèn này dù đã bị đổ nhưng vẫn chiếu sáng cho cuộc sống của bạn.", price: "49.99 VND", imageUrl: "https://images.unsplash.com/photo-1770737022067-4214868b61fc?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Tượng phật dát vàng", description: "No cap for this tuff item.", price: "179.99 VND", imageUrl: "https://images.unsplash.com/photo-1668508119240-e008fdc45714?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "khuyên tai cánh chim mạ vàng", description: "1 trong những set trang sức độc đáo của bọn tôi tạo ra.", price: "39.99 VND", imageUrl: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Set trang sức mạ vàng đính pha lê", description: "Được design bởi nhóm bài tập lớn đứng đầu là anh Lê Hoàng Nam.", price: "129.99 VND", imageUrl: "https://plus.unsplash.com/premium_photo-1681276169690-a22f1193c784?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Hoa tai đính ruby", description: "Bạn cần sự quyền quý, đeo chiếc hoa tai này và bạn sẽ không cần nói thêm 1 từ gì người xung quanh đều phải ngước nhìn bạn.", price: "79.99 VND", imageUrl: "https://images.unsplash.com/photo-1671642883395-0ab89c3ac890?q=80&w=733&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Dây chuyền kim cương 3 carat", description: "Bạn có biết 3 carat to đến mức nào không, nếu không thì hãy mua sản phẩm này để được tận mắt chứng kiến kích cỡ của nó.", price: "59.99 VND", imageUrl: "https://plus.unsplash.com/premium_photo-1681276169450-4504a2442173?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Nhẫn hẹn hước", description: "Rời xa để gặp lại vì đôi ta đã có hẹn ước cả đời. Buy it for your princess", price: "399.99 VND", imageUrl: "https://images.unsplash.com/photo-1593722017239-6ab56bb60712?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Cặp trang sức đồng hồ ", description: "Mua chiếc đồng hồ này để cố thể nhận ra cuộc đời bạn trôi qua vô nghĩa thế nào. Made in Italy.", price: "199.99 VND", imageUrl: "https://images.unsplash.com/photo-1680477425240-cad536a96703?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Đồng hồ rolex", description: "Khi thương hiệu tạo nên vẻ đẹp.", price: "289.99 VND", imageUrl: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Gundam GTX-034242345", description: "Món quà quá tuyệt dành cho bạn trai của bạn trong ngày 14/2, buy it for him .", price: "249.99 VND", imageUrl: "https://images.unsplash.com/photo-1626450429795-a3ba2964ef7f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Gundam mô hình x1000", description: "Tôi biết bạn không thể mua. Tôi up sản phẩm này chỉ để chứng minh cho bạn thấy túi tiền của bạn không giàu bằng mặt hàng của bọn tôi.", price: "99.99 VND", imageUrl: "https://images.unsplash.com/photo-1625235471526-67781e38eb57?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Set gundam mini", description: "Cái trên không mua được chứ cái này hoàn toàn mua được chứ nhỉ.", price: "49.99 VND", imageUrl: "https://images.unsplash.com/photo-1577978924027-8657e5e9cfe3?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Gundam LTA-123134", description: "Mẫu model đầu tiên được sản xuất ra trên thị trường.", price: "149.99 VND", imageUrl: "https://images.unsplash.com/photo-1598541264502-84dc6aa2fb87?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Gundam VPX-23424", description: "Được lấy cảm hứng từ những samurai Nhật Bản, nguồn gốc của gundam. Chẳng có lý do gì để bạn bỏ qua nếu là 1 người yêu thích gundam.", price: "179.99 VND", imageUrl: "https://images.unsplash.com/photo-1617383173983-c9c24f6bfda3?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Gundam ITZ-2908", description: "Được custom bằng màu acrylic siêu phẩm 3D bởi vĩ nhân Gundam Khánh Ly.", price: "219.99 VND", imageUrl: "https://images.unsplash.com/photo-1626276264267-1f861ffa1486?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Vợt cầu lông của em Hùng", description: "Em Hùng up lên đây để cắt lỗ.", price: "39.99 VND", imageUrl: "https://images.unsplash.com/photo-1687597778602-624a9438fe0b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Mô hình anime Nhật Bản", description: "Được thiết kế theo phong cách của em Dương Nguyên Thượng, nhỏ nhắn, cute và loli gu của mọi anh em cánh mày râu.", price: "299.99 VND", imageUrl: "https://images.unsplash.com/photo-1623252729328-9941b271ad48?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Bóng spalding", description: "Đã là hooper thì không thể bỏ qua món hàng này.", price: "89.99 VND", imageUrl: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },

];


// Helper functions
function slugify(text) {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9\-]/g, '')
        .replace(/\-+/g, '-')
        .replace(/^-+|-+$/g, '');
}

// Debug overlay (visible on the page so we can see if JS is running)
const debugOverlay = (() => {
    const div = document.createElement('div');
    div.id = 'debugOverlay';
    div.style.position = 'fixed';
    div.style.bottom = '1rem';
    div.style.right = '1rem';
    div.style.padding = '0.5rem 0.75rem';
    div.style.background = 'rgba(15,23,42,0.85)';
    div.style.color = '#e2e8f0';
    div.style.fontSize = '0.8rem';
    div.style.borderRadius = '12px';
    div.style.zIndex = '9999';
    div.style.maxWidth = 'calc(100vw - 2rem)';
    div.style.pointerEvents = 'none';
    div.textContent = 'JS: initializing...';
    document.body.appendChild(div);
    return {
        set: msg => { div.textContent = `JS: ${msg}`; },
        error: msg => { div.textContent = `ERROR: ${msg}`; div.style.background = 'rgba(220,38,38,0.85)'; }
    };
})();

window.addEventListener('error', (event) => {
    console.error('Unhandled JS error', event.error);
    debugOverlay.error(event.error?.message || event.message || 'Unknown error');
});

console.log('script loaded');
debugOverlay.set('loaded');

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

// Build the product catalog
const products = productRaw.map((item, idx) => {
    const id = slugify(item.name);
    const rating = Math.round(randomBetween(3.4, 5) * 10) / 10;
    const reviews = generateComments(item.name);

    return {
        id,
        index: idx + 1,
        ...item,
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

// DOM references
const productListEl = document.getElementById('product-list');
const detailPage = document.getElementById('product-detail');
const backButton = document.getElementById('backButton');
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
const searchBar = document.getElementById('searchBar');

function renderProductList(filtered) {
    productListEl.innerHTML = '';

    if (filtered.length === 0) {
        productListEl.innerHTML = `<div class="empty-state"><h2>No products found</h2><p>Try a different search term or explore the wild catalog.</p></div>`;
        return;
    }

    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product';
        card.dataset.productId = product.id;

        card.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}" loading="lazy" />
            <div class="product-content">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-meta">
                    <span class="price">${product.price}</span>
                    <span class="rating" title="${product.rating} out of 5">${buildStars(product.rating)} <span>${product.rating}</span></span>
                </div>
            </div>
        `;

        card.addEventListener('click', () => {
            window.location.href = `product.html?product=${product.id}`;
        });

        productListEl.appendChild(card);
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
            window.location.href = `product.html?product=${item.id}`;
        });
        recommendList.appendChild(card);
    });
}

function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    console.log('showProductDetail()', { productId, found: !!product });
    if (!product) {
        window.location.hash = '';
        return;
    }

    renderProductDetail(product);

    productListEl.hidden = true;
    detailPage.hidden = false;

    // Ensure the detail page is visible
    detailPage.style.display = 'block';
    productListEl.style.display = 'none';

    console.log('detail toggled:', {
        listHidden: productListEl.hidden,
        detailHidden: detailPage.hidden,
        detailDisplay: detailPage.style.display
    });

    detailPage.scrollIntoView({ behavior: 'smooth' });
}

function showProductList() {
    detailPage.hidden = true;
    detailPage.style.display = 'none';
    productListEl.hidden = false;
    productListEl.style.display = 'grid';
}

function handleURL() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('product');

    if (productId) {
        showProductDetail(productId);
    } else {
        showProductList();
    }
}

function filterProducts(query) {
    const normalized = query.trim().toLowerCase();

    if (!normalized) {
        return products;
    }

    return products.filter(p =>
        p.name.toLowerCase().includes(normalized) ||
        p.description.toLowerCase().includes(normalized)
    );
}

searchBar.addEventListener('input', () => {
    const results = filterProducts(searchBar.value);
    renderProductList(results);
});

backButton.addEventListener('click', () => {
    window.location.href = window.location.pathname;
});

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

// Initial render
renderProductList(products);
