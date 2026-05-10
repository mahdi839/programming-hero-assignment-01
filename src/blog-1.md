<!-- Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing. -->

# why is any labeled a type safety hole?
-> any is not specifying  any type. when we set any for any variable then we can set anything like number or string or whatever. this is problem. that's why this is type safety hole.

function print(value: unknown) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}

## why is unknown the safer choice for handling unpredictable data?
-> unkown is safer because it  protects to give wrong type and we will have to make type narrowing with condition.

function print(value: unknown) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}

# Explain the concept of type narrowing
-> type narrowing is maing narrow type when we set typescript type unkown with condition. for example:

function print(value: unknown) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}