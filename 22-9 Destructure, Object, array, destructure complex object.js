// const student ={name: "noman",age: 20, adress: "jeshore", behaviour:"good"};
// const {name ,age} = student;
// console.log(name, age );

// // Ei destructure ta array er khettre o kora jay
// const studentAge =[23,23,53,25,08,20,38,29];
// const [first] = [23];
// console.log(first);






const fruits = {
    name: "Mango",
    color: {
        color1:'green',
        color2:'yellow'
    },
    age: "4 month",
    ripe: "yes"
}

const {color1} = fruits.color;
console.log(color1);