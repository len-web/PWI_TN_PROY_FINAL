import React, { useState } from 'react'

const EstadosScreen = () => {
    const [contador, setContador] = useState(1)
    const [error_contador, setErrorNumeroMinimo] = useState(false)
    
    const incrementar = () => {
        setContador(
            (prevContadorState)=>{
        return prevContadorState + 1
        }
    )
    }
    const decrementar = () => {
        if (contador > 1) {
            setContador(
                (prevContadorState)=>{
                return prevContadorState - 1
            }
        )
        }
        else {
            setErrorNumeroMinimo(true)
        }
    };

const handleShowHiddenText = ()=>{
    setIsHiddenText(
        (prevTextIsHiddenState) => {
            return !prevTextIsHiddenState
        }
    )
}

const [isHiddenText, setIsHiddenText]= useState(false)
 

  return (
    <div>
        {console.log('me imprimi')}
      <h1>Estados Screen</h1>
      <div>
        <button onClick={decrementar}>Restar</button>
        
        <span>{contador}</span>
        <button onClick={incrementar}>Sumar</button>

        {
            error_contador && <span>El estado no puede ser menor a 1</span>
            }
        </div>
        
        <button onClick={handleShowHiddenText}>Abrir</button>

       {
        !isHiddenText && <span>Texto oculto</span>
       } 
       {/*<span hiddn={isHiddenText}>Texto oculto</span>*/}
        
      </div>
      
  )
}

export default EstadosScreen
