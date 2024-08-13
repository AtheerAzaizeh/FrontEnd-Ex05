export function deleteCar(event) {
    const carId = event.target.getAttribute('data-id');
    fetch('http://localhost:3000/cars', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: carId }),
    })
    .then(response => response.json())
    .then(result => {
        console.log(result.message);
        alert('Car deleted successfully!');
        window.fetchCars(); // Refresh the car list
    })
    .catch(error => {
        console.error('Error deleting car:', error);
        alert('Failed to delete car. Please try again.');
    });
}
