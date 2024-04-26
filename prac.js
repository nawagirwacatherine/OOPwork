/*let greet = "Hello";
let place = "World";
console.log(`${greet} ${place}!`);*/

var dairy = ['cheese','sour cream','milk','yogurt','ice cream','milkshake'];
  function logDiary(){
    for (dairy of dairy){
        console.log(dairy);
    }
  }
  logDiary();

  const animal ={

    canJump: true
  };

  const bird = Object.create(animal);

  bird.canFly = true;

  bird.hasFeathers = true;

  function birdCan(){
    for (const entries of Object.entries(bird)){
        console.log(bird);

    }

  }
  birdCan();

  
function animalCan() {
    for (const entries in Object.entries(animal)){
     console.log(animal);
    }

}

animalCan();




  