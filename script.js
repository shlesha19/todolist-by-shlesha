let btnGenerate = document.querySelector('button');
let result = document.querySelector('h1');
 
// https://github.com/bermi/password-generator
btnGenerate.addEventListener('click', () => {
   result.innerText = generatePassword(25, false, '', 'kodebase-'); 
});