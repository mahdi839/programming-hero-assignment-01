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

// problem 05

type Book = {
  title: string;
  author: string;
  publishedYear: number;
};

function toggleReadStatus<T extends Book>(
  book: T
): T & { isRead: boolean } {
  return {
    ...book,
    isRead: true,
  };
}


const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

const updatedBook = toggleReadStatus(myBook);

console.log(updatedBook);

// problem 06




