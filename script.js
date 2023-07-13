// JavaScript code

// Function to display a random quote in the hero section
function displayRandomQuote() {
  const quotes = [
    "“The only way to do great work is to love what you do.” - Steve Jobs",
    "“Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.” - Albert Schweitzer",
    "“The best way to predict the future is to create it.” - Peter Drucker",
    "“The harder I work, the luckier I get.” - Samuel Goldwyn",
    "“It does not matter how slowly you go as long as you do not stop.” - Confucius",
    "“The secret of getting ahead is getting started.” - Mark Twain",
    "“Innovation distinguishes between a leader and a follower.” - Steve Jobs",
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  const quoteElement = document.querySelector(".hero-quote");
  quoteElement.textContent = quote;
}

// Function to highlight the active navigation link
function highlightActiveLink() {
  const navLinks = document.querySelectorAll(".nav-links li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      navLinks.forEach((link) => link.classList.remove("active"));
      e.target.classList.add("active");
    });
  });
}

// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Event listener to trigger display of random quote on page load
window.addEventListener("DOMContentLoaded", displayRandomQuote);

// Event listener to highlight active navigation link on click
highlightActiveLink();

// Event listener to scroll to the top of the page when logo is clicked
const logo = document.querySelector(".logo");
logo.addEventListener("click", scrollToTop);
