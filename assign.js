// Task 1: Code a Person class
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    

    }

    sleep() {
        this.energy = this.energy + 10;
        console.log(this.energy);
        
    }

    doSomethingFun() {
        this.energy = this.energy - 10;
        console.log(this.energy);
    }
}
    

// Task 2: Code a Worker class
class Worker extends Person {
    constructor(name = "Tom", age = 20, energy = 100, xp = 0, hourlywage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlywage = hourlywage;
    
    }
    goToWork() {
        this.xp += 10;
        console.log(this.xp);
    }
      
}


// Task 3: Code an intern object, run methods
function intern(name,age,energy,xp, hourlywage) {
    var workerIntern = new Worker('Bob', 21,110,0, 10);
    workerIntern.goToWork();
    console.log(workerIntern);
}

intern();

    

// Task 4: Code a manager object, methods
function manager(name,age,energy,xp,hourlywage) {
    var workerManager = new Worker('Alice', 30, 120, 100,30);
    workerManager.doSomethingFun();
    console.log(workerManager);
}
manager();

    

var person1 = new Person();
person1.doSomethingFun();