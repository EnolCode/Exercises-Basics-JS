export function checkVariable(number) {
  number = "number";
  return number;
}

export function checkIfIsInteger(number) {
  if (!Number.isInteger(number)) return false;
}

export function checkIfNumberIsInfinite(number) {
  /* Tendrás que utilizar un condicional / if ... */
  if (number === Infinity) return "Number is Infinite";
}

export function sum(num1, num2) {
  /* Completa la function utilizando el operador de suma + */
  return num1 + num2;
}

export function subtract(num) {
  /* Completa la function utilizando el operador de sustracción - */
  const number = 25;
  return num - number;
}

export function multiply(num) {
  /* Completa la function utilizando el operador de sustracción - */
  const number = 5;
  return num * number;
}

export function divide(num) {
  /* Completa la function utilizando el operador de división / */
  const number = 2;
  return num / number;
}

export function checkIfNumbIsDivisibleByThree(num) {
  /* Completa la function utilizando el operador modulus y utiliza el conditional if() */
  const number = 3;
  if (num % number === 0) return "Number is divisible by 3";
}
