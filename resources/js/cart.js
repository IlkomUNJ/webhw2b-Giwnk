const SHIPPING_FEE = 35000

// --- 1. UTILITY FUNCTIONS ---

function formatRupiah(number) {
  // Memastikan angka diformat sebagai Rupiah (misal: IDR 150.000)
  return 'IDR ' + number.toLocaleString('id-ID')
}

function getCartItems() {
  const cart = localStorage.getItem('shoppingCart')
  return cart ? JSON.parse(cart) : []
}

function saveCartItems(items) {
  localStorage.setItem('shoppingCart', JSON.stringify(items))
}

// --- 2. ADD TO CART LOGIC (untuk Halaman Produk) ---

// resources/js/cart.js

window.addToCart = function(productId, productName, productPrice) {
    let cartItems = getCartItems();
    
    // Pastikan ID diolah sebagai String (sesuai dengan cara diambil dari data-*)
    productId = String(productId);
    productPrice = parseInt(productPrice);

    // BUG CHECK: Pastikan perbandingan ID sudah benar
    const existingItemIndex = cartItems.findIndex(item => item.id === productId); 
    //                         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    // Jika ID di sini tidak unik atau tipe data tidak sama (misal: number vs string), bug bisa terjadi.

    if (existingItemIndex > -1) {
        // Jika sudah ada, tambahkan kuantitasnya
        cartItems[existingItemIndex].quantity += 1;
    } else {
        // Jika belum ada, tambahkan produk baru
        const newItem = {
            id: productId, // Pastikan ID ini unik
            name: productName,
            price: productPrice,
            quantity: 1
        };
        cartItems.push(newItem);
    }

    saveCartItems(cartItems);
    alert(`${productName} telah ditambahkan ke keranjang!`);
}

// --- 3. CART OVERVIEW LOGIC (untuk Halaman Keranjang) ---

window.updateQuantity = function (productId, change) {
  let cartItems = getCartItems()
  // Gunakan == untuk komparasi string vs number jika ada inkonsistensi
  const itemIndex = cartItems.findIndex((item) => item.id == productId)

  if (itemIndex > -1) {
    cartItems[itemIndex].quantity += change

    if (cartItems[itemIndex].quantity <= 0) {
      // Hapus item jika kuantitasnya 0
      cartItems = cartItems.filter((item) => item.id != productId)
    }

    saveCartItems(cartItems)
    renderCart() // Panggil ulang renderCart untuk memperbarui tampilan
  }
}

function renderCart() {
  const cartItems = getCartItems()
  const tbody = document.getElementById('cart-product-rows')

  // Keluar jika elemen keranjang tidak ada (misal, user ada di halaman produk)
  if (!tbody) return

  let subtotalPrice = 0
  let totalItemCount = 0

  tbody.innerHTML = ''

  if (cartItems.length === 0) {
    const emptyRow = document.createElement('tr')
    emptyRow.innerHTML = `<td colspan="4" class="py-5 px-3 text-center text-[#653F2C]">Keranjang Anda kosong. 😔</td>`
    tbody.appendChild(emptyRow)
  } else {
    cartItems.forEach((item) => {
      const itemTotal = item.price * item.quantity
      subtotalPrice += itemTotal
      totalItemCount += item.quantity

      const newRow = document.createElement('tr')
      newRow.classList.add('border-b', 'border-gray-200')
      newRow.innerHTML = `
                <td class="py-3 px-3 text-left">
                    ${item.name}
                </td>
                <td class="py-3 px-3 text-center w-[15%]">
                    ${formatRupiah(item.price)}
                </td>
                <td class="py-3 px-3 text-center w-[15%] flex justify-center items-center space-x-2">
                    <button 
                        class="text-[#653F2C] font-bold border rounded w-6 h-6 hover:bg-[#E0C7A9]" 
                        onclick="updateQuantity('${item.id}', -1)"
                    >-</button> 
                    <span class="w-8">${item.quantity}</span> 
                    <button 
                        class="text-[#653F2C] font-bold border rounded w-6 h-6 hover:bg-[#E0C7A9]" 
                        onclick="updateQuantity('${item.id}', 1)"
                    >+</button>
                </td>
                <td class="py-3 px-3 text-center w-[15%]">
                    ${formatRupiah(itemTotal)}
                </td>
            `
      tbody.appendChild(newRow)
    })
  }

  // Perbarui summary total
  const finalTotal = subtotalPrice + SHIPPING_FEE

  document.getElementById('total-items-count').textContent = totalItemCount
  document.getElementById('cart-subtotal').textContent = formatRupiah(subtotalPrice).replace(
    'IDR ',
    'IDR '
  ) // Hilangkan prefix IDR agar sesuai format tabel Anda
  document.getElementById('final-total').textContent = formatRupiah(finalTotal).replace(
    'IDR ',
    'IDR '
  ) // Hilangkan prefix IDR
}

// --- 4. EVENT LISTENERS & INITIALIZATION ---

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mengambil semua elemen tombol dengan class '.add-to-cart'
  const addToCartButtons = document.querySelectorAll('.add-to-cart')

  // 2. Melakukan looping pada setiap tombol yang ditemukan
  addToCartButtons.forEach((button) => {
    // 3. Menambahkan event listener 'click' ke masing-masing tombol
    button.addEventListener('click', (event) => {
      // Menggunakan event.target.closest untuk mendapatkan data dari div product card
      const productCard = event.target.closest('[data-product-id]')

      // Mengambil data dari atribut data-*
      const id = productCard.dataset.productId
      const name = productCard.dataset.productName + ' (' + productCard.dataset.productNetto + ')'
      const price = productCard.dataset.productPrice

      // Memanggil fungsi utama penambahan keranjang
      window.addToCart(id, name, price)
    })
  })

  // ... (Logika Render Cart di sini) ...
  if (document.getElementById('cart-product-rows')) {
    renderCart()
  }
})
