
const employees = [
  {
    name: "James",
    age: 40,
    hobbies: ["Football", "Social media"],
  },
  {
    name: "Alex",
    age: 25,
    hobbies: ["Cryptocurrency", "Social media"],
  },
];
// Start coding here
let alex;
let alexHobbies;
let alexAndJamesAge;

/*
ให้เขียนโค้ดตามโจทย์ต่อไปนี้
กำหนดให้ Variable alex มีค่าเท่ากับ Value ที่มาจาก Key name ของพนักงานที่ชื่อ Alex
กำหนดให้ Variable alexHobbies มีค่าเท่ากับ Value ที่มาจาก Key hobbies ของพนักงานที่ชื่อ Alex
กำหนดให้ Variable alexAndJamesAge มีค่าเท่ากับอายุของ Alex และ James รวมกัน
จากนั้นให้ console.log ค่าที่อยู่ใน Variable alex, alexHobbies และ alexAndJamesAge ออกมาทางหน้าจอแล้วสังเกตผลลัพธ์
*/

alex = employees[1].name;
alexHobbies = employees[1].hobbies;
alexAndJamesAge = employees[1].age + employees[0].age;

console.log(alex, alexHobbies, alexAndJamesAge)