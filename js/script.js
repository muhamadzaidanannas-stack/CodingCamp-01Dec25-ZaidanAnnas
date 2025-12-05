const welcomeText = document.getElementById("welcomeText");
const userName = prompt("Masukkan Nama Kamu:");
welcomeText.innerText = `Hi ${userName}, Welcome To Website`;

const form = document.getElementById("messageForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("resultName").innerText = "Nama: " + document.getElementById("name").value;
    document.getElementById("resultEmail").innerText = "Email: " + document.getElementById("email").value;
    document.getElementById("resultPhone").innerText = "Nomor HP: " + document.getElementById("phone").value;
    document.getElementById("resultMsg").innerText = "Pesan: " + document.getElementById("msg").value;
});