// dom elements:
const successFailedModal = document.getElementById('successFailedModal');
const successFailedModalContainer = document.getElementById('successFailedModalContainer');

// create success hint:
function successFailedModal(imgSrc, title, desc, className) {
    // clear container:
    successFailedModalContainer.innerHTML = '';
    successFailedModal.classList.add('show');
    const successFailedModalContent = document.createElement('div');
    successFailedModalContent.classList = `success-Failed-modal-content ${className}`;
    const successFailedModalStr = `
        <img src="../imgs/icons/${imgSrc}"
        alt="check circle icon" />
        <h3>${title}</h3>
        <p>${desc}</p>
    `;
    successFailedModalContent.innerHTML = successFailedModalStr;
    successFailedModalContainer.appendChild(successFailedModalContent);
    window.setTimeout(_ => {
        successFailedModalContent.classList.add('show');
    }, 300);
    window.setTimeout(_ => {
        successFailedModal.classList.remove('show');
        window.setTimeout(_ => {
            successFailedModalContent.remove();
        }, 300);
    }, 3000);
    successFailedModalContainer.addEventListener('click', event => {
        if (!(event.target.classList.contains('success-Failed-modal-content'))) {
            successFailedModal.classList.remove('show');
            window.setTimeout(_ => {
                successFailedModalContent.remove();
            }, 300); 
        }
    });
}

export {
    successFailedModal
};