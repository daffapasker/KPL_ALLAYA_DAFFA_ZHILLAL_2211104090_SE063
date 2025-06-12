/**
 * Class Subject: mengelola daftar observer dan status
 */
class Subject {
  constructor() {
    this.observers = [];
    this.state = null;
  }

  /**
   * Menambahkan observer
   * @param {Observer} observer
   */
  attach(observer) {
    this.observers.push(observer);
  }

  /**
   * Melepaskan observer
   * @param {Observer} observer
   */
  detach(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  /**
   * Menginformasikan observer tentang perubahan
   */
  notify() {
    this.observers.forEach((observer) => observer.update(this));
  }

  /**
   * Mengubah state dan memberi tahu observer
   * @param {string} newState
   */
  setState(newState) {
    this.state = newState;
    this.notify();
  }

  /**
   * Mengambil nilai state sekarang
   * @returns {string}
   */
  getState() {
    return this.state;
  }
}

/**
 * Class Observer: menerima notifikasi dari Subject
 */
class Observer {
  constructor(name) {
    this.name = name;
  }

  /**
   * Method yang dipanggil saat Subject berubah
   * @param {Subject} subject
   */
  update(subject) {
    console.log(`${this.name} menerima perubahan state: ${subject.getState()}`);
  }
}

module.exports = { Subject, Observer };
