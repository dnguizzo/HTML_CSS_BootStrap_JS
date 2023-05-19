function validarFormulario(){
    const txtNombre = document.getElementById('txtNombre')
    const txtApellido = document.getElementById('txtApellido')
    const rbSexo = document.getElementsByName('sexo')
    const txtDescripcion = document.getElementById('txtDescripcion')
    // const selectDeportes = document.getElementById('deporte')
    
    //El doble igual evalua el valor, el triple igual, evalua el valor y el tipo)
    //Porque ejemplo para el triple igual no es lo mismo '5' que 5
    if(txtNombre.value.trim() === ''){
        Swal.fire({
            title: 'Faltan completar campos',
            text: 'El nombre es requerido',
            icon: 'warning',
            confirmButtonText: 'OK'
        })
        return false
    }

    if(txtApellido.value.trim() === ''){
        Swal.fire({
            title: 'Faltan completar campos',
            text: 'El apellido es requerido',
            icon: 'warning',
            confirmButtonText: 'OK'
        })
        return false
    }
    
    if(txtDescripcion.value.trim() === ''){
        Swal.fire({
            title: 'Faltan completar campos',
            text: 'La descripcion es requerida',
            icon: 'warning',
            confirmButtonText: 'OK'
        })
        return false
    }
    
    let algunoCheckeado = false
    for(let i = 0; i < rbSexo.length; i++){
        if(rbSexo[i].checked){
            algunoCheckeado = true;
            break
        }
    }
    if(algunoCheckeado == false){
        alert('Debe seleccionar un sexo')
        return false
    }

    return true
}

function guardar(){
    if(validarFormulario()){
        Swal.fire({
            title: 'Persona Registrada Correctamente',
            icon: 'success',
            confirmButtonText: 'OK'
        })
    } else {
        Swal.fire({
            title: 'Rellene los campos requeridos',
            icon: 'warning',
            confirmButtonText: 'OK'
        })
    }
}

