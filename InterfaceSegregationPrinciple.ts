interface Flyinganimal {
  fly(): string;
}
interface RuningAnaml {
  run(): string;
}
interface BarkingAnimal {
  bark(): string;
}

class Dog implements RuningAnaml, BarkingAnimal {
  run(): string {
    return "I can run";
  }
  bark(): string {
    return "I can bark";
  }
}
