'use strict';


/**
 * Copy the markup of a DOM element (targetElementClass), remove any undesired CSS class from that markup
 * @param {*} arrCssStringsToRemove
 */

function copyMarkup(targetElementClass, arrCssStringsToRemove) {
    const elements = document.querySelectorAll(targetElementClass);

    elements.forEach(element => {
        element.addEventListener('click', function () {
            // Copy the HTML content of the element
            let copiedHTML = element.innerHTML;

            // Remove CSS strings from the copied HTML if found within class attributes
            arrCssStringsToRemove.forEach(cssString => {
                const regex = new RegExp(`\\b${cssString}\\b`, 'g');
                copiedHTML = copiedHTML.replace(regex, '');
            });

            // Create a temporary textarea element
            const textarea = document.createElement('textarea');
            textarea.value = copiedHTML;

            // Append the textarea to the body
            document.body.appendChild(textarea);

            // Select the textarea content and copy it to clipboard
            textarea.select();
            document.execCommand('copy');

            // Remove the textarea from the DOM
            document.body.removeChild(textarea);

            // Alert or console log a message to indicate successful copying
            alert('HTML copied to clipboard!');
            // console.log('HTML copied to clipboard:', copiedHTML);
        });
    });
}





// 
document.addEventListener('DOMContentLoaded', function() { 
    const cssTarget = '.elementToCopy';
    const classesToRemove = ['in-view'];
    copyMarkup(cssTarget, classesToRemove);
});
