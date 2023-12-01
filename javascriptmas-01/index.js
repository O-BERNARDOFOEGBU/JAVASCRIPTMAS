const countdownDisplay = document.getElementById("countdown-display");

function renderCountdown() {
  const christmasDay = 25;

  // Get today's date (only need the day)
  const today = new Date();
  const currentDay = today.getDate();

  // Calculate remaining days
  let remainingDays = christmasDay - currentDay;

  // Check if Christmas has passed this year
  if (remainingDays < 0) {
    // If Christmas has passed, calculate remaining days for next year
    const nextChristmas = new Date(today.getFullYear() + 1, 11, christmasDay);
    const daysUntilNextChristmas = Math.floor(
      (nextChristmas - today) / (1000 * 60 * 60 * 24)
    );
    remainingDays = daysUntilNextChristmas;
  }

  // Display remaining days in countdownDisplay
  countdownDisplay.textContent = remainingDays;

  // Stretch goals: Display hours, minutes, seconds.
  // The following lines include hours, minutes, and seconds

  const miniCountdownDisplay = document.getElementById(
    "mini-full-countdown-text"
  );
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  const miniDisplay = `${remainingDays} days, ${hours}h ${minutes}m ${seconds}s`;
  miniCountdownDisplay.textContent += miniDisplay + " 'til Christmas!";

  // Stretch goals: Add a countdown for another festival, your birthday, or Christmas 2022.
  // The following lines add another countdown (New year's)
  const newYearCountdownDisplay = document.getElementById(
    "newyear-countdown-text"
  );
  const newYear = new Date(today.getFullYear() + 1, 0, 1);
  const daysUntilNewYear = Math.floor(
    (newYear - today) / (1000 * 60 * 60 * 24)
  );
  newYearCountdownDisplay.textContent = daysUntilNewYear;
}

// Call renderCountdown function
renderCountdown();
