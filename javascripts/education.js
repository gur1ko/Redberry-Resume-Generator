// get degree information
fetch('https://resume.redberryinternship.ge/api/degrees')
    .then(response => response.json())
    .then(data => {
        let select = document.getElementById('degree');
        data.forEach(item => {
            let option = document.createElement('option');
            option.value = item.id;
            option.textContent = item.title;
            select.appendChild(option);
        })
    })
    .catch(error => console.error(error));
// livetyping function
function livetype(inputFieldId, outputId) {
    const inputField = document.getElementById(inputFieldId);
    const output = document.getElementById(outputId);
  
    inputField.addEventListener('input', function() {
      output.textContent = inputField.value;
    });
};

livetype('institute','r-institute');
livetype('due_date','r-institute_due_date');
livetype('description','r-education_description');
// degree
const degree = document.getElementById('degree');
let resumeDegree = document.getElementById('r-degree');

degree.addEventListener('change', function() {
  let selectedOption = degree.options[degree.selectedIndex];
  console.log(selectedOption.text)
  resumeDegree.textContent = selectedOption.text;
});
