const flowers = [
    { name: "Rose", color: "red" },
    { name: "Tulip", color: "yellow" },
    { name: "Daisy", color: "white" },
    { name: "Sunflower", color: "yellow" },
    { name: "Lily", color: "pink" }
];

const flowerContainer = document.getElementById('flower-container');

flowers.forEach(flower => {
    const flowerDiv = document.createElement('div');
    flowerDiv.className = 'flower';
    flowerDiv.style.backgroundColor = flower.color;
    flowerDiv.textContent = flower.name;
    flowerDiv.onclick = () => alert(`You picked a ${flower.name}!`);
    flowerContainer.appendChild(flowerDiv);
});
