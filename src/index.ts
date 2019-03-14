interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "dahye",
  age: 29,
  gender: "female"
};

const sayHi = (person: Human): string => {
  return (`Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`);
};

console.log(sayHi(person));
export {};