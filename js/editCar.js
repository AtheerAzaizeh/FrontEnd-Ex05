export function editCar(event) {
    const carId = event.target.getAttribute('data-id');
    fetch(`https://backendex-5.onrender.com/cars/get`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: carId }),
    })
    .then(response => response.json())
    .then(car => {
        document.getElementById('car-name').value = car.name;
        document.getElementById('car-type').value = car.type;
        document.getElementById('car-color').value = car.color;
        document.getElementById('car-feedback').value = car.feedback;

        // Change button icon to edit
        const submitButtonIcon = document.querySelector('.add-icon i');
        submitButtonIcon.classList.remove('fa-plus');
        submitButtonIcon.classList.add('fa-edit');

        window.editingCarId = carId;  // Global variable to track the editing car ID
    })
    .catch(error => console.error('Error fetching car data:', error));
}
