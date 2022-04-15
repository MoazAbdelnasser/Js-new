import User from './one.js';
let profile = new User();
profile.printUserProfile();
//
console.group(`Re-set Profile`);
profile.setUserProfile("moazelmassery@gmail.com", "123", "Giza - Marg - Egypt", "Mr A");
profile.printUserProfile();
console.groupEnd();