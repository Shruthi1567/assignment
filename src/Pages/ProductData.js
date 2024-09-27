const products = [
    // Electronics Products (10 items)
    {
      id: 1,
      name: "Wireless Headphones",
      offerPrice: 99.99, 
      originalPrice: 129.99, 
      description: "Noise-cancelling wireless headphones with 30 hours of battery life.",
      category: "Electronics",
      inStock: true,
      imageUrl: "https://th.bing.com/th?id=OPAC.w43E5dKt%2bXE3Kg474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1"
    },
    {
      id: 2,
      name: "Smartphone",
      offerPrice: 699.99, 
      originalPrice: 799.99, 
      description: "Latest model smartphone with 128GB storage and high-resolution camera.",
      category: "Electronics",
      inStock: false,
      imageUrl: "https://th.bing.com/th?id=OPAC.KzHCdbQOp6GCeA474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1"
    },
    {
      id: 3,
      name: "4K Smart TV",
      offerPrice: 899.99,
      originalPrice: 999.99, 
      description: "Ultra HD 4K Smart TV with HDR and voice control.",
      category: "Electronics",
      inStock: true,
      imageUrl: "https://th.bing.com/th?id=OPAC.LTzLBfK86WjdGw474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1"
    },
    {
      id: 4,
      name: "Gaming Laptop",
      offerPrice: 1499.99,
      originalPrice: 1699.99,
      description: "High-performance gaming laptop with RTX graphics card and 16GB RAM.",
      category: "Electronics",
      inStock: true,
      imageUrl: "https://th.bing.com/th?id=OPAC.j2HiB62zug6ixA474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1"
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      offerPrice: 59.99,
      originalPrice: 79.99,
      description: "Portable Bluetooth speaker with waterproof design and 12-hour battery life.",
      category: "Electronics",
      inStock: false,
      imageUrl: "https://th.bing.com/th?id=OPAC.wut32%2b4FsCz3cw474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1"
    },
    {
      id: 6,
      name: "Smartwatch",
      offerPrice: 199.99,
      originalPrice: 249.99,
      description: "Feature-packed smartwatch with fitness tracking and heart rate monitor.",
      category: "Electronics",
      inStock: true,
      imageUrl: "https://th.bing.com/th?id=OPAC.QVE10mRdoJy0Zw474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1"
    },
    {
      id: 7,
      name: "Drone",
      offerPrice: 499.99,
      originalPrice: 599.99,
      description: "HD camera drone with 4K video recording and GPS.",
      category: "Electronics",
      inStock: true,
      imageUrl: "https://th.bing.com/th?id=OPAC.HFmw6xntkbMEtA474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1"
    },
    {
      id: 8,
      name: "VR Headset",
      offerPrice: 299.99,
      originalPrice: 349.99,
      description: "Virtual reality headset with immersive 3D experience and 110° field of view.",
      category: "Electronics",
      inStock: true,
      imageUrl: "https://th.bing.com/th?id=OPAC.TJEcwqZo6KfeJQ474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1"
    },
    {
      id: 9,
      name: "Wireless Charger",
      offerPrice: 29.99,
      originalPrice: 39.99,
      description: "Fast wireless charger compatible with multiple devices.",
      category: "Electronics",
      inStock: true,
      imageUrl: "https://th.bing.com/th?id=OPAC.%2fGxdKQFvi13mYg474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1"
    },
    {
      id: 10,
      name: "Fitness Tracker",
      offerPrice: 49.99,
      originalPrice: 59.99,
      description: "Affordable fitness tracker with step counter and sleep monitor.",
      category: "Electronics",
      inStock: true,
      imageUrl: "https://th.bing.com/th?id=OPAC.Lpc9T2o3y55oCg474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1"
    },
    
    // Clothing Products (10 items)
    {
      id: 11,
      name: "Leather Jacket",
      offerPrice: 249.99,
      originalPrice: 299.99, // original price higher
      description: "Genuine leather jacket with a modern fit and premium feel.",
      category: "Clothing",
      inStock: true,
      imageUrl: "https://th.bing.com/th?id=OPAC.b%2fHCuy623ur4ag474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1"
    },
    {
      id: 12,
      name: "Running Shoes",
      offerPrice: 119.99,
      originalPrice: 149.99,
      description: "Lightweight running shoes with excellent grip and comfort.",
      category: "Clothing",
      inStock: false,
      imageUrl: "https://th.bing.com/th?id=OPAC.JjrAW2vfZMsU3w474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1"
    },
    {
      id: 13,
      name: "Winter Coat",
      offerPrice: 299.99,
      originalPrice: 349.99,
      description: "Warm and stylish winter coat with water-resistant exterior.",
      category: "Clothing",
      inStock: true,
      imageUrl: "https://th.bing.com/th?id=OPAC.w1lDNekONl3pYw474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1"
    },
    {
      id: 14,
      name: "Denim Jeans",
      offerPrice: 79.99,
      originalPrice: 99.99,
      description: "Classic straight-fit denim jeans made from high-quality materials.",
      category: "Clothing",
      inStock: true,
      imageUrl: "https://th.bing.com/th?id=OPAC.uwQexHhx7%2f4cvQ474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1"
    },
    {
      id: 15,
      name: "Cotton T-Shirt",
      offerPrice: 19.99,
      originalPrice: 29.99,
      description: "Comfortable cotton t-shirt available in various colors.",
      category: "Clothing",
      inStock: true,
      imageUrl: "https://th.bing.com/th?id=OPAC.b4xKLvpMWSoGcA474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1"
    },
    {
      id: 16,
      name: "Sports Hoodie",
      offerPrice: 59.99,
      originalPrice: 79.99,
      description: "Stylish hoodie with a soft interior and kangaroo pocket.",
      category: "Clothing",
      inStock: true,
      imageUrl: "https://th.bing.com/th?id=OPAC.ZmmNZ8Lkx2GxSA474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1"
    },
    {
      id: 17,
      name: "Casual Sneakers",
      offerPrice: 89.99,
      originalPrice: 109.99,
      description: "Trendy sneakers for casual wear, with cushioned soles for comfort.",
      category: "Clothing",
      inStock: true,
      imageUrl: "https://th.bing.com/th?id=OPAC.sUjE1W5kuuMzEg474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1"
    },
    {
      id: 18,
      name: "Formal Suit",
      offerPrice: 499.99,
      originalPrice: 599.99,
      description: "Tailored formal suit for business or special occasions.",
      category: "Clothing",
      inStock: false,
      imageUrl: "https://th.bing.com/th?id=OPAC.D53rjLawynEwlA474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1"
    },
    {
      id: 19,
      name: "Yoga Pants",
      offerPrice: 39.99,
      originalPrice: 49.99,
      description: "Stretchy yoga pants with moisture-wicking fabric.",
      category: "Clothing",
      inStock: true,
      imageUrl: "https://th.bing.com/th?id=OPAC.WKdEY8OobBoi7Q474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1"
    },
    {
      id: 20,
      name: "Wool Sweater",
      offerPrice: 89.99,
      originalPrice: 119.99,
      description: "Soft wool sweater perfect for layering during colder months.",
      category: "Clothing",
      inStock: true,
      imageUrl: "https://th.bing.com/th?id=OPAC.9xgALJF%2bJhaTYA474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1"
    },
    
    
    // Accessories Products (10 items)
    {
      id: 21,
      name: "Sunglasses",
      offerPrice: 79.99,
      originalPrice: 99.99, // original price slightly higher to reflect discount
      description: "Polarized sunglasses with UV protection and stylish design.",
      category: "Accessories",
      inStock: true,
      imageUrl: "https://image.shutterstock.com/z/stock-photo-fashion-women-stylish-accessories-outfit-glamour-set-with-label-flat-lay-beige-pastel-background-1532053424.jpg"
    },
    {
      id: 22,
      name: "Leather Wallet",
      offerPrice: 49.99,
      originalPrice: 69.99,
      description: "Genuine leather wallet with RFID-blocking technology.",
      category: "Accessories",
      inStock: true,
      imageUrl: "https://joojoobs.com/wp-content/uploads/2015/07/Mens-Leather-Wallet-with-Coin-Pocket-003-02.jpg"
    },
    {
      id: 23,
      name: "Smartwatch Band",
      offerPrice: 19.99,
      originalPrice: 29.99,
      description: "Replacement band for smartwatch, made from durable silicone.",
      category: "Accessories",
      inStock: true,
      imageUrl: "https://m.media-amazon.com/images/I/61T2cdvVqML._AC_UL1500_.jpg"
    },
    {
      id: 24,
      name: "Backpack",
      offerPrice: 89.99,
      originalPrice: 119.99,
      description: "Waterproof backpack with multiple compartments and laptop sleeve.",
      category: "Accessories",
      inStock: true,
      imageUrl: "https://i5.walmartimages.com/asr/ff2fce37-b804-47ca-9abc-03a5513bb1c0_1.37777d82b7a52a3dade4e15964551e1e.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff"
    },
    {
      id: 25,
      name: "Beanie Hat",
      offerPrice: 24.99,
      originalPrice: 34.99,
      description: "Warm beanie hat made from soft wool with a snug fit.",
      category: "Accessories",
      inStock: true,
      imageUrl: "https://az2.hatstoremedia.com/hatstore/images/888259822754_1/0/0/0/fisherman-orange-beanie-neff.jpg"
    },
    {
      id: 26,
      name: "Leather Belt",
      offerPrice: 39.99,
      originalPrice: 49.99,
      description: "Stylish leather belt with a metal buckle.",
      category: "Accessories",
      inStock: true,
      imageUrl: "https://cdn.shopify.com/s/files/1/0883/0264/products/FinalOccidentalLeather2_LeatherWorkBelt5002_9139a2f6-9c2e-43e1-baf5-d7c2292f8792.jpg?v=1592006854"
    },
    {
      id: 27,
      name: "Phone Case",
      offerPrice: 29.99,
      originalPrice: 39.99,
      description: "Shockproof phone case with a sleek design.",
      category: "Accessories",
      inStock: true,
      imageUrl: "https://images.pexels.com/photos/374140/pexels-photo-374140.jpeg?cs=srgb&dl=assorted-color-smartphone-cases-374140.jpg&fm=jpg"
    },
    {
      id: 28,
      name: "Watch",
      offerPrice: 149.99,
      originalPrice: 199.99,
      description: "Luxury analog watch with a leather strap.",
      category: "Accessories",
      inStock: true,
      imageUrl: "https://wallpapercave.com/wp/wp1853721.jpg"
    },
    {
      id: 29,
      name: "Scarf",
      offerPrice: 34.99,
      originalPrice: 49.99,
      description: "Soft wool scarf, perfect for cold weather.",
      category: "Accessories",
      inStock: true,
      imageUrl: "https://static.vecteezy.com/system/resources/previews/027/119/599/original/hand-drawn-christmas-scarf-in-flat-style-png.png"
    },
    {
      id: 30,
      name: "Earrings",
      offerPrice: 59.99,
      originalPrice: 79.99,
      description: "Elegant earrings with a classic design.",
      category: "Accessories",
      inStock: true,
      imageUrl: "https://www.claires.com/dw/image/v2/BBTK_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe4ece6c6/images/hi-res/59304_1.jpg?sw=2000&sh=2000&sm=fit"
    },
    {
      id: 20,
      name: "Wool Sweater",
      offerPrice: 89.99,
      originalPrice: 119.99,
      description: "Soft wool sweater perfect for layering during colder months.",
      category: "Clothing",
      inStock: true,
      imageUrl: "https://cdna.lystit.com/photos/2013/11/13/jcrew-hthr-pumpkin-wallace-barnes-shetland-wool-sutherland-sweater-product-1-14858046-342529473.jpeg"
    },
    {
      id: 10,
      name: "Fitness Tracker",
      offerPrice: 49.99,
      originalPrice: 100.00,
      description: "Affordable fitness tracker with step counter and sleep monitor.",
      category: "Electronics",
      inStock: true,
      imageUrl: "https://th.bing.com/th/id/OIP.OLCEBW54cIE0D2vX6usOwwHaEK?w=1200&h=675&rs=1&pid=ImgDetMain"
    }
    
    
];
export default products;
  