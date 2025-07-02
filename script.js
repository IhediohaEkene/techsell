// Get all details elements
const details = document.querySelectorAll('details');

// Add click event listener to each details element
details.forEach((targetDetail) => {
    targetDetail.addEventListener('click', () => {
        // Close all details except the clicked one
        details.forEach((detail) => {
            if (detail !== targetDetail) {
                detail.removeAttribute('open');
            }
        });
    });
});

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const today = new Date();
  const month = monthNames[today.getMonth()];
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("current-month").textContent = month;
  });