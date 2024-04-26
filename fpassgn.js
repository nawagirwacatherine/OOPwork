

// Task 1: Build a console log message generator
function consoleStyler(color, background, fontSize, txt) {
    var message = "%c" + txt;
    var style = `color:${color};`;
    style += `background:${background};`;
    style += `font-size:${fontSize};`;

     console.log(consoleStyler)
    console.log(message, style)
}


// Call consoleStyler function
consoleStyler('red', 'blue', '30px', 'birthday');

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    var fontStyle = "color:tomato;font-size:50px";

    if (reason == "birthday") {
        console.log(`%cHappy birthday`, fontStyle);
    } else if (reason == "champions") {
        console.log(`%cCongrats on the title!`, fontStyle);
    } else {
        console.log(reason + " is not recognized.");
    }
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler('#1d5c63', 'ede6db', '40px', 'congrats!');
celebrateStyler('birthday');

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    consoleStyler(color, background, fontSize, txt);  
    celebrateStyler(reason);
}
    
    consoleStyler("red","yellow", "20px","champion!");
     celebrateStyler("Big day!");
  


// Call styleAndCelebrate
styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');
