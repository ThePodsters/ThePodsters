/* This is the javascript file for team*/
document.getElementById("year").textContent = new Date().getFullYear();

function contact(email) {
    window.location.href = "mailto:" + email;
}

const input = document.getElementById("searchInput");
input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    document.querySelectorAll(".team-card").forEach(card => {
        const name = card.dataset.name.toLowerCase();
        const role = card.dataset.role.toLowerCase();
        card.style.display = (name.includes(q) || role.includes(q)) ? "" : "none";
    });
});

function openProfile(name) {
    alert("Profile modal coming soon: " + name);
}
