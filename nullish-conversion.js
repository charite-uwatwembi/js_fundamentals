//you are given an object with properties that may contain null or undefined values. Your task is to implement a function called convertNullableValues that checks if any of the properties in the object contains null or undefined. If a property is null convert it to zero and if a property is undefined convert it to an empty string. Return the modified object.
const convertNullableValues=(obj)=>{
    for(let key in obj){
      if(obj[key] === null){
       obj[key] = 0;
    }else if(obj[key] === undefined){
       obj[key]= ""
    }
    }
    return obj
  }
  let obj1 = {name:null,number:undefined,age:4}
  console.log(convertNullableValues(obj1))