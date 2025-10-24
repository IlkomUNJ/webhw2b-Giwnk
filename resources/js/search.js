document.addEventListener('DOMContentLoaded', () => {
  // 1. Ambil Elemen Kunci menggunakan ID dari NAVBAR
  const searchInput = document.getElementById('product-search-input')

  // Ambil semua kartu produk menggunakan class dari komponen Edge
  const productCards = document.querySelectorAll('.product-card-item')

  if (!searchInput) {
    // Jika navbar tidak ada di halaman ini, fitur pencarian tidak akan berjalan.
    return
  }

  // 2. Lampirkan Event Listener 'input'
  searchInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase().trim()

    // 3. Filtering Logik
    productCards.forEach((card) => {
      // Mengambil nama dari data-attribute yang dirender oleh Edge
      const productName = card.dataset.productName.toLowerCase()

      // Tentukan apakah card harus ditampilkan atau disembunyikan
      if (productName.includes(searchTerm)) {
        card.style.display = '' // Tampilkan
      } else {
        card.style.display = 'none' // Sembunyikan
      }
    })
  })
})
