function toggleDropdown() {
    var dropdown = document.getElementById("social-dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Закрытие меню при клике вне его области
window.onclick = function(event) {
    if (!event.target.matches('.contact-btn')) {
        var dropdown = document.getElementById("social-dropdown");
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        }
    }
}

function openModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        closeModal();
    }
}
