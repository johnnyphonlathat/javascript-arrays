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

/*
จากโค้ดใน Exercise #2 ให้เขียนโค้ดตามโจทย์ที่กำหนด
ให้เพิ่ม "Watching basketball" เข้าไปใน Value ของ Key hobbies ของพนักงานที่ชื่อ Alex
จากนั้นให้ console.log Object ลำดับที่ 2 ของ Array employees แล้วสังเกต Key hobbies ของ Object
*/
// Start coding here
employees[1].hobbies[2] = "Watching basketbal";

console.log(employees[1])