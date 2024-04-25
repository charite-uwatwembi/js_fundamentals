const validate = (str) =>{
    if(str.length === 10 || str[3] === '-' || str[7] === '-' || str[3] === " " || str[7] === ""){
        return true;
    }
    else{
        return false;
    }

}
console.log(validate('1234567890'));
console.log(validate('123456789'));
console.log(validate('123 456 7890'));

console.log(validate('123-456-7890'));
console.log(validate('12345x67890'));


