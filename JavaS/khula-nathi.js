document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const galleryCards = document.querySelectorAll(".gallery-card");

    // Filter by Category
    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            filterButtons.forEach(btn => {
                btn.classList.remove("active");
                btn.style.background = "#e0e0e0";
                btn.style.color = "#333";
            });
            this.classList.add("active");
            this.style.background = "var(--dark-green)";
            this.style.color = "white";

            const selectedCategory = this.getAttribute("data-category");

            galleryCards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");
                if (selectedCategory === "all" || cardCategory === selectedCategory) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // Search Functionality
    searchInput.addEventListener("input", function (e) {
        const searchTerm = e.target.value.toLowerCase();

        galleryCards.forEach(card => {
            const title = card.getAttribute("data-title").toLowerCase();
            if (title.includes(searchTerm)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});