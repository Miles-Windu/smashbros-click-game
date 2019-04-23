// from google
// using their shuffle javascript function and exporting it to be used in my main App.js.
function shuffle(props) {

    const shuffledArray = props;

    var randomIndex;
    var tempIndex;
    // go from 11-0; randomize current i; 
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        randomIndex = Math.floor(Math.random() * (i + 1));
        tempIndex = shuffledArray[i]; // copy current index to temp
        shuffledArray[i] = shuffledArray[randomIndex]; // copy random index to current index i in array
        shuffledArray[randomIndex] = tempIndex; // copy temp index to random index
    }

    return shuffledArray;
}

export default shuffle;