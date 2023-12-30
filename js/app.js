document.addEventListener('DOMContentLoaded', function () {
    const heroInput = document.querySelector('.hero__input');
    const heroSubmit = document.querySelector('.hero__cta');
    const flexDiv = document.querySelector('.flex');
    const emailInput = document.getElementById('email');
    const emailSubmit = document.getElementById('submit');
    // Crear mensajes de error para el campo de correo electrónico
    const emailErrorMessage = document.createElement('span');
    emailErrorMessage.textContent = 'Please check your email';
    

    // Escuchar cambios en el tamaño de la pantalla
    window.addEventListener('resize', handleScreenSize);

    // Ejecutar la función cuando se carga la página
    handleScreenSize();
    //limiar en caso de haberse asignado clase anteriormente
    if (emailErrorMessage.classList.contains('error-message')) {
        emailErrorMessage.classList.remove('error-message');
    }

    if (emailErrorMessage.classList.contains('error-message-submit')) {
        emailErrorMessage.classList.remove('error-message-submit');
    }
    function handleScreenSize() {
        if (window.innerWidth <= 375) {
            // Lógica para manejar el evento de click en el botón del héroe
            heroSubmit.addEventListener('click', function () {
                const isValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(heroInput.value);

                if (!isValid) {
                    emailErrorMessage.classList.add('error-message');
                    heroInput.classList.add('invalid');
                    heroInput.parentNode.insertBefore(emailErrorMessage, heroInput.nextElementSibling);
                } else {
                    heroInput.classList.remove('invalid');
                    if (heroInput.nextElementSibling === emailErrorMessage) {
                        heroInput.parentNode.removeChild(emailErrorMessage);
                    }
                }
            });
            emailSubmit.addEventListener('click', function () {
                const isValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(emailInput.value);

                if (!isValid) {
                    emailErrorMessage.classList.add('error-message-submit');
                    emailInput.classList.add('invalid');
                    emailInput.parentNode.insertBefore(emailErrorMessage, emailInput.nextElementSibling);
                } else {
                    emailInput.classList.remove('invalid');
                    if (emailInput.nextElementSibling === emailErrorMessage) {
                        emailInput.parentNode.removeChild(emailErrorMessage);
                    }
                }
            });
        } else {
            heroSubmit.addEventListener('click', function () {
                const isValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(heroInput.value);
                if (!isValid) {
                    emailErrorMessage.classList.add('error-message');
                    heroInput.classList.add('invalid');
                    flexDiv.parentNode.insertBefore(emailErrorMessage, flexDiv.nextElementSibling);
                } else {
                    heroInput.classList.remove('invalid');
                    if (flexDiv.nextElementSibling === emailErrorMessage) {
                        flexDiv.parentNode.removeChild(emailErrorMessage);
                    }
                }
            });
            emailSubmit.addEventListener('click', function () {
                const isValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(emailInput.value);
                if (!isValid) {
                    emailErrorMessage.classList.add('error-message-submit');
                    emailInput.classList.add('invalid');
                    emailInput.parentNode.insertBefore(emailErrorMessage, emailInput.nextElementSibling);
                } else {
                    emailInput.classList.remove('invalid');
                    if (emailInput.nextElementSibling === emailErrorMessage) {
                        emailInput.parentNode.removeChild(emailErrorMessage);
                    }
                }
            });
        }
    }

});