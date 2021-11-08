dayOfWeek = "Monday";
console.log(dayOfWeek);
dayOfWeek = "Friday";
console.log(`I can't wait for ${dayOfWeek}!`);
animalInput = prompt("what is your favorite animal?");
colorInput = prompt("What is your favorite color?");
console.log(`I've never seen a ${colorInput} ${animalInput}`);

timeOfDay = 1300;
previousMeal = "";
if(timeOfDay < 1200){
    breakfast = "eggs";
    previousMeal = breakfast;
    console.log(breakfast);
}
else if(timeOfDay > 1200 && timeOfDay < 1700){
    lunch = "veggie nuggets";
    previousMeal = lunch;
    console.log(lunch);
}
else{
    dinner = "potatoes";
    previousMeal = dinner;
    console.log(dinner);
}

function getRandomInt(maxValue){
    return Math.floor(Math.random()*maxValue);
}

randomNum = getRandomInt(10);
console.log(randomNum);

switch(randomNum){
    case 0:
        console.log("Beatles");
        break;
    case 1:
        console.log("Beatles");
        break;
    case 2:
        console.log("Beatles");
        break;
    case 3:
        console.log("Stones");
        break;
    case 4:
        console.log("Stones");
        break;
    case 5:
        console.log("Stones");
        break;
    case 6:
        console.log("Floyd");
        break;
    case 7:
        console.log("Floyd");
        break;
    case 8:
        console.log("Floyd");
        break;
    case 9:
        console.log("Hendrix");
        break;
    case 10:
        console.log("Hendrix");
        break;
}

for(let i = 0; i < 7; i++){
    console.log("JavaScript is cool!");
}
for(let i = 0; i < 11; i++){
    console.log(i);
}
for(let i = 0; i < 10; i++){
    if(i % 2 == 0){
        console.log("Hello");
    }
    else{
        console.log("Goodbye");
    }
}

function favoriteMovie(){
    let favMovie = "THE MOVIE";
    console.log(favMovie);
}

favoriteMovie();

function favoriteBand(){
    let usersFavBand = prompt("What is your favorite band?");
    return usersFavBand;
}

console.log(`Your favorite band is ${favoriteBand()}`);

function concertDisplay(musicalAct){
    myStreet = prompt("Enter the street you live on: ");
    console.log(`It would be great if ${musicalAct} played a show on ${myStreet}!`);
}

musicalAct = favoriteBand();
concertDisplay(musicalAct);

desktopItems = [
    'desk',
    'lamp',
    'computer'
];

console.log(desktopItems[1]);

desktopItems.push('infinity gauntlet');

for(let i = 0; i < desktopItems.length; i++){
    console.log(desktopItems[i] + " ")
}

magicNumber = getRandomInt(100);
guess = 0;

var control = true;
while(control){
    guess = prompt("Please guess a number:");
    parseInt(guess, "0");
    if(guess == magicNumber){
        control = false;
        alert('YOU WIN!');
        break;
    }
    else if(guess < (magicNumber)){
        alert('TOO LOW!');
    }
    else if(guess > (magicNumber)){
        alert('TOO HIGH!');
    }
    if(guess >= (magicNumber-5) && guess <= (magicNumber+5)){
        alert('Getting Warmer Though!');
    }
}
