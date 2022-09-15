//Ejercicio para practicar el principio de sustitución de Liskov (soLid principles)

//Clase padre
class Bird {
  tweet(name) {
    return `${name} PIO`;
  }
  canFly() {
    return "YES";
  }
}

//Subclases

// Cumplen LSP
class Pigeon extends Bird {}

//No cumplen LSP
class Chicken extends Bird {
  canFly() {
    return "NO";
  }
}

class Goat extends Bird {
  bee(name) {
    return `${name} beeeeeeee`;
  }
}

let pajaro = new Bird();
let pollo = new Chicken();
let cabra = new Goat();

console.log(pajaro.tweet("german"));
console.log(pollo.canFly());
console.log(cabra.tweet("Silvia"));
console.log(cabra.bee("Silvia"));
