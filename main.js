// Fetch recommendations from the backend
fetch("/api/recommendations")
  .then((response) => response.json())
  .then((recommendations) => {
    const recommendationsContainer = document.getElementById("recommendations");
    recommendations.forEach((product) => {
      const productHtml = `
        <div class="border p-4">
          <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover mb-2">
          <h3 class="text-lg font-semibold">${product.name}</h3>
          <p class="text-sm text-gray-600">${product.description}</p>
          <button class="mt-3 bg-blue-500 text-white py-2 px-4 rounded">Add to Cart</button>
        </div>
      `;
      recommendationsContainer.innerHTML += productHtml;
    });
  })
  .catch((error) => console.error("Failed to load recommendations:", error));
