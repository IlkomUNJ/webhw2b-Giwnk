// database/seeders/MainSeeder.ts

import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Product from '#models/product' // Asumsi Model sudah dibuat
import Service from '#models/service' // Asumsi Model sudah dibuat
import ArabicaProduct from '#models/arabica_product'
import RobustaProduct from '#models/robusta_product'

export default class MainSeeder extends BaseSeeder {
  async run() {
    // Pastikan data yang kamu masukkan sesuai dengan skema (migration) tabel kamu!

    await Service.truncate()
    await Product.truncate()
    await ArabicaProduct.truncate()
    await RobustaProduct.truncate()

    // Data Services
    await Service.createMany([
      {
        img: '/assets/quality-service-pic/1.png',
        title: 'Sumber Biji Pilihan Terbaik',
        description:
          'Biji kopi kami adalah hasil seleksi ketat dari perkebunan petani lokal pilihan...',
      },
      {
        img: '/assets/quality-service-pic/2.png',
        title: 'Roasting Segar Sesuai Pesanan',
        description: 'Proses roasting kami adalah sebuah orkestrasi yang teliti...',
      },
      {
        img: '/assets/quality-service-pic/3.png',
        title: 'Pengiriman Cepat & Aman',
        description: 'Seperti gelombang radio yang tak pernah putus, kopi Anda kami kirimkan...',
      },
      {
        img: '/assets/quality-service-pic/4.png',
        title: 'Garansi Kepuasan Pelanggan',
        description: 'Kepuasan Anda adalah standing ovation terbaik bagi kami...',
      },
    ])

    // Data Products
    await Product.createMany([
      {
        img: '/assets/product-pic/4.png',
        name: 'Palmsugar Nutty',
        price: 79000,
        varietas: 'Arabica Typica',
        flavorNotes: 'Palmsugar, Nutty',
        netto: '250 gram',
      },
      {
        img: '/assets/product-pic/9.png',
        name: 'Cherry Tea',
        price: 79000,
        varietas: 'Arabica Kintamani',
        flavorNotes: 'Cherry, Blacktea',
        netto: '250 gram',
      },
      {
        img: '/assets/product-pic/13.png',
        name: 'Caramel Peanut',
        price: 54000,
        varietas: 'Robusta Ciwidey',
        flavorNotes: 'Caramel Peanut',
        netto: '250 gram',
      },
      {
        img: '/assets/product-pic/19.png',
        name: 'Spices Fruitty',
        price: 79000,
        varietas: 'Arabica Catimor',
        flavorNotes: 'Spices, Berry',
        netto: '250 gram',
      },
      {
        img: '/assets/product-pic/2.png',
        name: 'Wine Pineapple',
        price: 54000,
        varietas: 'Robusta Flores',
        flavorNotes: 'Wine, Pineapple',
        netto: '250 gram',
      },
      {
        img: '/assets/product-pic/16.png',
        name: 'Mango Honey',
        price: 54000,
        varietas: 'Robusta Jawa',
        flavorNotes: 'Honey, Mango',
        netto: '250 gram',
      },
    ])

    await ArabicaProduct.createMany([
      {
        img: '/assets/product-pic/4.png',
        name: 'Palmsugar Nutty',
        price: 79000,
        varietas: 'Arabica Typica',
        flavorNotes: 'Palmsugar, Nutty',
        netto: '250 gram',
      },
      {
        img: '/assets/product-pic/9.png',
        name: 'Cherry Tea',
        price: 79000,
        varietas: 'Arabica Kintamani',
        flavorNotes: 'Cherry, Blacktea',
        netto: '250 gram',
      },
      {
        img: '/assets/product-pic/19.png',
        name: 'Spices Fruitty',
        price: 79000,
        varietas: 'Arabica Catimor',
        flavorNotes: 'Spices, Berry',
        netto: '250 gram',
      },
      {
        img: '/assets/product-pic/1.png',
        name: 'Choco Orange',
        price: 79000,
        varietas: 'Arabica Bengkulu',
        flavorNotes: 'Choco, Orange',
        netto: '250 gram',
      },
      {
        img: '/assets/product-pic/3.png',
        name: 'Honey Berry',
        price: 79000,
        varietas: 'Arabica Gayo',
        flavorNotes: 'Honey, Berry',
        netto: '250 gram',
      },
      {
        img: '/assets/product-pic/7.png',
        name: 'Guava Wine',
        price: 79000,
        varietas: 'Arabica Ginting',
        flavorNotes: 'Guava, Wine',
        netto: '250 gram',
      },
      {
        img: '/assets/product-pic/6.png',
        name: 'Green Apple Lime',
        price: 79000,
        varietas: 'Arabica Ciffos',
        flavorNotes: 'Greenapple, Lime',
        netto: '250 gram',
      },
      {
        img: '/assets/product-pic/11.png',
        name: 'Choco Banana',
        price: 79000,
        varietas: 'Arabica Toraja',
        flavorNotes: 'Banana, Choco',
        netto: '250 gram',
      },
      {
        img: '/assets/product-pic/14.png',
        name: 'Strawberry Lemon',
        price: 79000,
        varietas: 'Arabica Kintamani',
        flavorNotes: 'Strawberry, Lemon',
        netto: '250 gram',
      },
      {
        img: '/assets/product-pic/17.png',
        name: 'Cheese Milk',
        price: 79000,
        varietas: 'Arabica Bali Buleleng',
        flavorNotes: 'Milk, Savory',
        netto: '250 gram',
      },
      {
        img: '/assets/product-pic/20.png',
        name: 'Blueberry Cream',
        price: 79000,
        varietas: 'Arabica Ciwidey',
        flavorNotes: 'Cream, Blueberry',
        netto: '250 gram',
      },
      {
        img: '/assets/product-pic/8.png',
        name: 'Citrus Wine',
        price: 79000,
        varietas: 'Arabica Typica',
        flavorNotes: 'Citrus, Wine',
        netto: '250 gram',
      },
    ])

    await RobustaProduct.createMany([
      {
        img: '/assets/product-pic/13.png',
        name: 'Caramel Peanut',
        price: 54000,
        varietas: 'Robusta Ciwidey',
        flavorNotes: 'Caramel, Nutty',
        netto: '250 gram',
      },
      {
        img: '/assets/product-pic/2.png',
        name: 'Wine Pineapple',
        price: 54000,
        varietas: 'Robusta Flores',
        flavorNotes: 'Wine, Pineapple',
        netto: '250 gram',
      },
      {
        img: '/assets/product-pic/16.png',
        name: 'Mango Honey',
        price: 54000,
        varietas: 'Robusta Jawa',
        flavorNotes: 'Honey, Mango',
        netto: '250 gram',
      },
      {
        img: '/assets/product-pic/5.png',
        name: 'Tiramisu Cake',
        price: 54000,
        varietas: 'Robusta Jember',
        flavorNotes: 'Honey, Milk, Tiramisu',
        netto: '250 gram',
      },
      {
        img: '/assets/product-pic/6.png',
        name: 'Lemon Tea',
        price: 54000,
        varietas: 'Robusta Sidikalang',
        flavorNotes: 'Lemontea, Lime',
        netto: '250 gram',
      },
      {
        img: '/assets/product-pic/12.png',
        name: 'Honey Milk',
        price: 54000,
        varietas: 'Robusta Bengkulu',
        flavorNotes: 'Honey, Milk, Creamy',
        netto: '250 gram',
      },
      {
        img: '/assets/product-pic/15.png',
        name: 'Grape Apple',
        price: 54000,
        varietas: 'Robusta Ginting',
        flavorNotes: 'Greenapple, Grape',
        netto: '250 gram',
      },
      {
        img: '/assets/product-pic/18.png',
        name: 'Almond Hazelnut',
        price: 54000,
        varietas: 'Robusta Bali Pupuan',
        flavorNotes: 'Almond, Nutty',
        netto: '250 gram',
      },
      {
        img: '/assets/product-pic/21.png',
        name: 'Sea Salt',
        price: 54000,
        varietas: 'Robusta Lampung',
        flavorNotes: 'Honey, Salty, Bitternes',
        netto: '250 gram',
      },
    ])

    // Data Galleries biasanya tidak perlu masuk DB, cukup di Service/Config
  }
}
