document.addEventListener('DOMContentLoaded', function() {
  // Set the target date for the countdown (example: 30 days from now)
  let countDownDate = new Date();
  countDownDate.setDate(countDownDate.getDate() + 30);

  // Update the countdown every 1 second
  let countdownFunction = setInterval(function() {
    // Get current time
    let now = new Date().getTime();

    // Find the remaining time between now and the target date
    let distance = countDownDate.getTime() - now;

    // Calculate time components
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in elements with IDs "days", "hours", "minutes", "seconds"
    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

    // If the countdown is finished, display an expired message
    if (distance < 0) {
      clearInterval(countdownFunction);
      document.getElementById("countdown").innerHTML = "EXPIRED";
    }
  }, 1000);

  // Handle subscription form (example: prevent default submission)
  const subscribeForm = document.getElementById('subscribeForm');
  subscribeForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // You can process the email here (e.g., send to your server)
    alert("Thank you! We'll notify you when we launch.");
    subscribeForm.reset();
  });
});
