'use strict';


function copyMarkup() { 
    const elements = document.querySelectorAll('.elementToCopy');

    elements.forEach(element => {
        element.addEventListener('click', function () {
            // Create a temporary textarea element
            const textarea = document.createElement('textarea');
            textarea.value = element.innerHTML;

            // Append the textarea to the body
            document.body.appendChild(textarea);

            // Select the textarea content and copy it to clipboard
            textarea.select();
            document.execCommand('copy');

            // Remove the textarea from the DOM
            document.body.removeChild(textarea);

            // Alert or console log a message to indicate successful copying
            alert('HTML copied to clipboard!');
            // console.log('HTML copied to clipboard:', element.outerHTML);
        });
    });
}




// function copyMarkup() { 
//     const abcdElement = document.querySelector('.elementToCopy');
    
//     abcdElement.addEventListener('click', function (event) {
//       const childMarkup = event.target.innerHTML;
      
//       navigator.clipboard.writeText(childMarkup)
//         .then(() => {
//           console.log('Child markup copied to clipboard:', childMarkup);
//           alert('Child markup copied to clipboard!');
//         })
//         .catch(err => {
//           console.error('Unable to copy:', err);
//           alert('Failed to copy child markup to clipboard.');
//         });
//     });
//   }








document.addEventListener('DOMContentLoaded', copyMarkup);

// Trigger the function when a button is clicked (or any other event)
// const copyButton = document.getElementById('copyButton'); // Assuming you have a button with id="copyButton"
// copyButton.addEventListener('click', copyMarkup);



// console.log('>>>copyHTMLToClipboard()>>>>');