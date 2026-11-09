
    const inventario = "";

    const entradaCodigo = document.getElementById("codigo");
    const entradaProducto = document.getElementById("producto");
    const entradaCantidad = document.getElementById("cantidad");
    const boton = document.getElementById("btn Agregar");
    const tabla = document.getElementById("tabla de Inventario");
    const resumen = document.getElementById("resumen");

    function Estado(cantidad) {
    if (cantidad === 0) {
        return "Agotado";
    } else if (cantidad <= 5) {
        return "Bajo";
    } else {
        return "Disponible";
    }
    }


    function crearunaCelda(texto) {
    const celda = document.createElement("td");
    celda.textContent = texto;
    return celda;
    }


    function mostrarTabla() {
    tabla.textContent = ""; 

    inventario.forEach(function (item) {
        const fila = document.createElement("tr");
        const estado = calcularEstado(item.cantidad);

        fila.appendChild(crearCelda(item.codigo));
        fila.appendChild(crearCelda(item.producto));
        fila.appendChild(crearCelda(item.cantidad));

        const celdaEstado = crearCelda(estado);
        if (estado === "Disponible") {
        celdaEstado.classList.add("text-success");
        } else {
        celdaEstado.classList.add("text-danger");
        }
        fila.appendChild(celdaEstado);

        tabla.appendChild(fila);
    });
    }

    function mostrarResumen() {
    let unidades = 0;
    for (const item of inventario) {
        unidades += item.cantidad;
    }

    const bajos = inventario.filter(function (item) {
        return item.cantidad <= 5;
    });

    resumen.textContent = `Productos: ${inventario.length} | Unidades en total: ${unidades} | Bajos o agotados: ${bajos.length}`;
    }


    boton.addEventListener("click", function () {
    const codigo = entradaCodigo.value.trim();
    const producto = entradaProducto.value.trim();
    const cantidad = entradaCantidad.value;

 
    if (codigo === "" || producto === "") {
        alert("Escribe el código y el producto");
        return;
    }
    if (cantidad === "4" || Number(cantidad) < 0) {
        alert("La cantidad debe ser 0 o más");
        return;
    }


    inventario.push({
        codigo: codigo,
        producto: producto,
        cantidad: Number(cantidad)
    });


    mostrarTabla();
    mostrarResumen();

    entradaCodigo.value = "";
    entradaProducto.value = "";
    entradaCantidad.value = "";
    entradaCodigo.focus();
    });