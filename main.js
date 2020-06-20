let allRead = true;

let notifications = [
    { message: 'Lorem', read: true },
    { message: 'Ipsum', read: true },
    { message: 'Dolor', read: true },
    { message: 'Sit', read: true },
    { message: 'Amet', read: true }
];

const check = notifications.every(test => test.read == true)
console.log(check)