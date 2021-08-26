const GITHUB_URL = "https://api.github.com/users/Semogs";

fetch(GITHUB_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
    const id = document.getElementById("myName")
    id.innerHTML = data.name
  });

document.getElementById("card").addEventListener("click", function() {
  this.style.animation = "beat 3s ease-in-out";
  this.style.transition = "all 3s"
});
