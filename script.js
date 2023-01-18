function addPerson() {
    // Get the people grid element
    const peopleGrid = document.querySelector('.people-grid');

    // Get the form input values
    const name = document.querySelector('#name').value;
    const age = document.querySelector('#age').value;
    const image = document.querySelector('#image').value;

    // Create the new person element
    const newPerson = document.createElement('div');
    newPerson.classList.add('person');

    // Create the image element
    const newPersonImage = document.createElement('img');
    newPersonImage.src = image;
    newPersonImage.alt = name;
    newPerson.appendChild(newPersonImage);

    // Create the name element
    const newPersonName = document.createElement('h3');
    newPersonName.innerHTML = `Name: ${name}`;
    newPerson.appendChild(newPersonName);

    // Create the age element
    const newPersonAge = document.createElement('p');
    newPersonAge.innerHTML = `Age: ${age}`;
    newPerson.appendChild(newPersonAge);

    // Add the new person to the people grid
    peopleGrid.appendChild(newPerson);
}