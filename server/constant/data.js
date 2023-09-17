const products = [
  // {
  //     "id": "product1",
  //     "url": "https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70",
  //     "detailUrl": "https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70",
  //     "title": {
  //         "shortTitle": "Home & Kitchen",
  //         "longTitle": "Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)"
  //     },
  //     "price": {
  //         "mrp": 1195,
  //         "cost": 625,
  //         "discount": "47%"
  //     },
  //     "quantity": 1,
  //     "description": "This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.",
  //     "discount": "Extra 10% Off",
  //     "tagline": "Deal of the day" ,

  // },
  // {
  //     "id": 'product2',
  //     "url": 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70',
  //     "detailUrl": 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70',
  //     "title": {
  //         "shortTitle": 'Sandwich Makers',
  //         "longTitle": 'Flipkart SmartBuy Sandwich 01 Grill  (Black)'
  //     },
  //     "price": {
  //         "mrp": 1499,
  //         "cost": 899,
  //         "discount": '40%'
  //     },
  //     "quantity": 1,
  //     "description": 'This non-stick sandwich toaster .easy to use and very handy. Directly hold over flame to make tasty toasts and toasted sandwiches. Specially designed by keeping your needs in mind, the sandwich maker makes whatever youre doing simpler, smarter and better',
  //     "discount": 'From 99+5% Off',
  //     "tagline": 'Pestige, Nova & more'
  // },
  // {
  //     "id": 'product3',
  //     "url": 'https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70',
  //     "detailUrl": 'https://rukminim1.flixcart.com/image/416/416/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70',
  //     "title": {
  //         "shortTitle": 'Fitness Gear',
  //         "longTitle": 'AJRO DEAL New Adjustable Single Resistance Tube (Multicolor) Resistance Tube  (Multicolor)'
  //     },
  //     "price": {
  //         "mrp": 499,
  //         "cost": 166,
  //         "discount": '66%'
  //     },
  //     "quantity": 1,
  //     "description": 'This unique product can tone your back muscles, reduce belly fat, improve blood circulation and also improves your body posture. It increases the stamina, energy and vitality of the body. The elastic resistance of the rubber training rope can be used to train and exercise in whichever way you want, according to your physical needs.',
  //     "discount": 'Upto 70% Off',
  //     "tagline": 'Deal of the Day'
  // },
  // {
  //     "id": 'product4',
  //     "url": 'https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70',
  //     "detailUrl": 'https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70',
  //     "title": {
  //         "shortTitle": 'Smart Watches',
  //         "longTitle": 'Molife Sense 500 Smartwatch  (Black Strap, Freesize)',
  //     },
  //     "price": {
  //         "mrp": 6999,
  //         "cost": 4049,
  //         "discount": '42%'
  //     },
  //     "quantity": 1,
  //     "description": 'The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity, you wont have to keep waiting. Bring a change to your outfit every day with changeable straps. A splash of color every day keeps the boredom away.',
  //     "discount": 'Grab Now',
  //     "tagline": 'Best Seller'
  // },
  // {
  //     "id": 'product5',
  //     "url": 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70',
  //     "detailUrl": 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70',
  //     "title": {
  //         shortTitle: 'Trimmers, Dryers & more',
  //         longTitle: 'Nova Professional NHP 8220 Hair Dryer  (1800 W, Multicolor)'
  //     },
  //     price: {
  //         mrp: 1899,
  //         cost: 1124,
  //         discount: '40%'
  //     },
  //     quantity: 1,
  //     description: '',
  //     discount: 'From ₹499',
  //     tagline: 'Kubra, Nova & more'
  // },
  // {
  //     id: 'product6',
  //     url: 'https://rukminim1.flixcart.com/image/150/150/kk01pjk0/fan/d/d/l/tiktik-quiet-portable-table-fan-zigma-original-imafzg7ftzuckpad.jpeg?q=70',
  //     detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kk01pjk0/fan/d/d/l/tiktik-quiet-portable-table-fan-zigma-original-imafzg7ftzuckpad.jpeg?q=70',
  //     title: {
  //         shortTitle: 'Table Fans',
  //         longTitle: 'Portable 300 mm Ultra High Speed 3 Blade Table Fan  (Black, Pack of 1)'
  //     },
  //     price: {
  //         mrp: 2250,
  //         cost: 1199,
  //         discount: '46%'
  //     },
  //     quantity: 1,
  //     description: 'Table Fan. Perfect size fan for use on a table, desk or in an RV. Whisper quiet, powerful airflow and reliable operation in a compact 6" size. Two adjustable speeds to customize airflow: high or low settings. Tough break-resistant ABS plastic blades. ',
  //     discount: 'Minimum 40% Off',
  //     tagline: 'Top Selling'
  // },
  // {
  //     id: 'product7',
  //     url: 'https://rukminim1.flixcart.com/image/150/150/kcgk1ow0/headphone/n/u/a/235v2-fast-charging-boat-original-imaftk6us4af7bca.jpeg?q=70',
  //     detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kcgk1ow0/headphone/n/u/a/235v2-fast-charging-boat-original-imaftk6us4af7bca.jpeg?q=70',
  //     title: {
  //         shortTitle: 'Headphones',
  //         longTitle: 'boAt Rockerz 235v2 with ASAP charging Version 5.0 Bluetooth Headset '
  //     },
  //     "price": {
  //         mrp: 2990,
  //         cost: 1199,
  //         discount: '59%'
  //     },
  //     "quantity": 1,
  //     "description": 'Let music brighten up your mood anytime, anywhere with the boAt 235v2 Fast Charging Bluetooth Headset. This Bluetooth headset features a Call Vibration Alert, a Fast Charging Technology, and Easy Access Controls to listen to and manage your favorite music with ease.',
  //     "discount": 'Minimum 50% Off',
  //     "tagline": 'Grab Now!'
  // }
  {
    id: "product21",
    url: "https://rukminim2.flixcart.com/image/416/416/xif0q/sandwich-maker/1/n/n/grilli-ktg02kgpr0-dbm-kenstar-original-imagh3w7yjhcmtfq.jpeg?q=70",
    detailUrl: "https://rukminim2.flixcart.com/image/416/416/xif0q/sandwich-maker/1/n/n/grilli-ktg02kgpr0-dbm-kenstar-original-imagh3w7yjhcmtfq.jpeg?q=70",
    title: {
      shortTitle: "Sandwich Maker",
      longTitle: "Smart Kitchen Deluxe Sandwich Maker",
    },
    price: {
      mrp: 1999,
      cost: 1499,
      discount: "25%",
    },
    quantity: 5,
    description:
      "Make delicious, crispy sandwiches in minutes with our Smart Kitchen Deluxe Sandwich Maker. Easy to use and perfect for breakfast or snacks.",
    discount: "From 99+10% Off",
    tagline: "Top Brands on Sale",
  },

  {
    id: "product22",
    url: "https://rukminim2.flixcart.com/image/416/416/xif0q/mixer-grinder-juicer/f/h/t/2100-blendlife-original-imagm5rgtqcj4bcp.jpeg?q=70",
    detailUrl: "https://rukminim2.flixcart.com/image/416/416/xif0q/mixer-grinder-juicer/f/h/t/2100-blendlife-original-imagm5rgtqcj4bcp.jpeg?q=70",
    title: {
      shortTitle: "Blender",
      longTitle: "ProBlend Multi-Speed Blender",
    },
    price: {
      mrp: 2499,
      cost: 1899,
      discount: "24%",
    },
    quantity: 3,
    description:
      "The ProBlend Multi-Speed Blender is your kitchen essential for smoothies, shakes, and more. Effortlessly blend fruits and vegetables for a healthy lifestyle.",
    discount: "From 99+15% Off",
    tagline: "Limited Time Offer",
  },
  {
    id: "product23",
    url: "https://rukminim2.flixcart.com/image/832/832/xif0q/mixer-blender-blade/k/y/g/2-multifunction-smash-machine-spice-grinder-henit-original-imagfeqnqexu8wdy.jpeg?q=70",
    detailUrl: "https://rukminim2.flixcart.com/image/832/832/xif0q/mixer-blender-blade/k/y/g/2-multifunction-smash-machine-spice-grinder-henit-original-imagfeqnqexu8wdy.jpeg?q=70",
    title: {
      shortTitle: "Coffee Maker",
      longTitle: "CaféMaster Premium Coffee Maker",
    },
    price: {
      mrp: 2899,
      cost: 2199,
      discount: "24%",
    },
    quantity: 2,
    description:
      "Experience the joy of freshly brewed coffee every morning with our CaféMaster Premium Coffee Maker. Start your day with a perfect cup of coffee.",
    discount: "From 99+8% Off",
    tagline: "Coffee Lovers' Paradise",
  },
  {
    id: "product24",
    url: "https://rukminim2.flixcart.com/image/832/832/xif0q/vacuum-cleaner/c/f/d/-original-imagrzw2vtndpe2g.jpeg?q=70",
    detailUrl: "https://rukminim2.flixcart.com/image/832/832/xif0q/vacuum-cleaner/c/f/d/-original-imagrzw2vtndpe2g.jpeg?q=70",
    title: {
      shortTitle: "Vacuum Cleaner",
      longTitle: "EcoClean Pro Vacuum Cleaner",
    },
    price: {
      mrp: 1999,
      cost: 1499,
      discount: "25%",
    },
    quantity: 4,
    description:
      "Keep your home spotlessly clean with the EcoClean Pro Vacuum Cleaner. Powerful suction and easy maneuverability make cleaning a breeze.",
    discount: "From 99+12% Off",
    tagline: "Cleanliness Redefined",
  },
  {
    id: "product25",
    url: "https://rukminim2.flixcart.com/image/416/416/k6b2snk0/sandwich-maker/p/j/k/flipkart-smartbuy-smns750b1-smns750b1-original-imafzsnu9kcgspqs.jpeg?q=70",
    detailUrl: "https://rukminim2.flixcart.com/image/416/416/k6b2snk0/sandwich-maker/p/j/k/flipkart-smartbuy-smns750b1-smns750b1-original-imafzsnu9kcgspqs.jpeg?q=70",
    title: {
      shortTitle: "Toaster",
      longTitle: "ToastyBake 4-Slice Toaster",
    },
    price: {
      mrp: 1799,
      cost: 1299,
      discount: "28%",
    },
    quantity: 6,
    description:
      "Prepare crispy and delicious toasts with our ToastyBake 4-Slice Toaster. The perfect addition to your breakfast routine.",
    discount: "From 99+6% Off",
    tagline: "Morning Delights",
  },
  {
    id: "product26",
    url: "https://rukminim2.flixcart.com/image/416/416/xif0q/hand-blender/q/d/2/-original-imagrhdhqbfaqvqv.jpeg?q=70",
    detailUrl: "https://rukminim2.flixcart.com/image/416/416/xif0q/hand-blender/q/d/2/-original-imagrhdhqbfaqvqv.jpeg?q=70",
    title: {
      shortTitle: "Rice Cooker",
      longTitle: "QuickCook Digital Rice Cooker",
    },
    price: {
      mrp: 1599,
      cost: 1199,
      discount: "25%",
    },
    quantity: 8,
    description:
      "Cook fluffy and perfectly steamed rice with the QuickCook Digital Rice Cooker. Say goodbye to overcooked or undercooked rice!",
    discount: "From 99+10% Off",
    tagline: "Chef's Choice",
  },
  {
    id: "product27",
    url: "https://rukminim2.flixcart.com/image/416/416/xif0q/microwave-new/u/u/c/-original-imagqkfyjr5pazah.jpeg?q=70",
    detailUrl: "https://rukminim2.flixcart.com/image/416/416/xif0q/microwave-new/u/u/c/-original-imagqkfyjr5pazah.jpeg?q=70",
    title: {
      shortTitle: "Microwave Oven",
      longTitle: "MasterChef Convection Microwave Oven",
    },
    price: {
      mrp: 3499,
      cost: 2799,
      discount: "20%",
    },
    quantity: 3,
    description:
      "Experience the convenience of cooking with our MasterChef Convection Microwave Oven. Bake, grill, and reheat your favorite dishes effortlessly.",
    discount: "From 99+15% Off",
    tagline: "Culinary Masterpiece",
  },
  {
    id: "product28",
    url: "https://rukminim2.flixcart.com/image/416/416/xif0q/air-purifier/c/q/g/32-air-purifier-airokleen-ap-01-for-home-and-office-with-touch-original-imagsx2qyzx5uc9q.jpeg?q=70",
    detailUrl: "https://rukminim2.flixcart.com/image/416/416/xif0q/air-purifier/c/q/g/32-air-purifier-airokleen-ap-01-for-home-and-office-with-touch-original-imagsx2qyzx5uc9q.jpeg?q=70",
    title: {
      shortTitle: "Air Purifier",
      longTitle: "PureAir HEPA Air Purifier",
    },
    price: {
      mrp: 2999,
      cost: 2299,
      discount: "23%",
    },
    quantity: 2,
    description:
      "Breathe clean and fresh air with the PureAir HEPA Air Purifier. Remove allergens and pollutants for a healthier home environment.",
    discount: "From 99+8% Off",
    tagline: "Healthier Living",
  },
  {
    id: "product29",
    url: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/e/a/g/-original-imags37h4prxjazz.jpeg?q=70",
    detailUrl: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/e/a/g/-original-imags37h4prxjazz.jpeg?q=70",
    title: {
      shortTitle: "Smartphone",
      longTitle: "TechGuru X1 Smartphone",
    },
    price: {
      mrp: 6999,
      cost: 5999,
      discount: "14%",
    },
    quantity: 7,
    description:
      "Stay connected and productive with the TechGuru X1 Smartphone. Packed with features for a seamless mobile experience.",
    discount: "From 99+10% Off",
    tagline: "Tech Enthusiasts' Choice",
  },
  {
    id: "product30",
    url: "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/n/c/m/vector-gp78hx-13vi-409in-gaming-laptop-msi-original-imagrwhvrhv3fguf.jpeg?q=70",
    detailUrl: "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/n/c/m/vector-gp78hx-13vi-409in-gaming-laptop-msi-original-imagrwhvrhv3fguf.jpeg?q=70",
    title: {
      shortTitle: "Laptop",
      longTitle: "PowerBook Pro 15-inch Laptop",
    },
    price: {
      mrp: 8999,
      cost: 7499,
      discount: "17%",
    },
    quantity: 4,
    description:
      "Boost your productivity with the PowerBook Pro 15-inch Laptop. Powerful performance and sleek design for work and entertainment.",
    discount: "From 99+12% Off",
    tagline: "Tech Innovation",
  },
  {
    id: "product11",
    url: "https://rukminim2.flixcart.com/image/416/416/kxp0mfk0/pressure-cooker/s/c/a/-original-imaga38japsezg4z.jpeg?q=70",
    detailUrl: "https://rukminim2.flixcart.com/image/416/416/kxp0mfk0/pressure-cooker/s/c/a/-original-imaga38japsezg4z.jpeg?q=70",
    title: {
      shortTitle: "Pressure Cooker",
      longTitle: "SuperCook Stainless Steel Pressure Cooker",
    },
    price: {
      mrp: 1799,
      cost: 1399,
      discount: "22%",
    },
    quantity: 6,
    description:
      "Cook meals quickly and efficiently with the SuperCook Stainless Steel Pressure Cooker. Ideal for busy households and delicious recipes.",
    discount: "From 99+8% Off",
    tagline: "Kitchen Essential",
  },
  {
    id: "product12",
    url: "https://rukminim2.flixcart.com/image/416/416/krntoy80/television/q/c/h/40ael1-adsun-original-imag5ed6ucshgjgt.jpeg?q=70",
    detailUrl: "https://rukminim2.flixcart.com/image/416/416/krntoy80/television/q/c/h/40ael1-adsun-original-imag5ed6ucshgjgt.jpeg?q=70",
    title: {
      shortTitle: "Smart TV",
      longTitle: "UltraVision 55-inch 4K Smart TV",
    },
    price: {
      mrp: 4999,
      cost: 3899,
      discount: "22%",
    },
    quantity: 3,
    description:
      "Experience stunning visuals and smart features with the UltraVision 55-inch 4K Smart TV. Your gateway to entertainment and beyond.",
    discount: "From 99+15% Off",
    tagline: "Home Entertainment",
  },
  {
    id: "product13",
    url: "https://rukminim2.flixcart.com/image/128/128/xif0q/coffee-maker/y/p/y/2-cups-coffee-maker-electric-coffee-grinder-grain-mill-portable-original-imagkn8mzbeuuj7w.jpeg?q=70",
    detailUrl: "https://rukminim2.flixcart.com/image/128/128/xif0q/coffee-maker/y/p/y/2-cups-coffee-maker-electric-coffee-grinder-grain-mill-portable-original-imagkn8mzbeuuj7w.jpeg?q=70",
    title: {
      shortTitle: "Coffee Grinder",
      longTitle: "BeanMaster Electric Coffee Grinder",
    },
    price: {
      mrp: 1199,
      cost: 899,
      discount: "25%",
    },
    quantity: 4,
    description:
      "Enjoy freshly ground coffee beans for a perfect cup of coffee with the BeanMaster Electric Coffee Grinder. Grind to your preference.",
    discount: "From 99+12% Off",
    tagline: "Coffee Connoisseurs' Choice",
  },
  {
    id: "product14",
    url: "https://rukminim2.flixcart.com/image/416/416/ktn9pjk0/hair-dryer/1/u/x/silky-shine-hot-and-cold-foldable-nhp-8105-nova-original-imag6y7wpdbwjecy.jpeg?q=70",
    detailUrl: "https://rukminim2.flixcart.com/image/416/416/ktn9pjk0/hair-dryer/1/u/x/silky-shine-hot-and-cold-foldable-nhp-8105-nova-original-imag6y7wpdbwjecy.jpeg?q=70",
    title: {
      shortTitle: "Hair Dryer",
      longTitle: "GlamStyle Ionic Hair Dryer",
    },
    price: {
      mrp: 999,
      cost: 799,
      discount: "20%",
    },
    quantity: 5,
    description:
      "Achieve salon-style hair with the GlamStyle Ionic Hair Dryer. Fast drying and frizz reduction for a stunning hairdo.",
    discount: "From 99+10% Off",
    tagline: "Hair Care Essentials",
  },
  {
    id: "product15",
    url: "https://rukminim2.flixcart.com/image/128/128/l34ry4w0/smart-band-tag/5/v/u/tft-lcd-no-free-5-yes-yes-waterproof-calorie-counter-blood-original-imagebwhzpxgvj78.jpeg?q=70",
    detailUrl: "https://rukminim2.flixcart.com/image/128/128/l34ry4w0/smart-band-tag/5/v/u/tft-lcd-no-free-5-yes-yes-waterproof-calorie-counter-blood-original-imagebwhzpxgvj78.jpeg?q=70",
    title: {
      shortTitle: "Fitness Tracker",
      longTitle: "FitPulse Smart Fitness Tracker",
    },
    price: {
      mrp: 1999,
      cost: 1499,
      discount: "25%",
    },
    quantity: 7,
    description:
      "Monitor your health and workouts with the FitPulse Smart Fitness Tracker. Track steps, heart rate, and more for a fitter you.",
    discount: "From 99+10% Off",
    tagline: "Fitness Companion",
  },
  {
    id: "product16",
    url: "https://rukminim2.flixcart.com/image/416/416/camera/b/y/f/sony-dsc-rx100m3-original-imadxm5yfrhcbeaz.jpeg?q=70",
    detailUrl: "https://rukminim2.flixcart.com/image/416/416/camera/b/y/f/sony-dsc-rx100m3-original-imadxm5yfrhcbeaz.jpeg?q=70",
    title: {
      shortTitle: "Digital Camera",
      longTitle: "SnapPro 20MP Digital Camera",
    },
    price: {
      mrp: 2799,
      cost: 2299,
      discount: "18%",
    },
    quantity: 3,
    description:
      "Capture memories in stunning detail with the SnapPro 20MP Digital Camera. Perfect for photography enthusiasts and travelers.",
    discount: "From 99+8% Off",
    tagline: "Photography Delight",
  },
  {
    id: "product17",
    url: "https://rukminim2.flixcart.com/image/416/416/l3rmzrk0/computer/l/7/m/-original-imagetj2awbvdju6.jpeg?q=70",
    detailUrl: "https://rukminim2.flixcart.com/image/416/416/l3rmzrk0/computer/l/7/m/-original-imagetj2awbvdju6.jpeg?q=70",
    title: {
      shortTitle: "Gaming Laptop",
      longTitle: "GamerX Pro Gaming Laptop",
    },
    price: {
      mrp: 6999,
      cost: 5499,
      discount: "21%",
    },
    quantity: 2,
    description:
      "Elevate your gaming experience with the GamerX Pro Gaming Laptop. High-performance hardware for immersive gameplay.",
    discount: "From 99+12% Off",
    tagline: "Gaming Excellence",
  },
  {
    id: "product18",
    url: "https://rukminim2.flixcart.com/image/416/416/kmjhw280/cookware-set/1/d/r/non-stick-aluminium-mini-cookware-set-tawa-fry-pan-kadhai-red-original-imagfezg4umze78f.jpeg?q=70",
    detailUrl: "https://rukminim2.flixcart.com/image/416/416/kmjhw280/cookware-set/1/d/r/non-stick-aluminium-mini-cookware-set-tawa-fry-pan-kadhai-red-original-imagfezg4umze78f.jpeg?q=70",
    title: {
      shortTitle: "Cookware Set",
      longTitle: "Chef's Choice 12-Piece Cookware Set",
    },
    price: {
      mrp: 3599,
      cost: 2599,
      discount: "28%",
    },
    quantity: 4,
    description:
      "Upgrade your kitchen with the Chef's Choice 12-Piece Cookware Set. Premium quality for culinary enthusiasts and chefs.",
    discount: "From 99+6% Off",
    tagline: "Culinary Masterclass",
  },
  {
    id: "product19",
    url: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/j/2/e/-original-imagpxhyanjcqvrg.jpeg?q=70",
    detailUrl: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/j/2/e/-original-imagpxhyanjcqvrg.jpeg?q=70",
    title: {
      shortTitle: "Wireless Earbuds",
      longTitle: "SoundBeat Pro Wireless Earbuds",
    },
    price: {
      mrp: 1499,
      cost: 1099,
      discount: "27%",
    },
    quantity: 6,
    description:
      "Experience premium audio with the SoundBeat Pro Wireless Earbuds. Crystal clear sound for music and calls on the go.",
    discount: "From 99+9% Off",
    tagline: "Audio Excellence",
  },
  {
    id: "product20",
    url: "https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/b/w/0/-original-imagqz563ujdkgcd.jpeg?q=70",
    detailUrl: "https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/b/w/0/-original-imagqz563ujdkgcd.jpeg?q=70",
    title: {
      shortTitle: "Smart Watch",
      longTitle: "TimeSync Pro Smart Watch",
    },
    price: {
      mrp: 1999,
      cost: 1599,
      discount: "20%",
    },
    quantity: 5,
    description:
      "Stay connected and fit with the TimeSync Pro Smart Watch. Track your fitness goals and receive notifications in style.",
    discount: "From 99+11% Off",
    tagline: "Tech on Your Wrist",
  },
];

module.exports = products;
