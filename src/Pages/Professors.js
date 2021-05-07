import React, { useState, useEffect, useCallback } from 'react';
import { Table, Button } from 'reactstrap';
import './../App.css';

import EditaProfe from './../Components/EditaProfe';
import AddProfe from './../Components/AddProfe';
import BorraProfe from './../Components/BorraProfe';


import { getProfesores, getClases } from '../Crud';


function Profesors(props) {

const [ llista, setLlista ] = useState([]);
const [ clases, setClases ] = useState([]);
const [ profesorSel, setProfesorSel ] = useState([]);
const [ showEdita, setShowEdita ] = useState(false);
const [ showAdd, setShowAdd ] = useState(false);
const [ showBorra, setShowBorra ] = useState(false);

let fetchData = useCallback(async () => {
    const result = await getProfesores();
    const body = await result.data;
    const result2 = await getClases();
    const body2 = await result2.data;
    setLlista(body);
    setClases(body2)
}, []) 

const canviarData = (data) => {
    let strToArray = data.split('');
    let handleDate = strToArray.splice(0, 10);
    return handleDate.join('');
}

useEffect(() => {
    fetchData();
}, [fetchData]) 


function editaProfe(e) {
    let profe = llista.filter(el => el.idProfesor.toString() === e.target.value);
    setProfesorSel(profe);
    setShowEdita(!showEdita);
}

function handleShowBorra(e) {
    let profe = llista.filter(el => el.idProfesor.toString() === e.target.value);
    setProfesorSel(profe);
    setShowBorra(!showBorra)
}


 function claseProfe (idClaseProfe) {
    const clase =  clases.find(el => el.idClase === idClaseProfe);
    if (clase) {
        return clase.Nom
    } else {
        return ""
    }
}


function handleShowAdd () {
    setShowAdd(!showAdd)
}

    return (
     <div className="principal">
        <h1>Llista de professors</h1>
     <Table responsive>
        <thead>
            <tr>
                <th>Nom</th>
                <th>Cognom</th>
                <th>Núm. Seguretat Social</th>
                <th>NIE</th>
                <th>Telèfon</th>
                <th>Data Naixement</th>
                <th>Correu electrònic</th>
                <th>Classe</th>
            </tr>
        </thead>
        {llista.map((prof) => {
        return (
         <tbody key={prof.idProfesor}>
            <tr>
                <td>{prof.Nom}</td>
                <td>{prof.Cognom}</td>
                <td>{prof.NumSeguretatSocial}</td>
                <td>{prof.NIE}</td>
                <td>{prof.Telefon}</td>
                <td>{canviarData(prof.DataNaixement)}</td>
                <td>{prof.CorreuElectronic}</td>
                <td>{claseProfe(prof.clase_idClase)}</td>
                <td><Button color="primary" value={prof.idProfesor} onClick={(e) => editaProfe (e)}>Edita</Button></td>
                <td><Button color="danger" value={prof.idProfesor} onClick={(e) => handleShowBorra(e)}>Borra</Button></td>   
            </tr>
        </tbody>
            )
        })}        
     </Table>
     <Button color="primary" onClick={() => handleShowAdd()}>Afegeix nou professor</Button>


    {showEdita ? 
    <EditaProfe fetchData={fetchData} clases={clases} setShowEdita={setShowEdita} showEdita={showEdita} profesorSel={profesorSel} llista={llista}/> : null
    }

    {showAdd ?
    <AddProfe fetchData={fetchData} clases={clases} setShowAdd={setShowAdd} showAdd={showAdd} /> : null}

    {showBorra ? 
    <BorraProfe fetchData={fetchData} setShowBorra={setShowBorra} showBorra={showBorra} profesorSel={profesorSel}/> : null }

     </div>
    )
    
}


export default Profesors
