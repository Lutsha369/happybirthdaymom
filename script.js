// Play a birthday song
function playSong() {
    const audio = new Audio('birthday_song.mp3'); // Make sure to add a file named 'birthday_song.mp3' in the same folder
    audio.play();
}

// Slideshow for Fun Facts
const facts = [
    "Fact 1: Zinziswa loves baking treats for family and friends!",
    "Fact 2: She has a green thumb and enjoys gardening.",
    "Fact 3: Zinziswa is known for her contagious laugh!",
    "Fact 4: She has a heart of gold and helps everyone around her."
];

let currentFact = 0;
function showNextFact() {
    const factElement = document.getElementById("fact");
    currentFact = (currentFact + 1) % facts.length;
    factElement.textContent = facts[currentFact];
}

// Change fact every 3 seconds
setInterval(showNextFact, 3000);
 