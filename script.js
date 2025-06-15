document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Optionally store user info in localStorage
  const name = this.querySelector("input[type='text']").value;
  localStorage.setItem("username", name);

  // Hide modal and show main content
  document.getElementById("signupModal").classList.add("hidden");
  document.getElementById("mainContent").classList.remove("hidden");

  // Welcome message (optional)
  alert(`Welcome to Tamizan Skills, ${name}!`);
});
document.addEventListener('DOMContentLoaded', () => {
  const signupModal = document.getElementById('signupModal');
  const mainContent = document.getElementById('mainContent');
  const signupForm = document.getElementById('signupForm');

  signupForm.addEventListener('submit', function (e) {
    e.preventDefault();
    signupModal.style.display = 'none';
    mainContent.classList.remove('hidden');
  });

  document.getElementById('getStarted').addEventListener('click', () => {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
  });
});
// script.js
form.addEventListener("submit", function (e) {
  e.preventDefault(); // stops the page from refreshing

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Both fields are required!");
    return;
  }

  // Simulate a successful sign-in
  console.log("Email:", email, "Password:", password);
});


// Elements
const signupModal = document.getElementById("signupModal");
const getStartedBtn = document.getElementById("getStarted");
const signupForm = document.getElementById("signupForm");
const mainContent = document.getElementById("mainContent");

// Show Signup Modal on "Get Started"
getStartedBtn.addEventListener("click", () => {
  signupModal.style.display = "block";
});

// Handle Sign Up Submission
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Normally you'd send data to backend here
  // For now, just simulate a successful sign-up
  signupModal.style.display = "none";
  mainContent.classList.remove("hidden");
});

// Optional: Close modal on outside click
window.addEventListener("click", (e) => {
  if (e.target === signupModal) {
    signupModal.style.display = "none";
  }
});
<script>
  const phrases = [
    "AI-powered insights.",
    "Real-time progress tracking.",
    "Tailored learning paths.",
    "Gamified quizzes and badges."
  ];

  let i = 0, j = 0, currentPhrase = [], isDeleting = false, isEnd = false;
  const el = document.getElementById('typewriter');

  function loop() {
    isEnd = false;
    el.innerHTML = currentPhrase.join('');

    if (i < phrases.length) {
      if (!isDeleting && j <= phrases[i].length) {
        currentPhrase.push(phrases[i][j]);
        j++;
        el.innerHTML = currentPhrase.join('');
      }

      if (isDeleting && j <= phrases[i].length) {
        currentPhrase.pop();
        j--;
        el.innerHTML = currentPhrase.join('');
      }

      if (j === phrases[i].length) {
        isEnd = true;
        isDeleting = true;
        setTimeout(loop, 1000);
        return;
      }

      if (isDeleting && j === 0) {
        currentPhrase = [];
        isDeleting = false;
        i++;
        if (i === phrases.length) {
          i = 0;
        }
      }
    }

    const speed = isEnd ? 1000 : isDeleting ? 50 : 100;
    setTimeout(loop, speed);
  }

  loop();
</script>
<script>
  const form = document.getElementById('forgotForm');
  const emailInput = document.getElementById('email');
  const messageDiv = document.getElementById('message');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();

    if (!validateEmail(email)) {
      messageDiv.textContent = "Please enter a valid email address.";
      messageDiv.style.color = "#ef4444"; // red
      return;
    }

    // Simulate sending reset email
    messageDiv.textContent = "Reset link sent to " + email;
    messageDiv.style.color = "#10b981"; // green

    emailInput.value = "";
  });

  function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email.toLowerCase());
  }
</script>


