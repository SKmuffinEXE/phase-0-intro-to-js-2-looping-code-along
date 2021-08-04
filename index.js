// Code your solutions in this file

const names = ["Ada", "Brendan", "Ali"];
function writeCards(names){

    /**
     for ([initialization]; [condition]; [iteration]) {
        [loop body]
      } **/

    
    const thanks = [];

    for (let i = 0; i < names.length; i++){
        /* 
        "Thank you, Lisa, for the wonderful birthday gift!"
        "Thank you, Lisa, for the wonderful surprise gift!"
        */
        thanks.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
        console.log(thanks[i]);
        debugger;
    }
    
    return thanks;

}

writeCards(names); 


function countDown(count){
let x = count;
while(x >= 0){
    console.log(x);
    x--;
}

}

let it = 5;

countDown(it);