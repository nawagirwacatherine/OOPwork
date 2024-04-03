class Bird{
 useWings(){
    console.log("Flying!")
 }
}

class Eagle extends Bird {
    useWings(){
        super.useWings()
        console.log("Barely flapping!")
    }
}

class Penguin extends Bird {
    useWings(){
        console.log("Diving!")
    }
}

var baldEagle = new Eagle();
var KingPenguin = new Penguin();

baldEagle.useWings();
KingPenguin.useWings();