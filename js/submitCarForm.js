export function submitCarForm(event) {
    event.preventDefault();

    const carNameInput = document.getElementById('car-name');
    const carTypeInput = document.getElementById('car-type');
    const carColorInput = document.getElementById('car-color');
    const carFeedbackInput = document.getElementById('car-feedback');
    const submitButtonIcon = document.querySelector('.add-icon i');

    const name = carNameInput.value;
    const type = carTypeInput.value;
    const color = carColorInput.value;
    const feedback = carFeedbackInput.value;

    const method = window.editingCarId ? 'PUT' : 'POST';
    const url = 'https://backendex-5.onrender.com/cars';

    fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: window.editingCarId,
            name,
            type,
            color,
            feedback
        }),
    })
    .then(response => response.json())
    .then(result => {
        if (window.editingCarId) {
            alert('Car updated successfully!');
        } else {
            alert('Car added successfully!');
        }

        // Clear the form fields
        carNameInput.value = '';
        carTypeInput.value = '';
        carColorInput.value = '';
        carFeedbackInput.value = '';

        // Reset editingCarId and change icon back
        window.editingCarId = null;
        submitButtonIcon.classList.remove('fa-edit');
        submitButtonIcon.classList.add('fa-plus');

        // Refresh the car list
        window.fetchCars();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to process request. Please try again.');
    });
}
