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
    class HighSpeedTrain extends Train {
        constructor(passengers, highSpeedOn, color, lightsOn){
            super(color,lightsOn);
            this.passengers = passengers;
            this.highSpeedOn = highSpeedOn;
        }
        toggleHighSpeed(){
            this.highSpeedOn = !this.highSpeedOn;
            console.log('High speed status:', this.highSpeedOn)
        }

        toggleLights(){
            super.toggleLights();
            super.lightsStatus();
            console.log('Lights are 100% operational.');
        }

    }

    var myFirstTrain = new Train('red', false);
    console.log(myFirstTrain);
    var mySecondTrain = new Train('blue',false);
    var myThirdTrain = new Train('blue',false);


    var train4 = new Train('red',false);
    train4.togglelights();
    train4.lightsStatus();
    train4.getSelf();
    train4.getPrototype();


    var train5 = new Train('blue',false);
    var highSpeed1 =new HighSpeedTrain(200,false,'green',false);

    train5.togglelights();
    train5.lightsStatus();
    highSpeed1.togglelights();

    var train6 = new Train('purple',true);
    train6.togglelights;
    train6.lightsStatus;
    train6.getSelf;






