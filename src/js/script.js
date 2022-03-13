// BROOKS SECTION START 

const faqArray = [
    {
        id: "faq1",
        title: "How do i  Join AASTU?",
        tags: ["writers", "write", "how to"],
        count: 0,
        answer: "Because of our user-friendly website, creating an account is simple. Simply go to the top right corner of our website and click the sign up button, and our website will walk you through the rest of the procedure.",
    },
    {
        id: "faq2",
        title: "How can I join the Software engineeing department?",
        tags: ["writers", "write", "how to"],
        count: 0,
        answer: "You can be a writer by signing up as a writer and then filling out the forms for verifying who you are, after the verification process you can write on this platform. you'll also get a certificate indicating you are a writer in this platform",
    },
    {
        id: "faq3",
        title: "Can i write explicit content? ",
        tags: ["writers", "write", "how to"],
        count: 0,
        answer: "It is advised that you write age-appropriate content, however because we have a filtering system in place, it will automatically filter out unnecessary and offensive language.",
    },
    {
        id: "faq4",
        title: "Can a writer also be a reader?",
        tags: ["writers", "write", "how to"],
        count: 0,
        answer: "A writer can, of course, be a reader. A writer has all of the same benefits as a reader, but with more. By heading to our writers website, He/she will be given further alternatives to modify/write content. ",
    },
    {
        id: "faq5",
        title: "Does everyone have access to every article? ",
        tags: ["writers", "write", "how to"],
        count: 0,
        answer: "Our articles are organized by age groups. As a result, an article written for an 18-year-old can only be read by those who are that age or older. The same is true for individuals of all ages.",
    }
]

const faqContainer = document.querySelector(".faqContainer")

// Insers the questions from the array 
faqArray.forEach((question) => {
    const content = `
    <div class="questionsContainer">
            <div class="question">
              <h3>${question.title}</h3>
              <svg
                id="dropdownSvg"
                class="dropdownSvg"
                xmlns="http://www.w3.org/2000/svg"
                width="41.936"
                height="22.433"
                viewBox="0 0 41.936 22.433"
              >
                <path
                  id="Path_123"
                  data-name="Path 123"
                  d="M47.907,33.833a1.483,1.483,0,0,0-2.1,0L27.388,52.293,8.929,33.833a1.482,1.482,0,1,0-2.1,2.1L26.3,55.4a1.447,1.447,0,0,0,1.048.433A1.508,1.508,0,0,0,28.4,55.4L47.871,35.929A1.451,1.451,0,0,0,47.907,33.833Z"
                  transform="translate(-6.4 -33.4)"
                />
              </svg>
              <svg
                id="Cancel"
                class="cancelSvg"
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 45 45"
              >
                <path
                  id="Path_121"
                  data-name="Path 121"
                  d="M22.5,0A22.5,22.5,0,1,0,45,22.5,22.5,22.5,0,0,0,22.5,0Zm0,42.188A19.688,19.688,0,1,1,42.188,22.5,19.687,19.687,0,0,1,22.5,42.188Z"
                  fill="#121313"
                  fill-rule="evenodd"
                />
                <path
                  id="Path_122"
                  data-name="Path 122"
                  d="M28.316,26.267l-7.408-7.41,7.366-7.305a1.4,1.4,0,0,0,0-1.988,1.431,1.431,0,0,0-2.008,0l-7.356,7.3L11.443,9.392a1.422,1.422,0,0,0-2.008,2.014l7.455,7.456L9.393,26.3a1.4,1.4,0,0,0,0,1.988,1.43,1.43,0,0,0,2.01,0l7.487-7.425,7.419,7.419a1.421,1.421,0,1,0,2.007-2.012Z"
                  transform="translate(3.647 3.646)"
                  fill="#121313"
                  fill-rule="evenodd"
                />
              </svg>
            </div>
            <div class="faqAnswer">
              <p>
               ${question.answer}
              </p>
            </div>
          </div>
    `
    faqContainer.innerHTML += content;
})


// Toggles the class to display the answer to the questions 
const faqs = document.querySelectorAll(".questionsContainer");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

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

    input.addEventListener('invalid', () => {
      if(input.value === '') {
        input.setCustomValidity('this input field is required');
        input.parentElement.className += ' error'
      }
    });
});