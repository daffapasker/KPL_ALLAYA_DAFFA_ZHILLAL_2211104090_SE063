const { Subject, ConcreteObserver } = require("./observer");

const subject = new Subject();

const observer1 = new ConcreteObserver("Observer 1");
const observer2 = new ConcreteObserver("Observer 2");

subject.attach(observer1);
subject.attach(observer2);

subject.setState("Aktif");

subject.detach(observer1);
subject.setState("Tidak Aktif");
