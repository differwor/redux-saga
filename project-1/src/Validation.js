export const handleSuccess = (e, className) => {
    e.parentElement.children[2].innerText = '';
    e.parentElement.className = className;
 }
 
 const handleError = (e, message, className) => {
    e.parentElement.children[2].innerText = message;
    e.parentElement.className = className;
 }
 
 export const checkLength = (e, min) => {
    
    const lengthValue = e.value.trim().length;
    if (lengthValue < min && lengthValue > 0) {
       let message = `${e.name.charAt(0).toUpperCase() + e.name.slice(1)} must be at least ${min} characters`;
       handleError(e, message, 'form-control warning');
    } else {
       handleSuccess(e, 'form-control'); 
    }
 }
 
