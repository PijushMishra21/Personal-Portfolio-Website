

// window.addEventListener('DOMContentLoaded', function() {
//   const messageContainer = document.getElementById('messageContainer');
//   messageContainer.style.display = 'block';
//   setTimeout(() => {
//     messageContainer.style.display = 'block';
//   }, 5000);
//   console.log('animated');
// });







window.onload = function() {
 let textElement = document.querySelector('.heading5');
 let textContents = ["('A FRONTEND WEB DEVELOPER')", "('A FRONTEND ENGINEAR')", "('A REACTJS DEVELOPER')", "('A JAVASCRIPT DEVELOPER')","('A SOFTWARE DEVELOPER')","('A UI/UX DEVELOPER')"]; 
 let currentIndex = 0;
 let currentText = "";
 let speed = 50; // Typing speed 
 let typingTimer;

 function typeText() {
     currentText = textContents[currentIndex];
     textElement.textContent = "";
     let index = 0;
     typingTimer = setInterval(function() {
         if (index < currentText.length) {
             textElement.textContent += currentText.charAt(index);
             index++;
         } else {
             clearInterval(typingTimer);
             setTimeout(deleteText, 1000); // Delay before deleting
         }
     }, speed);
 }

 function deleteText() {
     let index = currentText.length - 1;
     typingTimer = setInterval(function() {
         if (index >= 0) {
             textElement.textContent = currentText.substring(0, index);
             index--;
         } else {
             clearInterval(typingTimer);
             currentIndex = (currentIndex + 1) % textContents.length;
             setTimeout(typeText, 1000); // Delay before typing next text
         }
     }, speed);
 }

 // Start typing the text content when the page loads
 typeText();
};





    
// function clearForm(){
//   document.getElementById("contact_form").reset();
// }
// let Contact_form = document.getElementById("contact_form");
// Contact_form.addEventListener('submit',()=>{
//   // event.preventDefault();
//   clearForm();
// })





//     async function handleSubmit(event) {
//       event.preventDefault();
//       let status = document.getElementById("my-form-status");
//       let data = new FormData(event.target);
//       fetch(event.target.action, {
//         method: form.method,
//         body: data,
//         headers: {
//             'Accept': 'application/json'
//         }
//       }).then(response => {
//         if (response.ok) {
//           status.innerHTML = "Thanks for your submission!";
//         //   form.reset()
//         form.textContent= "";
//         } else {
//           response.json().then(data => {
//             if (Object.hasOwn(data, 'errors')) {
//               status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
//             } else {
//               status.innerHTML = "Oops! There was a problem submitting your form"
//             }
//           })
//         }
//       }).catch(error => {
//         status.innerHTML = "Oops! There was a problem submitting your form"
//       });
//     }
//     contact_form.addEventListener("submit", handleSubmit);

      

      // window.addEventListener('load', function() {
      //   let skillsContainers = document.querySelectorAll('.skills-container');
      //   let delay = 0.1;
      
      //   skillsContainers.forEach(function(container) {
      //     container.style.animationDelay = delay + 's';
      //     delay += 0.1;
      //   });
      // });


