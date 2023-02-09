function livetype(inputFieldId, outputId) {
    const inputField = document.getElementById(inputFieldId);
    const output = document.getElementById(outputId);
  
    inputField.addEventListener('input', function() {
      output.textContent = inputField.value;
    });
};

livetype('position','r-position');
livetype('employer','r-employer');
livetype('start_date','r-start_date');
livetype('due_date','r-due_date');
livetype('due_date','r-due_date');
livetype('description','r-description');



