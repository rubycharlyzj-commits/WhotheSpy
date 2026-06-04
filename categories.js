import { wordDatabase } from './words.js';

// Metadata untuk mempercantik tampilan kategori di UI
const categoryMetadata = {
    hewan: { displayName: 'Hewan', icon: '🐾', description: 'Kucing, Singa, Lumba-lumba, dll.' },
    makanan: { displayName: 'Makanan', icon: '🍔', description: 'Nasi Goreng, Bakso, Pizza, dll.' },
    benda: { displayName: 'Benda', icon: '📦', description: 'Laptop, Buku, Kacamata, dll.' },
    tempat: { displayName: 'Tempat', icon: '📍', description: 'Sekolah, Pantai, Bioskop, dll.' }
};

/**
 * Mengambil detail lengkap sebuah kategori berdasarkan key-nya
 * @param {string} key - Key kategori (contoh: 'hewan')
 * @returns {Object} Detail kategori (displayName, icon, description)
 */
export function getCategoryDetails(key) {
    return categoryMetadata[key] || { displayName: key, icon: '🎮', description: '' };
}

/**
 * Mengambil semua daftar kategori yang tersedia di wordDatabase beserta metadatanya
 * @returns {Array<Object>} Daftar kategori lengkap
 */
export function getAllCategories() {
    return Object.keys(wordDatabase).map(key => ({
        key: key,
        ...getCategoryDetails(key)
    }));
}

/**
 * Memvalidasi apakah key kategori tersebut terdaftar di database kata
 * @param {string} key - Key kategori yang akan dicek
 * @returns {boolean} True jika valid
 */
export function isValidCategory(key) {
    return Object.prototype.hasOwnProperty.call(wordDatabase, key);
}

/**
 * Fungsi utilitas UI untuk mengisi elemen HTML <select> dengan daftar kategori secara otomatis
 * @param {HTMLSelectElement} selectElement - Element select DOM HTML
 * @param {string} activeCategory - Key kategori yang otomatis terpilih saat ini
 */
export function populateCategorySelect(selectElement, activeCategory = 'hewan') {
    if (!selectElement) return;
    
    // Bersihkan opsi lama jika ada
    selectElement.innerHTML = '';
    
    const categories = getAllCategories();
    
    categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat.key;
        option.textContent = `${cat.icon} ${cat.displayName}`;
        
        if (cat.key === activeCategory) {
            option.selected = true;
        }
        
        selectElement.appendChild(option);
    });
}