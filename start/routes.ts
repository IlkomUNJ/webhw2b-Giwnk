/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import Product from '#models/product' // Import Model Product
import Service from '#models/service' // Import Model Service
import ArabicaProduct from '#models/arabica_product'
import router from '@adonisjs/core/services/router'
import RobustaProduct from '#models/robusta_product'

const AuthController = () => import('#controllers/auth_controller')

router
  .get('/', async ({ view }) => {
    const qualityServices = await Service.all()
    const bestSellers = await Product.all()
    const galleries = Array.from({ length: 9 }, (_, i) => `/assets/gallery-pic/${i + 1}.png`)

    return view.render('pages/home', { qualityServices, bestSellers, galleries })
  })
  .as('home')

router
  .get('/aboutus', async ({ view }) => {
    const journeys = [
      {
        year: '2023',
        month: 'Maret',
        desc: 'Semua berawal dari kecintaan kami dengan dunia kopi. Kami mencoba belajar tentang kopi, mencoba dan meracik resep sendiri yang bisa memberikan rasa kopi yang presisi.',
      },
      {
        year: '2024',
        month: 'Januari',
        desc: 'Melihat peluang kopi yang sedang meningkat, kami memutuskan untuk membuat inovasi baru yaitu Kopi Filter dalam kemasan botol.',
      },
      {
        year: '2024',
        month: 'November',
        desc: 'Dengan hasil penjualan yang meningkat, kami pun membangun kafe “Kopi Rumah Canggih”.',
      },
      {
        year: '2025',
        month: 'September',
        desc: 'Sekarang kami hadir juga dengan inovasi baru dengan menjual biji kopi utuh langsung dari tangan petani lokal.',
      },
    ]

    const values = [
      {
        title: 'Nilai Rumah Kopi Canggih',
        desc: 'Kami percaya bahwa musik Indonesia adalah warisan yang patut dirayakan, dan kopi adalah sahabat setia setiap perjalanan...',
      },
      {
        title: 'Komitmen Rumah Kopi Canggih',
        desc: 'Kami berkomitmen untuk selalu menyajikan kopi terbaik dengan kualitas yang konsisten serta mendukung musisi lokal...',
      },
    ]

    return view.render('pages/aboutus', { journeys, values })
  })
  .as('about')

router
  .get('/products', async ({ view }) => {
    const bestSellers = await Product.all()
    const arabicaProductCard = await ArabicaProduct.all()
    const robustaProductCard = await RobustaProduct.all()

    return view.render('pages/products', { bestSellers, arabicaProductCard, robustaProductCard })
  })
  .as('products')

router.get('/contact', async ({ view }) => {
  return view.render('pages/contact')
})
router.get('/checkout', async ({ view }) => {
  return view.render('pages/checkout/checkout')
})

router.get('/register', [AuthController, 'indexRegist']).as('register.index')
router.post('/register', [AuthController, 'storeRegist']).as('register.store')

router.get('/login', [AuthController, 'indexLogin']).as('login.index')
router.post('/login', [AuthController, 'storeLogin']).as('login.store')
router.post('/logout', [AuthController, 'destroyLogin']).as('logout')

router
  .get('/admin/add-product', async ({ view }) => {
    return view.render('admin/add_product')
  })
  .as('admin.add_product')
