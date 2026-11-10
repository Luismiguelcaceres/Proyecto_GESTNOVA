    const btnTema = document.getElementById("btnTema");
    const iconoTema = document.getElementById("iconoTema");

    function aplicarTema(oscuro) {
    document.body.classList.toggle("dark-mode", oscuro);
    iconoTema.className = oscuro ? "bi bi-sun" : "bi bi-moon-stars";
    localStorage.setItem("tema", oscuro ? "oscuro" : "claro");
    }

    aplicarTema(localStorage.getItem("tema") === "oscuro");

    btnTema.addEventListener("click", function () {
    aplicarTema(!document.body.classList.contains("dark-mode"));
    });




    

    //ver o ocultar la contra
    const inputPassword = document.getElementById("signupPassword");
    const btnVerPassword = document.getElementById("btnVerPassword");
    const iconoVerPassword = document.getElementById("iconoVerPassword");

    btnVerPassword.addEventListener("click", function () {
    if (inputPassword.type === "password") {
        inputPassword.type = "text";
        iconoVerPassword.className = "bi bi-eye-slash";
    } else {
        inputPassword.type = "password";
        iconoVerPassword.className = "bi bi-eye";
    }
    });

    
    const formRegistro = document.getElementById("formRegistro");
    const inputNombre = document.getElementById("fullName");
    const inputCorreo = document.getElementById("email");
    const mensajeError = document.getElementById("mensajeError");

    formRegistro.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = inputNombre.value.trim();
    const correo = inputCorreo.value.trim();
    const password = inputPassword.value;

    mensajeError.classList.remove("ok");

    if (nombre.length < 3) {
        mensajeError.textContent = "El nombre debe tener al menos 3 letras.";
        return;
    }

    if (!correo.includes("@") || !correo.includes(".")) {
        mensajeError.textContent = "Escribe un correo válido.";
        return;
    }

    if (password.length < 6) {
        mensajeError.textContent = "La contraseña debe tener mínimo 6 caracteres.";
        return;
    }

    mensajeError.classList.add("ok");
    mensajeError.textContent = "Registro exitoso";
    formRegistro.reset();
});