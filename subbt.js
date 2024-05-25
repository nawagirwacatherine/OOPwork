// Task 1: Code a Person class
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }

    sleep() {
        this.energy += 10;
        console.log(this.energy);
    }

    doSomethingFun() {
        this.energy -= 10;
        console.log(this.energy);
    }
}


// Task 2: Code a Worker class
class Worker extends Person {
    constructor(name = "Tom", age = 20, energy = 100, xp = 0, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }

      sleep() {
        this.energy += 10;
        console.log(this.energy);
    }

    doSomethingFun() {
        this.energy -= 10;
        console.log(this.energy);
    }


    goToWork() {
        this.xp += 10;
        console.log(this.xp);
    }
}


// Task 3: Code an intern object, run methods
function intern(name = "Tom", age = 20, energy = 100, xp = 0, hourlyWage = 10) {
  const Worker = {
        name: name,
        age: age,
        energy: energy,
        xp: xp,
        hourlyWage: hourlyWage,
        goToWork: function() {
            this.xp += 10;
            this.energy -= 10;
        }
    };

    // Call the goToWork method to simulate working
    Worker.goToWork();

    // Log the worker object to the console
    console.log(Worker);

}

intern("Bob", 21, 110, 0, 10); 

// Task 4: Code a manager object, run methods
function manager(name = "Tom", age = 20, energy = 100, xp = 0, hourlyWage = 10) {
 const Worker = {
        name: name,
        age: age,
        energy: energy,
        xp: xp,
        hourlyWage: hourlyWage,
        doSomethingFun: function() {
            this.xp += 10;
            this.energy -= 10;
        }
    };

    // Call the goToWork method to simulate working
    Worker.doSomethingFun();

    // Log the worker object to the console
    console.log(Worker);
}

manager('Alice', 30, 120, 100, 30);