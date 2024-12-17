// Shop functionality
document.addEventListener("DOMContentLoaded", () => {
    // Select all sections separately
    const sections = document.querySelectorAll(".row-custom");

    sections.forEach(section => {
        const filterButtons = section.querySelectorAll(".button");
        const productBoxes = section.querySelectorAll(".product-box");

        filterButtons.forEach(button => {
            button.addEventListener("click", () => {
                const filter = button.getAttribute("data-filter");

                // Toggle active class on buttons in this section only
                filterButtons.forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");

                // Filter product boxes in this section only
                productBoxes.forEach(box => {
                    if (filter === "all" || box.classList.contains(filter)) {
                        box.style.display = "block";
                    } else {
                        box.style.display = "none";
                    }
                });
            });
        });
    });
});




// news
document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".thumb");
    const newsBoxes = document.querySelectorAll(".news-box");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            // Toggle active class on buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // Filter product boxes
            newsBoxes.forEach(box => {
                if (filter === "all" || box.classList.contains(filter)) {
                    box.style.display = "block";
                } else {
                    box.style.display = "none";
                }
            });
        });
    });
});



// Search function
const searchBtn = document.getElementById('search-btn');
const searchBox = document.getElementById('search-box');
const clearBtn = document.getElementById('clear-btn');
const searchInput = document.getElementById('search-input');

// Toggle the visibility of the search box
searchBtn.addEventListener('click', () => {
    if (searchBox.style.display === 'none' || searchBox.style.display === '') {
        searchBox.style.display = 'flex';
    } else {
        searchBox.style.display = 'none';
    }
});

// Clear the input field
clearBtn.addEventListener('click', () => {
    searchInput.value = '';
});



// Array to hold banner image file paths
const bannerImages = [
    "https://i.ytimg.com/vi/PFQZErHiRs8/maxresdefault.jpg",
    "https://i.ytimg.com/vi/vcQDdgrEamk/maxresdefault.jpg",
    "https://i.ytimg.com/vi/UoD7B0eX9-Q/maxresdefault.jpg",
    "https://i.ytimg.com/vi/WsVd53HzAww/maxresdefault.jpg"
];

let currentIndex = 0; // Track the current banner image
const bannerImage = document.getElementById("banner-image");

// Function to show the next image
function nextImage() {
    currentIndex = (currentIndex + 1) % bannerImages.length; // Loop back to start
    updateBanner();
}

// Function to show the previous image
function prevImage() {
    currentIndex = (currentIndex - 1 + bannerImages.length) % bannerImages.length; // Loop to the end
    updateBanner();
}

// Function to update the banner image
function updateBanner() {
    bannerImage.src = bannerImages[currentIndex];
}

// Auto-change images every 5 seconds
setInterval(nextImage, 5000);



// Scroll stuff YAY
const scrollable = document.getElementById("scrollable");
const scrollFrame = document.getElementById("scroll-frame");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// Width of one box including gap
const boxWidth = scrollFrame.offsetWidth / 3;

// Scroll one box left or right
prevBtn.addEventListener("click", () => {
    scrollable.scrollBy({ left: -boxWidth, behavior: "smooth" });
});

nextBtn.addEventListener("click", () => {
    scrollable.scrollBy({ left: boxWidth, behavior: "smooth" });
});

// Allow vertical scrolling within the horizontal area
scrollFrame.addEventListener("wheel", (event) => {
    if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
        event.preventDefault();
        scrollable.scrollBy({ left: event.deltaY, behavior: "smooth" });
    }
});