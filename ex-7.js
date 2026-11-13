let orders = [
  {
    id: 1,
    customerName: "Brenn Hugk",
    productName: "Chocolate - Milk, Callets",
    productPrice: 94690,
    productQuantity: 35,
    creditCardType: "solo",
  },
  {
    id: 2,
    customerName: "Celia Dary",
    productName: "Bread - Pumpernickle, Rounds",
    productPrice: 10746,
    productQuantity: 87,
    creditCardType: "jcb",
  },
  {
    id: 3,
    customerName: "Toinette Blindermann",
    productName: "Bar - Granola Trail Mix Fruit Nut",
    productPrice: 94191,
    productQuantity: 31,
    creditCardType: "switch",
  },
  {
    id: 4,
    customerName: "Anjela Joannet",
    productName: "Cheese - Parmesan Cubes",
    productPrice: 5131,
    productQuantity: 96,
    creditCardType: "diners-club-carte-blanche",
  },
  {
    id: 5,
    customerName: "Kennith Bussons",
    productName: "Wine - White, Pinot Grigio",
    productPrice: 94432,
    productQuantity: 75,
    creditCardType: "jcb",
  },
];

// Start coding here
let isArray;
let creditCardTypeOfBlindermann;
let productQuantityOfJoannet;
let totalPurchaseOfDary;


//กำหนดให้ Variable isArray มีค่าเท่ากับ ผลลัพธ์ที่ได้จากการตรวจสอบว่า Array orders เป็น Array จริงๆ หรือไม่
console.log(Array.isArray(orders))

//กำหนดให้ Variable creditCardTypeOfBlindermann มีค่าเท่ากับ Value ที่มาจาก Key creditCardType ของลูกค้าชื่อ Toinette Blindermann
creditCardTypeOfBlindermann = orders[2].creditCardType;

//ให้ Reassign ค่าของ Key creditCardType ของลูกค้าชื่อ Toinette Blindermann ให้เป็น “visa"
orders[2].creditCardType = "visa";

//กำหนดให้ Variable productQuantityOfJoannet มีค่าเป็น Value ที่มาจาก Key productQuantity ของลูกค้าชื่อ Anjela Joannet
productQuantityOfJoannet = orders[3].productQuantity;

//กำหนดให้ Variable totalPurchaseOfDary มีค่าเป็น Value เกิดจากการคำนวนยอดซื้อสินค้ารวมของลูกค้าชื่อ Celia Dary
totalPurchaseOfDary = orders[1].productPrice + orders[1].productQuantity;

//ให้ลบ Object ของลูกค้าชื่อ Brenn Hugk ที่อยู่ใน Array orders
delete orders.shift();

//เมื่อลบ Object เสร็จแล้วให้ทำการแสดงผลค่าของ orders ออกมาดูทางหน้าจอ
console.log(orders);
