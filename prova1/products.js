// ===============================
// ViveTuMovil - Products Page JavaScript
// Optimized and lightweight version
// ===============================

'use strict';

// Global state management
const AppState = {
    products: [],
    filteredProducts: [],
    currentFilter: 'all',
    searchQuery: '',
    testimonialIndex: 0
};

// Product data with detailed information
const PRODUCTS_DATA = [
    // Smartphones
    {
        id: 'apple',
        name: 'Apple',
        category: 'smartphones',
        logo: 'assets/images/apple.png',
        description: 'Reparación especializada en iPhone y productos Apple',
        services: ['Pantalla LCD/OLED', 'Batería', 'Cámara', 'Face ID', 'Liberación'],
        models: ['iPhone15', 'iPhone14', 'iPhone13', 'iPhone12', 'iPhone 11', 'iPhone X', 'iPhone 8', 'Iphone 7', 'iPhone 6', 'All types of iPhones', 'All types of tablets', 'All types of Laptop'],
        repairTime: '1-2 horas',

        featured: true
    },
    {
        id: 'samsung',
        name: 'Samsung',
        category: 'smartphones',
        logo: 'assets/images/samsung.png',
        description: 'Servicio completo para dispositivos Samsung Galaxy',
        services: ['Pantalla AMOLED', 'Batería', 'Cámara', 'Sensores', 'Software'],
        models: ['Galaxy S24', 'Galaxy S23', 'Galaxy A54', 'Galaxy Note', 'Galaxy Z Fold', 'Galaxy Z Flip', 'All models'],
        repairTime: '2-3 horas',

        featured: true
    },
    {
        id: 'xiaomi',
        name: 'Xiaomi',
        category: 'smartphones',
        logo: 'assets/images/xiaomi.png',
        description: 'Reparación experta para toda la gama Xiaomi',
        services: ['Pantalla', 'Batería', 'Cámara', 'MIUI', 'Desbloqueo'],
        models: ['Mi 13', 'Mi 12', 'Redmi Note 12', 'POCO F5', 'Mi Mix', 'All models'],
        repairTime: '2-4 horas',

    },
    {
        id: 'huawei',
        name: 'Huawei',
        category: 'smartphones',
        logo: 'assets/images/huawei.png',
        description: 'Soporte técnico para dispositivos Huawei',
        services: ['Pantalla', 'Batería', 'Cámara Leica', 'EMUI/HarmonyOS'],
        models: ['P60', 'Mate 50', 'Nova 11', 'P Smart', 'Y Series', 'All models'],
        repairTime: '3-5 horas',

    },
    {
        id: 'google',
        name: 'Google Pixel',
        category: 'smartphones',
        logo: 'assets/images/google.png',
        description: 'Reparación especializada en Google Pixel',
        services: ['Pantalla', 'Batería', 'Cámara', 'Android Stock'],
        models: ['Pixel 8', 'Pixel 7', 'Pixel 6', 'Pixel 5', 'All models'],
        repairTime: '2-4 horas',

    },
    {
        id: 'oneplus',
        name: 'OnePlus',
        category: 'smartphones',
        logo: 'assets/images/onePlus.png',
        description: 'Servizio técnico para OnePlus',
        services: ['Pantalla', 'Batería', 'Cámara', 'OxygenOS'],
        models: ['OnePlus 11', 'OnePlus 10', 'OnePlus Nord', 'All models'],
        repairTime: '3-5 horas',

    },
    {
        id: 'realme',
        name: 'Realme',
        category: 'smartphones',
        logo: 'assets/images/realme.png',
        description: 'Reparación para dispositivos Realme',
        services: ['Pantalla', 'Batería', 'Cámara', 'Realme UI'],
        models: ['Realme GT', 'Realme 11', 'Realme C55', 'All models'],
        repairTime: '2-4 horas',

    },
    {
        id: 'honor',
        name: 'Honor',
        category: 'smartphones',
        logo: 'assets/images/honor.png',
        description: 'Servicio técnico para Honor',
        services: ['Pantalla', 'Batería', 'Cámara', 'Magic UI'],
        models: ['Honor 90', 'Honor 70', 'Honor X9a', 'All models'],
        repairTime: '3-5 horas',

    },
    {
        id: 'motorola',
        name: 'Motorola',
        category: 'smartphones',
        logo: 'assets/images/motorola.png',
        description: 'Reparación para Motorola',
        services: ['Pantalla', 'Batería', 'Cámara', 'Android'],
        models: ['Edge 40', 'Moto G73', 'Moto E13', 'All models'],
        repairTime: '2-4 horas',

    },
    {
        id: 'oppo',
        name: 'Oppo',
        category: 'smartphones',
        logo: 'assets/images/oppo.png',
        description: 'Servicio para dispositivos Oppo',
        services: ['Pantalla', 'Batería', 'Cámara', 'ColorOS'],
        models: ['Find X6', 'Reno 10', 'A98', 'All models'],
        repairTime: '3-5 horas',

    },
    {
        id: 'nokia',
        name: 'Nokia',
        category: 'smartphones',
        logo: 'assets/images/nokia.png',
        description: 'Reparación para Nokia',
        services: ['Pantalla', 'Batería', 'Cámara', 'Android One'],
        models: ['Nokia G60', 'Nokia C31', 'Nokia 2660', 'All models'],
        repairTime: '2-4 horas',

    },

    // Gaming Consoles
    {
        id: 'ps5',
        name: 'PlayStation 5',
        category: 'gaming',
        logo: 'assets/images/ps5.png',
        description: 'Reparación especializada en PS5 y accesorios',
        services: ['Ventilador', 'Disco Duro', 'HDMI', 'Joystick DualSense', 'Software'],
        models: ['PS5 Standard', 'PS5 Digital', 'DualSense Controller', 'All models'],
        repairTime: '1-3 días',

        featured: true
    },
    {
        id: 'xbox',
        name: 'Xbox',
        category: 'gaming',
        logo: 'assets/images/xbox.png',
        description: 'Servicio técnico para Xbox Series y accesorios',
        services: ['Ventilador', 'Disco Duro', 'HDMI', 'Control', 'Red Ring'],
        models: ['Xbox Series X', 'Xbox Series S', 'Xbox One', 'All models'],
        repairTime: '1-3 días',

    },
    {
        id: 'nintendo',
        name: 'Nintendo',
        category: 'gaming',
        logo: 'assets/images/nintendo.png',
        description: 'Reparación para Nintendo Switch y consolas',
        services: ['Joy-Con', 'Pantalla', 'Batería', 'Puerto USB-C', 'Fan'],
        models: ['Switch OLED', 'Switch Lite', 'Switch V2'],
        repairTime: '2-5 días',

    },
    {
        id: 'sony',
        name: 'Sony',
        category: 'gaming',
        logo: 'assets/images/sony.png',
        description: 'Servicio para consolas Sony',
        services: ['PS5', 'PS4', , 'PS3', 'PSP', 'PS Vita', 'Controles'],
        models: ['PS5 all models', 'PS4 Pro', 'PS4 Slim', 'PSP', 'PS Vita'],
        repairTime: '1-3 días',

    },

    // Computers & Laptops
    {
        id: 'asus',
        name: 'Asus',
        category: 'computers',
        logo: 'assets/images/asus.png',
        description: 'Reparación para laptops y componentes Asus',
        services: ['Pantalla', 'Teclado', 'Batería', 'Ventilador', 'Motherboard'],
        models: ['ZenBook', 'VivoBook', 'ROG', 'TUF Gaming', ' All models'],
        repairTime: '2-7 días',

    },
    {
        id: 'hp',
        name: 'HP',
        category: 'computers',
        logo: 'assets/images/HP.png',
        description: 'Servicio técnico para equipos HP',
        services: ['Pantalla', 'Teclado', 'Batería', 'Cargador', 'Sistema'],
        models: ['Pavilion', 'Envy', 'EliteBook', 'Omen', ' All models'],
        repairTime: '2-7 días',

    },
    {
        id: 'acer',
        name: 'Acer',
        category: 'computers',
        logo: 'assets/images/acer.png',
        description: 'Reparación para laptops Acer',
        services: ['Pantalla', 'Teclado', 'Batería', 'Ventilador'],
        models: ['Aspire', 'Swift', 'Predator', 'Nitro', ' All models'],
        repairTime: '2-7 días',

    },
    {
        id: 'lg',
        name: 'LG',
        category: 'computers',
        logo: 'assets/images/LG.png',
        description: 'Servicio para equipos LG',
        services: ['Monitor', 'Laptop', 'All-in-One'],
        models: ['LG Gram', 'LG UltraFine', 'LG Monitor', ' All models'],
        repairTime: '3-7 días',

    },

    // Tablets
    {
        id: 'galaxy',
        name: 'Galaxy Tab',
        category: 'tablets',
        logo: 'assets/images/galaxy.png',
        description: 'Reparación para tablets Samsung Galaxy',
        services: ['Pantalla', 'Batería', 'Cámara', 'S Pen', 'Software'],
        models: ['Galaxy Tab S9', 'Galaxy Tab A8', 'Galaxy Tab Active', 'All models'],
        repairTime: '2-4 horas',

    },
    {
        id: 'redmi',
        name: 'Redmi Pad',
        category: 'tablets',
        logo: 'assets/images/redmi.png',
        description: 'Servicio para tablets Redmi',
        services: ['Pantalla', 'Batería', 'Cámara', 'MIUI Pad'],
        models: ['Redmi Pad', 'Redmi Pad SE', 'All models'],
        repairTime: '3-5 horas',

    }
];

// Utility functions
const Utils = {
    // Debounce function for search
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
};

// Product management
const ProductManager = {
    // Render products grid
    renderProducts(products = AppState.filteredProducts) {
        const grid = document.getElementById('productsGrid');
        const noResults = document.getElementById('noResults');

        if (products.length === 0) {
            grid.innerHTML = '';
            noResults.style.display = 'block';
            return;
        }

        noResults.style.display = 'none';

        grid.innerHTML = products.map(product => `
            <div class="product-card ${product.featured ? 'featured' : ''}" 
                 data-category="${product.category}" 
                 data-name="${product.name.toLowerCase()}"
                 onclick="ProductManager.openModal('${product.id}')">
                <div class="product-header">
                    <div class="product-logo">
                        <img src="${product.logo}" alt="${product.name}" loading="lazy">
                    </div>
                    <h3 class="product-name">${product.name}</h3>
                    <span class="product-category">${this.getCategoryName(product.category)}</span>
                </div>
                <div class="product-body">
                    <p class="product-description">${product.description}</p>
                    <ul class="product-services">
                        ${product.services.slice(0, 3).map(service =>
            `<li><i class="fas fa-check"></i> ${service}</li>`
        ).join('')}
                    </ul>
                </div>
                <div class="product-footer">
                    <div class="product-actions">
                        <button class="btn-primary" onclick="event.stopPropagation(); handleCall()">
                            <i class="fas fa-phone"></i>
                            Consultar
                        </button>
                        <button class="btn-secondary" onclick="event.stopPropagation(); ProductManager.openModal('${product.id}')">
                            <i class="fas fa-info-circle"></i>
                            Detalles
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        // Simple animation for cards
        this.animateCards();
    },

    // Get category display name
    getCategoryName(category) {
        const categoryMap = {
            smartphones: 'Smartphones',
            gaming: 'Gaming',
            computers: 'Laptops',
            tablets: 'Tablets'
        };
        return categoryMap[category] || category;
    },

    // Simple card animation
    animateCards() {
        const cards = document.querySelectorAll('.product-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';

            setTimeout(() => {
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 50);
        });
    },

    // Filter products
    filterProducts(category = 'all') {
        AppState.currentFilter = category;

        let filtered = AppState.products;

        if (category !== 'all') {
            filtered = filtered.filter(product => product.category === category);
        }

        if (AppState.searchQuery) {
            const query = AppState.searchQuery.toLowerCase();
            filtered = filtered.filter(product => {
                const nameWords = product.name.toLowerCase().split(',').map(w => w.trim());
                const descWords = product.description.toLowerCase().split(',').map(w => w.trim());
                return nameWords.includes(query) || descWords.includes(query);
            });
        }


        AppState.filteredProducts = filtered;
        this.renderProducts();
        this.updateFilterTabs();
    },

    // Update filter tabs
    updateFilterTabs() {
        document.querySelectorAll('.filter-tab').forEach(tab => {
            tab.classList.remove('active');
            if (tab.dataset.category === AppState.currentFilter) {
                tab.classList.add('active');
            }
        });
    },

    // Search products
    searchProducts(query) {
        AppState.searchQuery = query;
        this.filterProducts(AppState.currentFilter);

        // Show/hide clear button
        const clearBtn = document.querySelector('.search-clear');
        if (query) {
            clearBtn.classList.add('visible');
        } else {
            clearBtn.classList.remove('visible');
        }
    },

    // Open product modal
    openModal(productId) {
        const product = AppState.products.find(p => p.id === productId);
        if (!product) return;

        const modal = document.getElementById('productModal');
        const title = document.getElementById('modalTitle');
        const body = document.getElementById('modalBody');

        title.textContent = `${product.name} - Servicios`;

        body.innerHTML = `
            <div class="modal-product-info">
                <div class="modal-product-header">
                    <div class="modal-product-logo">
                        <img src="${product.logo}" alt="${product.name}" loading="lazy">
                    </div>
                    <div class="modal-product-details">
                        <h4>${product.name}</h4>
                        <p>${product.description}</p>
                    </div>
                </div>
                
                <div class="modal-section">
                    <h5><i class="fas fa-wrench"></i> Servicios Disponibles</h5>
                    <ul class="modal-services">
                        ${product.services.map(service =>
            `<li><i class="fas fa-check"></i> ${service}</li>`
        ).join('')}
                    </ul>
                </div>
                
                <div class="modal-section">
                    <h5><i class="fas fa-mobile-alt"></i> Modelos Compatibles</h5>
                    <div class="modal-models">
                        ${product.models.map(model =>
            `<span class="model-tag">${model}</span>`
        ).join('')}
                    </div>
                </div>
                
                <div class="modal-section">
                    <h5><i class="fas fa-info-circle"></i> Información del Servicio</h5>
                    <div class="modal-info-grid">
                        <div class="info-item">
                            <i class="fas fa-clock"></i>
                            <span>Tiempo: ${product.repairTime}</span>
                        </div>
                        
                        ${product.featured ? '<div class="info-item"><i class="fas fa-star"></i><span>Servicio Premium</span></div>' : ''}
                    </div>
                </div>
            </div>
        `;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
};

// Testimonial management
const TestimonialManager = {
    testimonials: [
        {
            name: 'María González',
            device: 'iPhone 14 Pro',
            rating: 5,
            text: 'Repararon mi iPhone 14 en menos de 2 horas. Servicio profesional y precio justo.',
            avatar: 'M'
        },
        {
            name: 'Carlos Ruiz',
            device: 'PlayStation 5',
            rating: 5,
            text: 'Mi PS5 no encendía y pensé que se había roto. En ViveTuMovil la dejaron como nueva.',
            avatar: 'C'
        },
        {
            name: 'Ana Martín',
            device: 'Samsung Galaxy S23',
            rating: 5,
            text: 'Excelente atención al cliente. Explicaron todo el proceso y el precio fue muy razonable.',
            avatar: 'A'
        }
    ],

    init() {
        this.createDots();
        this.startAutoplay();
    },

    createDots() {
        const dotsContainer = document.querySelector('.testimonial-dots');
        if (dotsContainer) {
            dotsContainer.innerHTML = this.testimonials.map((_, index) =>
                `<div class="testimonial-dot ${index === 0 ? 'active' : ''}" 
                      onclick="TestimonialManager.goToSlide(${index})"></div>`
            ).join('');
        }
    },

    goToSlide(index) {
        AppState.testimonialIndex = index;
        this.updateTestimonials();
    },

    nextSlide() {
        AppState.testimonialIndex = (AppState.testimonialIndex + 1) % this.testimonials.length;
        this.updateTestimonials();
    },

    prevSlide() {
        AppState.testimonialIndex = AppState.testimonialIndex === 0
            ? this.testimonials.length - 1
            : AppState.testimonialIndex - 1;
        this.updateTestimonials();
    },

    updateTestimonials() {
        const testimonials = document.querySelectorAll('.testimonial');
        const dots = document.querySelectorAll('.testimonial-dot');

        testimonials.forEach((testimonial, index) => {
            testimonial.classList.remove('active', 'prev');
            if (index === AppState.testimonialIndex) {
                testimonial.classList.add('active');
            } else if (index < AppState.testimonialIndex) {
                testimonial.classList.add('prev');
            }
        });

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === AppState.testimonialIndex);
        });
    },

    startAutoplay() {
        setInterval(() => {
            this.nextSlide();
        }, 3200);
    }
};

// Event handlers
function handleCall() {
    window.open('tel:+34954042255', '_self');
}

function handleWhatsApp() {
    const message = encodeURIComponent('Hola! Me interesa información sobre sus servicios de reparación.');
    window.open(`https://wa.me/34954042255?text=${message}`, '_blank');
}

function clearSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.value = '';
    ProductManager.searchProducts('');
    searchInput.focus();
}

function closeModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function changeTestimonial(direction) {
    if (direction > 0) {
        TestimonialManager.nextSlide();
    } else {
        TestimonialManager.prevSlide();
    }
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 ViveTuMovil Products Page loaded');

    // Initialize state
    AppState.products = PRODUCTS_DATA;
    AppState.filteredProducts = PRODUCTS_DATA;

    // Initialize managers
    TestimonialManager.init();

    // Render initial products
    ProductManager.renderProducts();

    // Setup event listeners
    setupEventListeners();
});

function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        const debouncedSearch = Utils.debounce((query) => {
            ProductManager.searchProducts(query);
        }, 300);

        searchInput.addEventListener('input', (e) => {

            // Add Enter key functionality to scroll to products
            searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    // Scroll to products grid section
                    const productsGrid = document.getElementById('productsGrid');
                    if (productsGrid) {
                        productsGrid.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
            debouncedSearch(e.target.value);
        });
    }

    // Filter tabs
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            ProductManager.filterProducts(tab.dataset.category);
        });
    });

    // Modal close on outside click
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-overlay')) {
                closeModal();
            }
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('productModal');
        if (modal && modal.classList.contains('active') && e.key === 'Escape') {
            closeModal();
        }
    });
}

// Export for global access
window.ViveTuMovilProducts = {
    ProductManager,
    TestimonialManager,
    Utils,
    AppState
};