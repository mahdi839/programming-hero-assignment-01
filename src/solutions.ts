// problem 01
function filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter((number) => number % 2 === 0)
}

filterEvenNumbers([2, 4, 7, 9])

// problem 02

function reverseString(revStr: string): string {
    return revStr.split("").reverse().join("");
}

reverseString('tpircsepyt')

// problem 03
type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
    if (typeof value === 'string') {
        return 'String';
    } else {
        return 'Number';
    }
}

checkType('hello')

// problem 04

function getProperty<t, k extends keyof t>(obj: t, key: k): t[k] {
    return obj[key];
}

const user = {
    id: 1,
    name: "John Doe",
    age: 21,
};

 getProperty(user, "name");


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

toggleReadStatus(myBook);



// problem 06

class Person {
    name: string;
    age: number
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
}

class Student extends Person{
   grade:string;
   constructor(name: string, age: number,grade:string){
     super(name,age);
     this.grade = grade;
   }

   getDetails ():string{
     return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
   }
}

const student = new Student("Alice", 20, "A");

student.getDetails()


// problem 07

function getIntersection (array1:number[],array2:number[]){
    return array1.filter((item)=>array2.includes(item))
}

 getIntersection(
  [1, 2, 3, 4, 5],
  [3, 4, 5, 6, 7]
);




