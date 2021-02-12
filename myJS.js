/*
* Excercise 1
*
*/

/*
* Then write a function that changes the text and the color inside the div
*
*/

const theBlock = document.getElementById("color-block");
const theColor = document.getElementById("color-name");
theBlock.addEventListener("click", changeColor);

function changeColor(){
    const clname = theColor.innerHTML;
    //Write a condition determine what color it should be changed to
    if(clname == "#F08080"){
        //change the background color using JS
        theBlock.style.backgroundColor = "#AAAAAA";
        //Change the text of the color using the span id color-name
        theColor.innerHTML="#AAAAAA";
    }
    else{
        //change the background color using JS
        theBlock.style.backgroundColor = "#F08080";
        //Change the text of the color using the span id color-name
        theColor.innerHTML = "#F08080";
    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/
const theButton = document.getElementById("convertbtn");
const FTin = document.getElementById("f-input");
theButton.addEventListener("click",convertTemp);

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here
    const FT = FTin.value;
    const CT = Math.round((FT - 32 )/9*5)
    //Send the calculated temperature to HTML
    document.getElementById("c-output").innerHTML=CT
}



