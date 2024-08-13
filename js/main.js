import { fetchCars } from './fetchCars.js';
import { editCar } from './editCar.js';
import { deleteCar } from './deleteCar.js';
import { submitCarForm } from './submitCarForm.js';
import { refreshImage } from './refreshImage.js';

document.addEventListener('DOMContentLoaded', function() {
    const carList = document.getElementById('car-list');
    const carForm = document.getElementById('car-form');

    // Bind the fetchCars function globally so other files can call it
    window.fetchCars = function() {
        fetchCars(carList, editCar, deleteCar);
    };

    // Fetch cars on page load
    window.fetchCars();

    // Handle form submission to add or update a car
    carForm.addEventListener('submit', submitCarForm);

    // Set up image refresh
    refreshImage(); // Initial image load
    setInterval(refreshImage, 10000); // Refresh the image every 10 seconds
});
