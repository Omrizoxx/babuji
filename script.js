// const form = document.querySelector("forms");

// console.log("Hello World");
// function changeButton() {
//     var buttonOne = document.querySelector('.button_1');
//     buttonOne.innerHTML = "abdullahi changed this text";
// }
// console.log(buttonOne)
// let submitCount = 0;

// function changeText(event){
//     event.preventDefault();
   
//     submitCount++;

//     let buttonOne = document.getElementsById('btn');

//     if(submit === 1){
//         buttonOne.innerHtml = "thank you for your submission";
//     }else if(submit === 2){
//         buttonOne.innerHtml  = "Oyow is on his way"
//     }else{
//         buttonOne.innerHtml = "MY guy chill we are still working on it";
//     }
// }

document.addEventListener('DOMContentLoaded', function(){
    const mainButton = document.getElementById('btn');
    const inputField = document.getElementById('input-btn');
    const sideButton = document.getElementById('btn-2')
    let submitCount = 0;

    function clickedButton(){
        return "email submitted";
    }

    mainButton.addEventListener('click', function(event){
        event.preventDefault();
        submitCount++;
        
        if(submitCount === 1){
            mainButton.innerHTML = "Thank you for your submission";
        } else if(submitCount === 2){
            mainButton.innerHTML = "Oyow is on his way";
        } else if(submitCount === 3){
            mainButton.innerHTML = "MY guy chill we are still working on it";
        }else {
            mainButton.innerHTML = "Fuck around and find out";
        }
    });

    sideButton.addEventListener('click', function(event){
        e.preventDefault();
        if(submitCount === 1){
            return "Quote successfully submited";
        }else if(submitCount === 2){
            return "Thanks again for your submition";
        }else{
            return "Get a life Nigga";
        }
    });
})
