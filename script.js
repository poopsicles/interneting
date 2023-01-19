function addPerson() {
  // Get the form input values
  const name = document.querySelector('#name').value;
  const matric = document.querySelector('#matric').value;
  const age = document.querySelector('#age').value;
  const food = document.querySelector('#food').value;
  const image = document.querySelector('#image').files[0];

  // Check if the form fields are empty
  if (!name || !matric || !age || !food || !image) {
    alert("Please fill in all the fields.");
    return;
  }

  // Create a new FileReader object
  const reader = new FileReader();

  // Add an event listener for when the file has been read
  reader.addEventListener('load', () => {
    // Get the people grid element
    const peopleGrid = document.querySelector('.people-grid');

    // Create the new person
    const newPerson = document.createElement('div');
    newPerson.classList.add('person');

    // Create the image element
    const newPersonImage = document.createElement('img');
    newPersonImage.src = reader.result;
    newPersonImage.alt = name;
    newPerson.appendChild(newPersonImage);

    // Create the name element
    const newPersonName = document.createElement('h3');
    newPersonName.innerHTML = `${name}`;
    newPerson.appendChild(newPersonName);

    // Create the matric element
    const newPersonMatric = document.createElement('p');
    newPersonMatric.innerHTML = `${matric}`;
    newPerson.appendChild(newPersonMatric);

    // Create the age element
    const newPersonAge = document.createElement('p');
    newPersonAge.innerHTML = `${age} years old`;
    newPerson.appendChild(newPersonAge);

    // Create the food element
    const newPersonFood = document.createElement('p');
    newPersonFood.classList.add('light');
    newPersonFood.innerHTML = `<br>${food}`;
    newPerson.appendChild(newPersonFood);

    // Add the new person to the people grid
    peopleGrid.appendChild(newPerson);

    // Get the form element
    const form = document.querySelector('form');

    // Reset the form fields
    form.reset();
  });

  // Read the file as a data URL
  reader.readAsDataURL(image);
}