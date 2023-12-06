// const people = ["Alice", "Bob", "Carly", "Dan", "Ed", "Ferdinand", "Ginny"]

// function generateSecretSantaPairs(arr) {
//   const shuffledArr = [...arr]; // Create a copy of the array to shuffle
//   for (let i = shuffledArr.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     // Swap array[i] and array[j]
//     [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
//   }

//   const secretSantaPairs = {};
//   for (let i = 0; i < arr.length; i++) {
//     secretSantaPairs[arr[i]] = shuffledArr[(i + 1) % arr.length];
//   }

//   return secretSantaPairs;
// }

// console.log(generateSecretSantaPairs(people))

document.addEventListener("DOMContentLoaded", function () {
  const generateButton = document.getElementById("generateButton");
  const namesInput = document.getElementById("namesInput");
  const secretSantaPairsContainer = document.getElementById(
    "secretSantaPairsContainer"
  );

  generateButton.addEventListener("click", function () {
    const names = namesInput.value.split(",").map((name) => name.trim());

    if (names.length < 2) {
      alert("Please enter at least two names.");
      return;
    }

    const secretSantaPairs = generateSecretSantaPairs(names);

    let pairsString = "<h2>Secret Santa Pairs</h2><ul>";
    for (const person in secretSantaPairs) {
      pairsString += `<li><div class="tree-icon"></div>${person} ➔ ${secretSantaPairs[person]}</li>`;
    }
    pairsString += "</ul>";
    secretSantaPairsContainer.innerHTML = pairsString;

    // for Scrolling to the top of the page, cos I noticed my page no longer scrolls after output of santa secret pairs
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

function generateSecretSantaPairs(arr) {
  const shuffledNames = shuffleArray(arr);
  const pairs = {};

  for (let i = 0; i < shuffledNames.length; i++) {
    const currentPerson = shuffledNames[i];
    const nextPerson = shuffledNames[(i + 1) % shuffledNames.length];

    // Ensure no one is allocated to themselves
    if (currentPerson === nextPerson) {
      return generateSecretSantaPairs(arr);
    }

    pairs[currentPerson] = nextPerson;
  }

  return pairs;
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
Example output:
{
  Alice: "Dan",
  Bob: "Ferdinand",
  Carly: "Ed",
  Dan: "Alice",
  Ed: "Ginny",
  Ferdinand: "Bob",
  Ginny: "Carly"
}
*/
