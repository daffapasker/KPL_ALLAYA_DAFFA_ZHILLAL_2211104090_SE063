class PusatDataSingleton {
  constructor() {
    if (PusatDataSingleton._instance) {
      return PusatDataSingleton._instance;
    }
    this.dataTersimpan = [];
    PusatDataSingleton._instance = this;
  }

  static getDataSingleton() {
    if (!PusatDataSingleton._instance) {
      PusatDataSingleton._instance = new PusatDataSingleton();
    }
    return PusatDataSingleton._instance;
  }

  getSemuaData() {
    return this.dataTersimpan;
  }

  printSemuaData() {
    this.dataTersimpan.forEach((data, index) => {
      console.log(`${index + 1}. ${data}`);
    });
  }

  addSebuahData(input) {
    this.dataTersimpan.push(input);
  }

  hapusSebuahData(index) {
    if (index >= 0 && index < this.dataTersimpan.length) {
      this.dataTersimpan.splice(index, 1);
    } else {
      console.log("Index tidak valid.");
    }
  }
}

module.exports = PusatDataSingleton;