export function fetchCars(carList, editCar, deleteCar) {
    fetch('https://backendex-5.onrender.com/cars')
        .then(response => response.json())
        .then(data => {
            carList.innerHTML = '';
            data.forEach(car => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <p>${car.name} (${car.type})
                        <i class='fas fa-pen' data-id="${car.id}" style="cursor: pointer;"></i>
                        <i class='fas fa-trash' style="color: red; cursor: pointer;" data-id="${car.id}"></i>
                    </p>
                `;
                carList.appendChild(listItem);
            });

            // Add event listeners for edit and delete icons
            document.querySelectorAll('.fa-pen').forEach(icon => {
                icon.addEventListener('click', editCar);
            });

            document.querySelectorAll('.fa-trash').forEach(icon => {
                icon.addEventListener('click', deleteCar);
            });
        })
        .catch(error => console.error('Error fetching car data:', error));
}
