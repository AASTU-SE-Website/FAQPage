// Selecting and Styling all input fields
const inputs = document.querySelectorAll('.input');

// Adding Event Listeners for when the inputs are on focus and blur
inputs.forEach((input) => {
    // When input is on focus state add focus class
    input.addEventListener('focus', function() {
        let parent = this.parentNode;
        parent.classList.add('focus')
    })

    /* 
        when the input is off the state or is blur 
        and only if there is no input value, 
        remove the focus class 
    */
    input.addEventListener('blur', function() {
        let parent = this.parentNode;
        if(this.value == ""){
            parent.classList.remove('focus')
        } 
    })
});

