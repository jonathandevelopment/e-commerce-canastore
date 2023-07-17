const cannabisProducts = [
  {
    name: "Blue Dream",
    type: "Hybrid",
    thcContent: 22,
    cbdContent: 2,
    aroma: "Sweet and berry-like",
    price: 25,
    id:1,
    img: "/assets/bud1.png",
  },
  {
    name: "OG Kush",
    type: "Indica",
    thcContent: 18,
    cbdContent: 0.5,
    aroma: "Earthy and citrusy",
    price: 20,
    id:2,
    img: "/assets/bud2.png",
  },
  {
    name: "Girl Scout Cookies",
    type: "Hybrid",
    thcContent: 20,
    cbdContent: 1,
    aroma: "Sweet and minty",
    price: 28,
    id:3,
    img: "/assets/bud3.png",
  },
  {
    name: "Sour Diesel",
    type: "Sativa",
    thcContent: 19,
    cbdContent: 0.3,
    aroma: "Diesel and citrus",
    price: 21,
    id:4,
    img: "/assets/bud3.png",
  },
  {
    name: "White Widow",
    type: "Hybrid",
    thcContent: 23,
    cbdContent: 0.8,
    aroma: "Earthy and piney",
    price: 25,
    id:5,
    img: "/assets/bud2.png",
  },
  {
    name: "Northern Lights",
    type: "Indica",
    thcContent: 17,
    cbdContent: 0.2,
    aroma: "Sweet and spicy",
    price: 25,
    id:6,
    img: "/assets/bud1.png",
  },
  {
    name: "Jack Herer",
    type: "Sativa",
    thcContent: 21,
    cbdContent: 0.5,
    aroma: "Earthy and piney",
    price: 25,
    id:7,
    img: "/assets/bud1.png",
  },
  {
    name: "Purple Kush",
    type: "Indica",
    thcContent: 18,
    cbdContent: 1.5,
    aroma: "Grape and earthy",
    price: 26,
    id:8,
    img: "/assets/bud2.png",
  },
  {
    name: "AK-47",
    type: "Hybrid",
    thcContent: 22,
    cbdContent: 0.7,
    aroma: "Skunky and spicy",
    price: 20,
    id:9,
    img: "/assets/bud3.png",
  },
  {
    name: "Durban Poison",
    type: "Sativa",
    thcContent: 24,
    cbdContent: 0.1,
    aroma: "Sweet and earthy",
    price: 25,
    id:10,
    img: "/assets/bud2.png",
  },
];

function getData() {
  return new Promise((resolve, reject) => {
      resolve(cannabisProducts)
  });
}

export function getProductData(idURL) {
  return new Promise((resolve, reject) => {
    const productRequested = cannabisProducts.find(
      (item) => item.id === Number(idURL)
    );
      resolve(productRequested); 
  });
}

export default getData;