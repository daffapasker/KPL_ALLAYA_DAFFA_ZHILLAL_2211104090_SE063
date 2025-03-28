class DataGeneric {
    constructor(data) {
        this.data = data;
    }

    toJSON() {
        return {
            data: this.data,
            length: this.length,
            index: this.index,
            current: this.current,
            done: this.done,
        };
    }

    printData() {
        console.log(`Data yang tersimpan adalah : this.data = ${this.data}`); 
        console.log(JSON.stringify(this.toJSON(), null, 2));
    }
}

const nim = 2211104090;
const name = "Allaya Daffa Zhillal";
const address = "Pasirmuncang, Purwokerto Barat, Jawa Tengah";
const data = [nim, name, address];

const dataGeneric = new DataGeneric(data);
dataGeneric.printData();
