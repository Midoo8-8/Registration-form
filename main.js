function toggleOtherUniversity() {
  const universitySelect = document.getElementById("university");
  const otherContainer = document.getElementById("otherUniversityContainer");

  if (universitySelect.value === "other") {
    otherContainer.style.display = "block";
    document.getElementById("otherUniversity").required = true;
  } else {
    otherContainer.style.display = "none";
    document.getElementById("otherUniversity").required = false;
  }
}
document.getElementById("registrationForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("message").textContent = "Succeed ";
});

