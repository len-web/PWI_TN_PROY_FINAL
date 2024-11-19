import React from 'react'
import './WorkspaceItem.css'
import { Link } from 'react-router-dom'

const WorkspaceItem=({img, title, miembros, id})=>{
    return(
        <div className="workspace-item">
            <img src={img}/>
            <h2>{title}</h2>
            <span>Hay {miembros.length} miembros</span>
            
            <Link to={'/workspace/' + id}>Ir a el espacio de trabajo</Link>
        </div>
    )
}

export default WorkspaceItem