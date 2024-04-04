class house{
    userooms(){
        console.log("staying!")
    }
}

class sitting extends house {
    userooms(){
        super.userooms()
        console.log("visitors staying!")

    }
}

class kitchen extends house {
    userooms(){
        console.log("cooking!")
    }

}

var sittingroom = new sitting();
var bigkitchen = new kitchen();

sitting.userooms();
bigkitchen.userooms();



