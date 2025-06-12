class Subject {
  constructor() {
    this.observers = [];
    this.state = null;
  }

  attach(observer) {
    this.observers.push(observer);
  }

  detach(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify() {
    this.observers.forEach((observer) => observer.update(this));
  }

  setState(newState) {
    this.state = newState;
    this.notify();
  }

  getState() {
    return this.state;
  }
}

class ConcreteObserver {
  constructor(name) {
    this.name = name;
  }

  update(subject) {
    console.log(
      `${this.name} menerima update: State sekarang = ${subject.getState()}`
    );
  }
}

module.exports = { Subject, ConcreteObserver };
