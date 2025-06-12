/**
 * Singleton class yang menyimpan data global aplikasi
 */
class PusatDataSingleton {
  constructor() {
    if (PusatDataSingleton._instance) {
      return PusatDataSingleton._instance;
    }

    this.storedData = [];
    PusatDataSingleton._instance = this;
  }

  /**
   * Mengembalikan instance singleton
   * @returns {PusatDataSingleton}
   */
  static getInstance() {
    if (!PusatDataSingleton._instance) {
      PusatDataSingleton._instance = new PusatDataSingleton();
    }
    return PusatDataSingleton._instance;
  }

  /**
   * Mengembalikan seluruh data
   * @returns {string[]}
   */
  getAllData() {
    return this.storedData;
  }

  /**
   * Menampilkan semua data ke console
   */
  printAllData() {
    this.storedData.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });
  }

  /**
   * Menambahkan sebuah data ke dalam list
   * @param {string} input
   */
  addData(input) {
    this.storedData.push(input);
  }

  /**
   * Menghapus data berdasarkan index
   * @param {number} index
   */
  removeData(index) {
    if (index >= 0 && index < this.storedData.length) {
      this.storedData.splice(index, 1);
    } else {
      console.log("Index tidak valid.");
    }
  }
}

module.exports = PusatDataSingleton;
