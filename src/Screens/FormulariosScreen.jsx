import React, { useState } from 'react'
import extractFormData from '../Helpers/extractFormData'
import { getFormattedDateMMHHDDMM } from '../Helpers/getFormattedTime'


const FormulariosScreen = () => {

  const [usuarios, setUsuarios] = useState([])
  const [errors, setErrors] = useState({nombre : null, contrasenia:'tu contrasenia es invalida'})

  //función submit que envia el formulario
  const handleSubmitUncontrolledForm =(evento)=> {
    evento.preventDefault()

    const form_jsx= evento.target 

    const nuevo_usuario = extractFormData(form_jsx) //nombre y contrasena
    
    const errores_formulario = {nombre: null, contrasenia: null}
    
    let hayErrores = false

    if (!nuevo_usuario.nombre){
      errores_formulario.nombre = 'Falta un nombre'
      hayErrores = true
    } 
    setErrors(errores_formulario)

    if (!nuevo_usuario.contrasenia){
      errores_formulario.contrasenia= 'falta una contrasenia'
      hayErrores = true
    }
    setErrors (errores_formulario)
    
    if (!hayErrores){
      nuevo_usuario.hora_creacion = getFormattedDateMMHHDDMM()

      setUsuarios(
       (prevUsuariosState)=>{
        return [...prevUsuariosState,nuevo_usuario]
       } 
      )
      console.log('formulario enviado')
    }
  }
    //setUsuarios([...usuarios, nuevo_usuario]) * ver si sirve + adelante*
    

   /* 
    const form_data= new FormData (form_jsx)

    //console.log(form_data.get('nombre'))

    const form_keys = form_data.keys().toArray()
    const form_values={}

    for (let key of form_keys) {
      form_values[key] = form_data.get(key)
    }*/
     // const form_values= extractFormData(form_jsx)

   // console.log(form_values)
    //const nombre= form_data.get('nombre')
    


  
  console.log(usuarios)
  return (
    <div>
        <h1>Formularios en React</h1>
        <form onSubmit={handleSubmitUncontrolledForm}>
            <label htmlFor="nombre">Ingrese su nombre</label>
            <br>
            </br>
                      <input type="nombre" id='nombre' name='nombre' />
            {errors.nombre && <span style={{color:'red'}}>{errors.nombre} </span>}

            <label htmlFor="contrasenia">Ingrese su contrasenia</label>
            <input type="password" id='password' name='contrasenia' />
            {errors.contrasenia && <span style={{color:'red'}}>{errors.contrasenia} </span>}

            <button type='submit'>Confirmar</button>
        </form>
        <UsersList users={usuarios}/>
    </div>
  )
}

const UsersList = ({users}) =>{
return(
  <div>
    {users.map(user=>{
      return <UserCard nombre={user.nombre} contrasenia= {user.contrasenia}/>
    })}

  </div>
)
}
const UserCard = ({nombre, contrasenia})=>{
  return(
    <div>
      <h2>Nombre: {nombre} </h2>
      <h2>Contrasenia:{contrasenia} </h2>
   </div>
  )
}
export default FormulariosScreen