// ======= Store Data =======
const storesData = [
    {
        id: 1,
        name: "GALLERIA",
        floor: "ground",
        category: "fashion",
        contact: "9808267654",
        image: "logo.jpg",
        description: "Premium fashion and clothing store offering the latest trends and styles for men and women."
    },
    {
        id: 2,
        name: "THE MAKEUP FACTORY",
        floor: "ground",
        category: "beauty",
        contact: "9851021417",
        image: "layout.jpg",
        description: "Complete beauty and personal care products with professional makeup services."
    },
    {
        id: 3,
        name: "PUMA",
        floor: "ground",
        category: "fashion",
        contact: "9813891605",
        image: "logo.jpg",
        description: "International sports and fashion brand offering athletic wear and accessories."
    },
    {
        id: 4,
        name: "Tech Hub",
        floor: "first",
        category: "electronics",
        contact: "9846123789",
        image: "layout.jpg",
        description: "Latest electronics, gadgets, and technology products for all your digital needs."
    },
    {
        id: 5,
        name: "Café Himalaya",
        floor: "second",
        category: "food",
        contact: "9801234567",
        image: "logo.jpg",
        description: "Authentic Nepali and international cuisine in a comfortable dining environment."
    },
    {
        id: 6,
        name: "Fashion Forward",
        floor: "first",
        category: "fashion",
        contact: "9808267456",
        image: "layout.jpg",
        description: "Trendy fashion for all ages with the latest styles and seasonal collections."
    },
    {
        id: 7,
        name: "Game Zone",
        floor: "second",
        category: "entertainment",
        contact: "9812345678",
        image: "logo.jpg",
        description: "Gaming and entertainment center with arcade games and family fun activities."
    },
    {
        id: 8,
        name: "Digital World",
        floor: "first",
        category: "electronics",
        contact: "9823456789",
        image: "layout.jpg",
        description: "Computer accessories, mobile devices, and digital solutions for modern life."
    },
    
    {

        id: 1,
        name: "GALLERIA",
        floor: "ground",
        category: "fashion",
        contact: "9808267654",
        image: "logo.jpg",
        description: "Premium fashion and clothing store offering the latest trends and styles for men and women."
    },
    {
        id: 2,
        name: "THE MAKEUP FACTORY",
        floor: "ground",
        category: "beauty",
        contact: "9851021417",
        image: "layout.jpg",
        description: "Complete beauty and personal care products with professional makeup services."
    },
    {
        id: 3,
        name: "PUMA",
        floor: "ground",
        category: "fashion",
        contact: "9813891605",
        image: "logo.jpg",
        description: "International sports and fashion brand offering athletic wear and accessories."
    },
    {
        id: 4,
        name: "Tech Hub",
        floor: "first",
        category: "electronics",
        contact: "9846123789",
        image: "layout.jpg",
        description: "Latest electronics, gadgets, and technology products for all your digital needs."
    },
    {
        id: 5,
        name: "Café Himalaya",
        floor: "second",
        category: "food",
        contact: "9801234567",
        image: "logo.jpg",
        description: "Authentic Nepali and international cuisine in a comfortable dining environment."
    },
    {
        id: 6,
        name: "Fashion Forward",
        floor: "first",
        category: "fashion",
        contact: "9808267456",
        image: "layout.jpg",
        description: "Trendy fashion for all ages with the latest styles and seasonal collections."
    },
    {
        id: 7,
        name: "Game Zone",
        floor: "second",
        category: "entertainment",
        contact: "9812345678",
        image: "logo.jpg",
        description: "Gaming and entertainment center with arcade games and family fun activities."
    },
    {
        id: 8,
        name: "Digital World",
        floor: "first",
        category: "electronics",
        contact: "9823456789",
        image: "layout.jpg",
        description: "Computer accessories, mobile devices, and digital solutions for modern life."
    }
];

// ======= Store Functions =======
function createStoreCard(store) {
    return `
        <div class="store-card" data-floor="${store.floor}" data-category="${store.category}">
            <div class="store-image-container">
                <img src="${store.image}" alt="${store.name}" class="store-image">
                <div class="store-overlay">
                    <button class="btn btn-primary">View Details</button>
                </div>
            </div>
            <div class="store-details">
                <h3 class="store-name">${store.name}</h3>
                <div class="store-info">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>Floor: ${store.floor.charAt(0).toUpperCase() + store.floor.slice(1)}</span>
                </div>
                <div class="store-info">
                    <i class="fas fa-tag"></i>
                    <span>Category: ${store.category.charAt(0).toUpperCase() + store.category.slice(1)}</span>
                </div>
                <div class="store-info">
                    <i class="fas fa-phone"></i>
                    <span>Contact: ${store.contact}</span>
                </div>
                <p>${store.description}</p>
            </div>
        </div>
    `;
}

function renderStores(stores = storesData) {
    const storesGrid = document.getElementById('storesGrid');
    if (storesGrid) {
        storesGrid.innerHTML = stores.map(store => createStoreCard(store)).join('');
    }
}

function filterStores() {
    const floorFilter = document.getElementById('floor-filter');
    const categoryFilter = document.getElementById('category-filter');
    
    if (!floorFilter || !categoryFilter) return;
    
    const floorValue = floorFilter.value;
    const categoryValue = categoryFilter.value;
    
    const filteredStores = storesData.filter(store => {
        const floorMatch = floorValue === 'all' || store.floor === floorValue;
        const categoryMatch = categoryValue === 'all' || store.category === categoryValue;
        return floorMatch && categoryMatch;
    });
    
    renderStores(filteredStores);
}

// ======= Initialize Stores =======
function initStores() {
    const storesGrid = document.getElementById('storesGrid');
    if (storesGrid) {
        renderStores();
        
        const floorFilter = document.getElementById('floor-filter');
        const categoryFilter = document.getElementById('category-filter');
        
        if (floorFilter) {
            floorFilter.addEventListener('change', filterStores);
        }
        
        if (categoryFilter) {
            categoryFilter.addEventListener('change', filterStores);
        }
    }
}

// ======= Initialize when DOM is ready =======
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStores);
} else {
    initStores();
}



