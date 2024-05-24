class Train{
    constructor(color="red",lightsOn = false){
        this.color = color;
        this.lightsOn = lightsOn;

    }
    togglelights(){
      this.lightsOn = !this.lightsOn;
    }
    lightsStatus(){
        console.log('Lights on?',this.lightsOn);
    }
    getSelf(){
        console.log(this);
    }

    getPrototype(){
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }

}

var train1 =new Train("green",false);
train1.togglelights();
train1.getSelf();
train1.getPrototype();
