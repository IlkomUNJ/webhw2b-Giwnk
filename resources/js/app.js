// console.log('test')
// async function loadCart() {
//   const res = await fetch('/cart')
//   const data = await res.json()
//   const tbody = document.getElementById('cart-body')
//   tbody.innerHTML = ''

//   if (!data.cart || data.cart.length === 0) {
//     tbody.innerHTML = `<tr><td colspan="5" class="py-6 text-gray-500">Keranjang kosong 😢</td></tr>`
//     return
//   }

//   data.cart.forEach((item) => {
//     const subtotal = item.price * item.quantity
//     const row = `
//             <tr class="border-b border-gray-200">
//               <td class="py-3 px-3">${item.name}</td>
//               <td class="py-3 px-3">IDR ${item.price}</td>
//               <td class="py-3 px-3">${item.quantity}</td>
//               <td class="py-3 px-3">IDR ${subtotal}</td>
//               <td class="py-3 px-3">
//                 <button onclick="removeItem(${item.id})" class="bg-[#A94D3F] text-[#F5EFE5] px-3 py-1 rounded-md text-sm hover:bg-[#7a3328] transition-all">Hapus</button>
//               </td>
//             </tr>
//           `
//     tbody.insertAdjacentHTML('beforeend', row)
//   })
// }

// // 🔹 Hapus satu item
// async function removeItem(id) {
//   if (!confirm('Yakin hapus produk ini?')) return
//   const res = await fetch(`/cart/remove/${id}`, { method: 'DELETE' })
//   const data = await res.json()
//   alert(data.message)
//   loadCart()
// }

// // 🔹 Hapus semua item
// async function clearCart() {
//   if (!confirm('Hapus semua isi keranjang?')) return
//   const res = await fetch('/cart/clear', { method: 'DELETE' })
//   const data = await res.json()
//   alert(data.message)
//   loadCart()
// }

// // Jalankan pas halaman pertama kali dibuka
// document.addEventListener('DOMContentLoaded', loadCart)

