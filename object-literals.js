//object literals

const users = {
    name: 'Rashad',
    email: 'methan941@gmail.com',
    age: 30,
    role: 'QA Tester'  
};
console.log (users);

//manipulating an element in an object

users.name = 'Kofi';
console.log(users.name); 

//OR

users ['name'] = 'Ethan';
console.log (users ['name']);
