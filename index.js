import { createSignal, createEffect, createMemo } from "./signal.js";

const [count, setCount] = createSignal(0);
const [firstName, setFirstName] = createSignal("John");
const [lastName, setLastName] = createSignal("Doe");

const fullName = createMemo(() => {
  console.log("compute fullName");
  return `${firstName()} ${lastName()}`;
});

const buttonElement = document.getElementById("increment");
buttonElement.addEventListener("click", () => {
  setCount(count() + 1);
});

createEffect(() => render());

setTimeout(() => {
  console.log('setFirstName("Jane")');
  setFirstName("Jane");
}, 5000);

function render() {
  console.log("render", fullName());
  const element = document.getElementById("count");
  element.textContent = `Count: ${count()}, Name: ${fullName()} → Hello ${fullName()}`;
}
