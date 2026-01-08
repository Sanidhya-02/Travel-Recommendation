let travelData = {};
const resultsContainer = document.getElementById("resultsContainer");

// Fetch JSON data
fetch("travel_recommendation_api.json")
    .then(response => response.json())
    .then(data => {
        travelData = data;
        console.log("Travel data loaded:", travelData);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });

// Search button logic
document.getElementById("searchBtn").addEventListener("click", function () {
    const keyword = document.getElementById("searchInput").value
        .toLowerCase()
        .trim();

    resultsContainer.innerHTML = "";

    let results = [];

    if (keyword === "beach" || keyword === "beaches") {
        results = travelData.beaches;
    } 
    else if (keyword === "temple" || keyword === "temples") {
        results = travelData.temples;
    } 
    else if (keyword === "country" || keyword === "countries") {
        results = travelData.countries;
    } 
    else {
        resultsContainer.innerHTML = "<p>No recommendations found.</p>";
        return;
    }

    results.forEach(place => {
    const card = document.createElement("div");
    card.className = "col-md-6";

    card.innerHTML = `
        <div class="card result-card shadow-sm p-3 h-100">
            <img src="${place.imageUrl}" class="img-fluid rounded mb-2" alt="${place.name}">
            <h4 class="mt-2">${place.name}</h4>
            <p>${place.description}</p>
        </div>
    `;

    resultsContainer.appendChild(card);
    });
});
