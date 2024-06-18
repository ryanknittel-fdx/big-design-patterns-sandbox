/**
 * Interface for defining the structure of an item in the table.
 */
export interface DummyItem {
  id: number;
  sku: string;
  name: string;
  stock: number;
  image: string;
  categories: string;
  price: string;
  url: string;
}

export const dummyProducts: DummyItem[] = [
  // Sample data for items
  {
    id: 1,
    sku: "649C853EC78E9",
    image: "unisex-tri-blend-t-shirt-athletic-grey-triblend-front-649c8533a9535__28840.jpg",
    name: "US H1 2023 Hackathon T-Shirt",
    categories: "Shirts, Shop all",
    stock: 10,
    price: "$27.00",
    url: "us-h1-2023-hackathon-t-shirt"
  },
  {
    id: 2,
    sku: "63F7E833D2F85",
    image: "unisex-tri-blend-t-shirt-charcoal-black-triblend-back-63f7e82d1ec00__11413.jpg",
    name: "Built For Growth T-Shirt",
    categories: "Shirts, Shop all",
    stock: 77,
    price: "$36.00",
    url: "built-for-growth-t-shirt"
  },
  {
    id: 3,
    sku: "63F6D66B58B96",
    image: "stainless-steel-tumbler-white-front-63f6d6648c6bb__16236.jpg",
    name: "City Pattern Tumbler",
    categories: "Shop all, New, Accessories",
    stock: 6,
    price: "$23.00",
    url: "city-pattern-tumbler"
  },
  {
    id: 4,
    sku: "63F6D301C5F1C",
    image: "stainless-steel-tumbler-black-front-63f6d2fb75b9e__30788.jpg",
    name: "Logo Tumbler",
    categories: "Shop all, New, Accessories",
    stock: 3,
    price: "$21.00",
    url: "logo-tumbler"
  },
  {
    id: 5,
    sku: "63F6D0B2ADA7B",
    image: "stainless-steel-tumbler-white-front-63f6d0ac552b9__33511.jpg",
    name: "Patterned Tumbler",
    categories: "Shop all, New, Accessories",
    stock: 0,
    price: "$23.00",
    url: "patterned-tumbler"
  },
  {
    id: 6,
    sku: "63F6D0B2ADA7C",
    image: "tie-dye-hat-cotton-candy-front-6283b883884fa__86520.jpg",
    name: `Community Tie Dye Hat "Celebrity"`,
    categories: "Baseball caps, Shop all, Hats",
    stock: 0,
    price: "$18.00",
    url: "community-tie-dye-hat-celebrity"
  },
  {
    id: 7,
    sku: "626C6BABE588D",
    image: "unisex-tri-blend-t-shirt-white-fleck-triblend-front-626c6ba2622f1__53288.jpg",
    name: "I Love Small Businesses Unisex T-Shirt",
    categories: "Shirts, Shop All",
    stock: 21,
    price: "$29.00",
    url: "i-love-small-businesses-unisex-t-shirt"
  },
  {
    id: 8,
    sku: "626C6AB917066",
    image: "kiss-cut-stickers-3x3-default-626c6ab65721c__69931.jpg",
    name: "I Love Small Businesses 3x3 Sticker",
    categories: "Stickers, Accessories, Shop All",
    stock: 31,
    price: "$5.00",
    url: "i-love-small-businesses-3x3-sticker"
  },
  {
    id: 9,
    sku: "626C6A762DEF3",
    image: "white-glossy-mug-15oz-handle-on-left-626c6a735697e__28707.webp",
    name: "I Love Small Businesses 15 oz Mug",
    categories: "Mugs, Accessories, Shop All",
    stock: 23,
    price: "$18.00",
    url: "i-love-small-businesses-15-oz-mug"
  },
  {
    id: 10,
    sku: "621E68891BB26",
    image: "unisex-heavy-blend-hoodie-black-front-621e6e5255811__14735.jpg",
    name: "Team on a Mission Unisex Hoodie",
    categories: "Hoodies, Shop All",
    stock: 8,
    price: "$45.00",
    url: "team-on-a-mission-unisex-hoodie"
  },
  {
    id: 11,
    sku: "6026AE131EAF2_8936",
    image: "cuffed-beanie-black-front-6026ae0e8e066__42330.png",
    name: "BigCommerce Logo Beanie - Black",
    categories: "Shop all, Classics, Beanies, Hats",
    stock: 73,
    price: "$17.00",
    url: "bigcommerce-logo-beanie-black"
  },
  {
    id: 12,
    sku: "602D44201D123_8938",
    image: "cuffed-beanie-white-front-602d441b77e01__37245.png",
    name: "BigCommerce Logo Beanie - White",
    categories: "Shop all, Classics, Beanies, Hats",
    stock: 35,
    price: "$17.00",
    url: "bigcommerce-logo-beanie-white"
  },
  {
    id: 13,
    sku: "602D44B26C551_7836",
    image: "classic-snapback-heather-grey-front-602d44af54c8c__43904.png",
    name: "BigCommerce Mark Snapback",
    categories: "Shop all, Classics, Snapbacks, Hats",
    stock: 41,
    price: "$20.00",
    url: "bigcommerce-mark-snapback"
  },
  {
    id: 14,
    sku: "602D452098262_11417",
    image: "snapback-trucker-cap-black-front-602d451a27c93__15592.png",
    name: "BigCommerce Mark Trucker Hat",
    categories: "Shop all, Classics, Snapbacks, Hats",
    stock: 44,
    price: "$19.00",
    url: "bigcommerce-mark-trucker-hat"
  },
  {
    id: 15,
    sku: "602D532BB6F32_4830",
    image: "white-glossy-mug-15oz-handle-on-right-602d532899343__78407.png",
    name: "Think Big Slogan Coffee Mug",
    categories: "Clearance",
    stock: 44,
    price: "$18.00",
    url: "think-big-slogan-coffee-mug"
  },
  {
    id: 16,
    sku: "602D5377D182C_11521",
    image: "all-over-print-premium-face-mask-black-front-602d53742a927__23405.png",
    name: "I’d Rather Be Shopping Online Face Mask",
    categories: "Shop all, New, Accessories, ",
    stock: 78,
    price: "$15.00",
    url: "id-rather-be-shopping-online-face-mask"
  },
  {
    id: 17,
    sku: "602D53B667BEB_11521",
    image: "all-over-print-premium-face-mask-black-front-602d53b361cc7__57249.png",
    name: "BigCommerce Logo Face Mask",
    categories: "Shop all, New, Accessories",
    stock: 15,
    price: "$15.00",
    url: "bigcommerce-logo-face-mask"
  },
  {
    id: 18,
    sku: "602D53E82FBDF_11521",
    image: "all-over-print-premium-face-mask-black-front-602d53e3c7d8b__17316.png",
    name: "BigCommerce Mark Face Mask",
    categories: "Shop all, New, Accessories",
    stock: 72,
    price: "$15.00",
    url: "bigcommerce-mark-face-mask"
  },
  {
    id: 19,
    sku: "602D541BF2461_11521",
    image: "all-over-print-premium-face-mask-black-front-602d541869a1b__00277.png",
    name: "BigCommerce Multicolor Face Mask",
    categories: "Shop all, New, Accessories",
    stock: 10,
    price: "$15.00",
    url: "bigcommerce-multicolor-face-mask"
  },
  {
    id: 20,
    sku: "602D57CC96F31_10163",
    image: "kiss-cut-stickers-3x3-default-602d57c8e4f7b__60780.png",
    name: "BigCommerce Wapuu Sticker",
    categories: "Shop all, Classics, Accessories, Stickers",
    stock: 12,
    price: "$5.00",
    url: "bigcommerce-wapuu-sticker"
  },
  {
    id: 21,
    sku: "602D581C09EC8_10163",
    image: "kiss-cut-stickers-3x3-default-602d58198808e__30159.png",
    name: "BigDesign Labs Sticker",
    categories: "Shop all, New, Accessories, Stickers",
    stock: 27,
    price: "$5.00",
    url: "bigdesign-labs-sticker"
  },
  {
    id: 22,
    sku: "602D58717A689_10163",
    image: "kiss-cut-stickers-3x3-default-602d586c5e902__97796.png",
    name: "BigCommerce Mark Sticker",
    categories: "Shop all, Classics, Accessories, Stickers",
    stock: 26,
    price: "$5.00",
    url: "bigcommerce-mark-sticker"
  },
  {
    id: 23,
    sku: "602D589FA5FB6_10163",
    image: "kiss-cut-stickers-3x3-default-602d589dbab50__14661.png",
    name: "I’d Rather Be Shopping Online Sticker",
    categories: "Shop all, New, Accessories, Stickers",
    stock: 32,
    price: "$5.00",
    url: "id-rather-be-shopping-online-sticker"
  },
  {
    id: 24,
    sku: "602D58CE69825_10163",
    image: "kiss-cut-stickers-3x3-default-602d58cae7a33__93280.png",
    name: "BigDev Bootcamp Sticker",
    categories: "Shop all, New, Accessories, Stickers",
    stock: 74,
    price: "$5.00",
    url: "bigdev-bootcamp-sticker"
  },
  {
    id: 25,
    sku: "602D590BBEB40_10163",
    image: "kiss-cut-stickers-3x3-default-602d590784b6f__99414.png",
    name: "Think Big Sticker",
    categories: "Clearance",
    stock: 25,
    price: "$5.00",
    url: "think-big-sticker"
  },
  {
    id: 26,
    sku: "602D59366AAFE_10163",
    image: "kiss-cut-stickers-3x3-default-602d5933b52fa__11644.png",
    name: "BProud Sticker",
    categories: "Shop all, Classics, Accessories, Stickers, ERG Merch",
    stock: 44,
    price: "$5.00",
    url: "bproud-sticker"
  },
  {
    id: 27,
    sku: "602D59B1C0FDA_10163",
    image: "kiss-cut-stickers-3x3-default-602d59af57078__74255.png",
    name: "BUnited Sticker",
    categories: "Shop all, Classics, Accessories, Stickers, ERG Merch",
    stock: 9,
    price: "$5.00",
    url: "bunited-sticker"
  },
  {
    id: 28,
    sku: "602D5A18211F1_10163",
    image: "kiss-cut-stickers-3x3-default-602d5a16b9e10__12421.png",
    name: "BCinColor Sticker",
    categories: "Shop all, Classics, Accessories, Stickers, ERG Merch",
    stock: 74,
    price: "$5.00",
    url: "bcincolor-sticker"
  },
  {
    id: 29,
    sku: "602D5A92CDFD3_10163",
    image: "kiss-cut-stickers-3x3-default-602d5a8fa2d98__00114.png",
    name: "BEmpowered Sticker",
    categories: "Clearance",
    stock: 46,
    price: "$5.00",
    url: "bempowered-sticker"
  },
  {
    id: 30,
    sku: "602D5B54B630F_10163",
    image: "kiss-cut-stickers-3x3-default-602d5b52d6be7__81931.png",
    name: "EcommStrong Sticker",
    categories: "Shop all, New, Accessories, Stickers",
    stock: 58,
    price: "$5.00",
    url: "ecommstrong-sticker"
  },
  {
    id: 31,
    sku: "602D5B8FA5DF6_10163",
    image: "kiss-cut-stickers-3x3-default-602d5b8d21f86__09146.png",
    name: "Sell More Sticker",
    categories: "Shop all, Classics, Accessories, Stickers",
    stock: 61,
    price: "$5.00",
    url: "sell-more-sticker"
  },
  {
    id: 32,
    sku: "602D5C651B748_10163",
    image: "kiss-cut-stickers-3x3-default-602d5c62a9936__22409.png",
    name: "BigCommerce University Sticker",
    categories: "Shop all, Classics, Accessories, Stickers",
    stock: 24,
    price: "$5.00",
    url: "bigcommerce-university-sticker"
  },
  {
    id: 33,
    sku: "602D5CC32B173_10163",
    image: "kiss-cut-stickers-3x3-default-602d5cbf74ce5__92962.png",
    name: "Developer Mark Sticker",
    categories: "Shop all, New, Accessories, Stickers",
    stock: 64,
    price: "$5.00",
    url: "developer-mark-sticker"
  },
  {
    id: 34,
    sku: "602D5CFEC770E_10163",
    image: "kiss-cut-stickers-3x3-default-602d5cfc8bd96__05814.png",
    name: "AstroDev Sticker",
    categories: "Shop all, New, Accessories, Stickers",
    stock: 79,
    price: "$5.00",
    url: "astrodev-sticker"
  },
  {
    id: 35,
    sku: "602D5D51B8BDF_10163",
    image: "kiss-cut-stickers-3x3-default-602d5d4e081d0__83991.png",
    name: "BigCommerce Contributor Sticker",
    categories: "Shop all, Accessories, Stickers",
    stock: 8,
    price: "$5.00",
    url: "bigcommerce-contributor-sticker"
  },
  {
    id: 36,
    sku: "602D5D94285CB_10163",
    image: "kiss-cut-stickers-3x3-default-602d5d91be140__20082.png",
    name: "BigCommerce Developer Sticker",
    categories: "Shop all, New, Accessories, Stickers",
    stock: 58,
    price: "$5.00",
    url: "bigcommerce-developer-sticker"
  },
  {
    id: 37,
    sku: "602D5DC33BA7A_10163",
    image: "kiss-cut-stickers-3x3-default-602d5dc10915f__26314.png",
    name: "BigCommerce Developer Rocket Sticker",
    categories: "Shop all, New, Accessories, Stickers",
    stock: 56,
    price: "$5.00",
    url: "bigcommerce-developer-rocket-sticker"
  },
  {
    id: 38,
    sku: "603D1B596C000_7854",
    image: "classic-dad-hat-black-front-603d1b50005f7__58621.png",
    name: "Think Big Dad Hat",
    categories: "Clearance",
    stock: 47,
    price: "$23.00",
    url: "think-big-dad-hat"
  },
  {
    id: 39,
    sku: "6137DB798D6D4_8633",
    image: "unisex-premium-tank-top-black-front-6137db77c046f__38578.jpg",
    name: "Make it Big Unisex Tank Top 2XL",
    categories: "Shop all, Tops, Tanks",
    stock: 43,
    price: "$16.00",
    url: "make-it-big-unisex-tank-top-2xl"
  },
  {
    id: 40,
    sku: "61F085FE04495_12414",
    image: "tie-dye-hat-sky-front-61f085fa1cc62__55248.jpg",
    name: "BigDesign Labs Tie-Dye Hat",
    categories: "Hats, Shop all, Baseball Caps, New",
    stock: 59,
    price: "$17.00",
    url: "bigdesign-labs-tie-dye-hat"
  },
  {
    id: 41,
    sku: "61F08D7367532_12141",
    image: "spiral-notebook-white-front-61f08d707a0d5__61128.png",
    name: "BigCommerce Marketing Team Notebook",
    categories: "Clearance",
    stock: 61,
    price: "$14.00",
    url: "bigcommerce-marketing-team-notebook"
  },
  {
    id: 42,
    sku: "61F091A1DB8A5_7853",
    image: "classic-dad-hat-white-front-61f09199a7fdc__51974.png",
    name: "BigCommerce Marketing Team Dad Hat",
    categories: "Clearance",
    stock: 31,
    price: "$23.00",
    url: "bigcommerce-marketing-team-dad-hat"
  },
  {
    id: 43,
    sku: "620D63546921B_8747",
    image: "retro-trucker-hat-black-front-620d634fa2402__59455.jpg",
    name: "BigDesign Labs Trucker Cap",
    categories: "Hats, Baseball Caps, New, Shop all",
    stock: 53,
    price: "$21.00",
    url: "bigdesign-labs-trucker-cap"
  },
  {
    id: 44,
    sku: "626C6A762DEF3_4830",
    image: "white-glossy-mug-15oz-handle-on-left-626c6a735697e__28707.png",
    name: "I Love Small Businesses 15 oz Mug",
    categories: "Shop all, New, Accessories",
    stock: 41,
    price: "$18.00",
    url: "i-love-small-businesses-15-oz-mug"
  },
  {
    id: 45,
    sku: "626C6AB917066_10163",
    image: "kiss-cut-stickers-3x3-default-626c6ab65721c__69931.jpg",
    name: "I Love Small Businesses 3x3 Sticker",
    categories: "Shop all, Accessories, Stickers, New",
    stock: 77,
    price: "$5.00",
    url: "i-love-small-businesses-3x3-sticker"
  },
  {
    id: 46,
    sku: "6305CE0C713E2_12021",
    image: "all-over-print-duffle-bag-white-back-6305ce041cdd3__84093.jpg",
    name: "Duffle bag",
    categories: "Accessories",
    stock: 31,
    price: "$79.50",
    url: "duffle-bag"
  },
  {
    id: 47,
    sku: "63F6D77E4D3BC_12021",
    image: "all-over-print-duffle-bag-white-front-63f6d7764cdfa__90033.jpg",
    name: "Patterned Duffle Bag",
    categories: "New, Accessories",
    stock: 53,
    price: "$52.00",
    url: "patterned-duffle-bag"
  },
  {
    id: 48,
    sku: "63F6D9BE09948_10876",
    image: "all-over-print-minimalist-backpack-white-front-63f6d9b178d8c__45897.jpg",
    name: "Patterned Backpack - Pink",
    categories: "New, Accessories",
    stock: 14,
    price: "$34.00",
    url: "patterned-backpack-pink"
  },
  {
    id: 49,
    sku: "63F6DAB9109EF_10876",
    image: "all-over-print-minimalist-backpack-white-front-63f6daae9ec56__73932.jpg",
    name: "Patterned Backpack - Orange",
    categories: "New, Accessories",
    stock: 14,
    price: "$34.00",
    url: "patterned-backpack-orange"
  },
];
