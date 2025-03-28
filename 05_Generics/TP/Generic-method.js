class HaloGeneric {
    constructor(name = "Guest") {
        this.name = name;
        
    }

    sayHello(name) {
        console.log(`Hello ${name}`);
    }   

    introduce() {
        console.log(`Hi, my name is ${this.name}`);
    }

    toJSON() {
        return {
            name: this.name,
        };
    }

    print() {
        console.log(JSON.stringify(this.toJSON(), null, 2));
    }

}

const halo = new HaloGeneric("Allaya Daffa Zhillal");
halo.sayHello();
halo.sayHello("dappa");
halo.introduce();
console.log(halo);

const JSONString = JSON.stringify(halo.toJSON(), null, 2);
console.log(JSONString);
