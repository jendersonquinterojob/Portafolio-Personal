// CONSTANTES
const btn_menu = document.querySelector('.btn-menu');
const btns_opcion = document.querySelectorAll('.btn-opcion');
const formulario = document.querySelector('#formulario');
const inputs = document.querySelectorAll('#formulario input');
const textarea = document.querySelector('#formulario textarea');

const expressions = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	asunto: /^[a-zA-Z0-9À-ÿ\s]{1,40}$/,
    mensaje: /^.{4,1000}$/s
}

const validaciones = {
    nombre: false,
	correo: false,
	asunto: false,
    mensaje: false
}
// FIN DE LAS CONSTANTES

// EVENTOS CON BOTONES (MENÚ MÓVIL)
btn_menu.addEventListener('click', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
});

btns_opcion.forEach((btn_opcion) => {
    btn_opcion.addEventListener('click', () => {
        const mobileMenu = document.querySelector('.mobile-menu');
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
    });
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    if(validaciones.nombre && validaciones.correo && validaciones.asunto && validaciones.mensaje) {
        formulario.reset();
        
        // Limpiar estilos visuales
        ['name', 'email', 'subject'].forEach(id => {
            const input = document.getElementById(id);
            const icon = document.getElementById(`ico-${id}`);
            input.classList.remove('border-green-500', 'border-red-500', 'focus:border-green-500', 'focus:border-red-500', 'focus:ring-green-500', 'focus:ring-red-500');
            input.classList.add('border-slate-200', 'focus:border-secondary', 'focus:ring-secondary');
            icon.className = 'fas';
        });
        
        const msgElement = document.getElementById('message');
        msgElement.classList.remove('border-green-500', 'border-red-500', 'focus:border-green-500', 'focus:border-red-500', 'focus:ring-green-500', 'focus:ring-red-500');
        msgElement.classList.add('border-slate-200', 'focus:border-secondary', 'focus:ring-secondary');

        // Resetear validaciones
        validaciones.nombre = false;
        validaciones.correo = false;
        validaciones.asunto = false;
        validaciones.mensaje = false;

        Swal.fire({
            icon: 'success',
            title: '¡Mensaje enviado!',
            text: 'Me pondré en contacto contigo pronto.',
            confirmButtonColor: '#1e293b'
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error en formulario',
            text: 'Por favor verifique los datos ingresados',
            confirmButtonColor: '#1e293b'
        });
    }
});
// FIN EVENTOS CON BOTONES

// VALIDACIONES DEL FORMULARIO
const validarCampo = (expression, target, idInput, idIcono, campoValidacion) => {
    const inputElement = document.getElementById(idInput);
    const iconoElement = document.getElementById(idIcono);

    if (expression.test(target)) {
        inputElement.classList.remove('border-red-500', 'border-slate-200', 'focus:border-secondary', 'focus:ring-secondary', 'focus:border-red-500', 'focus:ring-red-500');
        inputElement.classList.add('border-green-500', 'focus:border-green-500', 'focus:ring-green-500');
        iconoElement.classList.remove('fa-times', 'text-red-500');
        iconoElement.classList.add('fa-check', 'text-green-500');
        validaciones[campoValidacion] = true;
    } else {
        inputElement.classList.remove('border-green-500', 'border-slate-200', 'focus:border-secondary', 'focus:ring-secondary', 'focus:border-green-500', 'focus:ring-green-500');
        inputElement.classList.add('border-red-500', 'focus:border-red-500', 'focus:ring-red-500');
        iconoElement.classList.remove('fa-check', 'text-green-500');
        iconoElement.classList.add('fa-times', 'text-red-500');
        validaciones[campoValidacion] = false;
    }
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case 'Nombre':
            validarCampo(expressions.nombre, e.target.value, 'name', 'ico-name', 'nombre');
            break;
        case 'Correo':
            validarCampo(expressions.correo, e.target.value, 'email', 'ico-email', 'correo');
            break;
        case 'Asunto':
            validarCampo(expressions.asunto, e.target.value, 'subject', 'ico-subject', 'asunto');
            break;
        case 'Mensaje':
            const msgElement = document.getElementById('message');
            if (expressions.mensaje.test(e.target.value)) {
                msgElement.classList.remove('border-red-500', 'border-slate-200', 'focus:border-secondary', 'focus:ring-secondary', 'focus:border-red-500', 'focus:ring-red-500');
                msgElement.classList.add('border-green-500', 'focus:border-green-500', 'focus:ring-green-500');
                validaciones['mensaje'] = true;
            } else {
                msgElement.classList.remove('border-green-500', 'border-slate-200', 'focus:border-secondary', 'focus:ring-secondary', 'focus:border-green-500', 'focus:ring-green-500');
                msgElement.classList.add('border-red-500', 'focus:border-red-500', 'focus:ring-red-500');
                validaciones['mensaje'] = false;
            }
            break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

textarea.addEventListener('keyup', validarFormulario);
textarea.addEventListener('blur', validarFormulario);
// FIN VALIDACIONES DEL FORMULARIO