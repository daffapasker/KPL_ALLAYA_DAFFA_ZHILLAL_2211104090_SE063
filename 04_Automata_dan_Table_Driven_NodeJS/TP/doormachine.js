// doormachine.js
class DoorMachine {
    constructor() {
        this.state = "Terkunci";
        this.displayState();
    }

    lock() {
        this.state = "Terkunci";
        this.displayState();
    }

    unlock() {
        this.state = "Terbuka";
        this.displayState();
    }

    displayState() {
        if (this.state === "Terkunci") {
            console.log("Pintu terkunci");
        } else if (this.state === "Terbuka") {
            console.log("Pintu tidak terkunci");
        }
    }
}

module.exports = DoorMachine;
