
function generatePassword(length, includeLowerCase,
  includeUpperCase, includeNumbers, includeSymbols){

    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_-+="

    let allowChars = "";
    let password = "";

    allowChars += includeLowerCase ? lowerCaseChars : "";
    allowChars += includeUpperCase ? upperCaseChars : "";
    allowChars += includeNumbers ? numberChars : "";
    allowChars += includeSymbols ? symbolChars : "";

    if(length <= 0){
      return `(Password length must be at least 1)`;
    }

    if(allowChars.length === 0){
      return `(At least 1 set of character needs to be selected)`
    }

    for(let i = 0; i < length; i++){
      const randomIndex = Math.floor(Math.random() * allowChars.length);
      password += allowChars[randomIndex];
    }

    return password;
  }

const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength,
                                  includeLowerCase,
                                  includeUpperCase,
                                  includeNumbers,
                                  includeSymbols);

console.log(`Generate password: ${password}`);