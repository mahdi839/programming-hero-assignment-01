// problem 01
function filterEvenNumbers (numbers:number[]):number[]{
    return numbers.filter((number)=>number %2===0)
}

console.log(filterEvenNumbers([2,4,7,9]))

// problem 02

function reverseString (revStr:string):string{
    return revStr.split("").reverse().join("");
}

console.log(reverseString('tpircsepyt'))

// problem 03
type StringOrNumber = string | number;

function checkType (value:StringOrNumber):string{
    if(typeof value==='string'){
        return 'String';
    }else{
        return 'Number';
    }
}

console.log(checkType('hello'))

// problem 04
 
function getProperty<t,k extends keyof t> (obj:t,key:k):t[k]{
  return obj[key];
}

const user = {
  id: 1,
  name: "John Doe",
  age: 21,
};

const result = getProperty(user, "name");

console.log(result);


