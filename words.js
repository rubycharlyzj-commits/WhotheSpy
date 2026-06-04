export const wordDatabase = {
    hewan: [
        { citizen: 'Kucing', spy: 'Anjing' },
        { citizen: 'Singa', spy: 'Harimau' },
        { citizen: 'Sapi', spy: 'Kambing' },
        { citizen: 'Ayam', spy: 'Bebek' },
        { citizen: 'Lumba-lumba', spy: 'Paus' },
        { citizen: 'Kuda', spy: 'Keledai' },
        { citizen: 'Semut', spy: 'Rayap' },
        { citizen: 'Elang', spy: 'Burung Hantu' },
        { citizen: 'Katak', spy: 'Kodok' },
        { citizen: 'Ular', spy: 'Cacing' }
    ],
    makanan: [
        { citizen: 'Nasi Goreng', spy: 'Mie Goreng' },
        { citizen: 'Bakso', spy: 'Mie Ayam' },
        { citizen: 'Burger', spy: 'Sandwich' },
        { citizen: 'Sate Ayam', spy: 'Sate Kambing' },
        { citizen: 'Pizza', spy: 'Martabak' },
        { citizen: 'Kebab', spy: 'Roti Bakar' },
        { citizen: 'Rendang', spy: 'Semur' },
        { citizen: 'Soto', spy: 'Rawon' },
        { citizen: 'Donat', spy: 'Roti' },
        { citizen: 'Cokelat', spy: 'Permen' }
    ],
    benda: [
        { citizen: 'Laptop', spy: 'Komputer' },
        { citizen: 'Handphone', spy: 'Tablet' },
        { citizen: 'Buku', spy: 'Majalah' },
        { citizen: 'Pensil', spy: 'Pulpen' },
        { citizen: 'Dompet', spy: 'Tas' },
        { citizen: 'Kunci', spy: 'Gembok' },
        { citizen: 'Kacamata', spy: 'Lensa Kontak' },
        { citizen: 'Jam Tangan', spy: 'Jam Dinding' },
        { citizen: 'Payung', spy: 'Jas Hujan' },
        { citizen: 'Sepatu', spy: 'Sandal' }
    ],
    tempat: [
        { citizen: 'Sekolah', spy: 'Kampus' },
        { citizen: 'Rumah Sakit', spy: 'Puskesmas' },
        { citizen: 'Pasar', spy: 'Supermarket' },
        { citizen: 'Pantai', spy: 'Kolam Renang' },
        { citizen: 'Gunung', spy: 'Bukit' },
        { citizen: 'Bandara', spy: 'Stasiun' },
        { citizen: 'Bioskop', spy: 'Teater' },
        { citizen: 'Restoran', spy: 'Kafe' },
        { citizen: 'Hotel', spy: 'Penginapan' },
        { citizen: 'Perpustakaan', spy: 'Toko Buku' }
    ]
};

// Fungsi pembantu jika ingin mengambil daftar kategori yang tersedia
export function getAvailableCategories() {
    return Object.keys(wordDatabase);
}