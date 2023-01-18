function addPerson() {
    // Get the people grid element
    const peopleGrid = document.querySelector('.people-grid');

    // Get the form input values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    // Read the image's base64 data
    const file_reader = new FileReader();
    file_reader.onload = function () {
        newPersonImage.src = file_reader.result; // await the file data
    }
    file_reader.readAsDataURL(document.getElementById('image').files[0]); // asynchronously get the data

    // Create the new person element
    const newPerson = document.createElement('div');
    newPerson.classList.add('person');

    // Create the image element
    const newPersonImage = document.createElement('img');
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