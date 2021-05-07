import React, { useState, useEffect, useCallback } from 'react';
import { Table, Button } from 'reactstrap';
import './../App.css';

import EditaAlumne from './../Components/EditaAlumne';
import AddAlumne from './../Components/AddAlumne';
import BorraAlumne from './../Components/BorraAlumne';


import { getAlumnos, getClases } from '../Crud';


function Alumnes() {

const [ llista, setLlista ] = useState([]);
const [ clases, setClases ] = useState([]);
const [ alumnoSel, setAlumnoSel ] = useState([]);
const [ showEdita, setShowEdita ] = useState(false);
const [ showAdd, setShowAdd ] = useState(false);
const [ showBorra, setShowBorra ] = useState(false);

let fetchData = useCallback(async () => {
    const result = await getAlumnos();
    const body = await result.data
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


function editaAlumno(e) {
    let alumno = llista.filter(el => el.idAlumno.toString() === e.target.value);
    setAlumnoSel(alumno);
    setShowEdita(!showEdita);
}

function handleShowBorra(e) {
    let alumno = llista.filter(el => el.idAlumno.toString() === e.target.value);
    setAlumnoSel(alumno);
    setShowBorra(!showBorra)
}

function handleShowAdd () {
    setShowAdd(!showAdd)
}

    return (
     <div className="principal">
        <h1>Llista d'alumnes</h1>
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
            </tr>
        </thead>
        {llista.map((al) => {
        return (
         <tbody key={al.idAlumno}>
            <tr>
                <td>{al.Nom}</td>
                <td>{al.Cognom}</td>
                <td>{al.NumSeguretatSocial}</td>
                <td>{al.NIE}</td>
                <td>{al.Telefon}</td>
                <td>{canviarData(al.DataNaixement)}</td>
                <td>{al.CorreuElectronic}</td>
                <td><Button color="primary" value={al.idAlumno} onClick={(e) => editaAlumno (e)}>Edita</Button></td>
                <td><Button color="danger" value={al.idAlumno} onClick={(e) => handleShowBorra(e)}>Borra</Button></td>   
            </tr>
        </tbody>
            )
        })}        
     </Table>
     <Button color="primary" onClick={() => handleShowAdd()}>Afegeix nou alumne</Button>


    {showEdita ? 
    <EditaAlumne fetchData={fetchData} clases={clases} setShowEdita={setShowEdita} showEdita={showEdita} alumnoSel={alumnoSel} llista={llista}/> : null
    }

    {showAdd ?
    <AddAlumne fetchData={fetchData} clases={clases} setShowAdd={setShowAdd} showAdd={showAdd} /> : null}

    {showBorra ? 
    <BorraAlumne fetchData={fetchData} setShowBorra={setShowBorra} showBorra={showBorra} alumnoSel={alumnoSel}/> : null }

     </div>
    )
    
}


export default Alumnes