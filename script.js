// const container = document.querySelector('#allForms');

// container.addEventListener('wheel', (event) => {
//   event.preventDefault();

//   container.scrollLeft += event.deltaX;
// });

console.log("get some");

const scrollToSpans = document.querySelectorAll('#scrollto span');

scrollToSpans.forEach((span) => {
  span.addEventListener('click', (event) => {
    event.preventDefault();

    const formId = span.textContent.toLowerCase().replace(' ', '-') + '-form';
    console.log("Form_Id", formId);
    const formElement = document.getElementById(formId);
    console.log("Form_Element", formElement);

    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
