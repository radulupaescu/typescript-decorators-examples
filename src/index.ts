import { Person } from "./person";

const someGal = new Person();
const someChild = new Person();
const someGuy = new Person();

try {
    someGal.setName('Andra');
    someGal.setAge(34);
    someChild.setAge(5);
    someChild.setName('Filip');
    someGuy.setAge(35);
    someGuy.setName('Radu');
} catch (e) {
    console.error(e);
}

console.log('Gal age: ', someGal.getAge());
console.log('Child age:', someChild.getAge());
console.log('Child name:', someChild.getName());
