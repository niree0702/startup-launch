// Smooth scroll to Features section from floating button
document.querySelector('.floating-btn').addEventListener('click', () => {
  const target = document.getElementById('features');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
});

// Optional: Handle contact form submission
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for contacting StoryNest! We will get back to you soon.');
  this.reset();
});
<script>
  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("signupModal");
    const btn = document.getElementById("get-started-btn");
    const closeBtn = document.querySelector(".close");

    btn.onclick = () => {
      modal.style.display = "block";
    };

    closeBtn.onclick = () => {
      modal.style.display = "none";
    };

    window.onclick = (e) => {
      if (e.target === modal) modal.style.display = "none";
    };
  });
</script>

