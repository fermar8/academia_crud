import React, { useState, useEffect, useCallback } from 'react';
import { Table, Button } from 'reactstrap';
import './../App.css';

import EditaClasse from './../Components/EditaClasse';
import AddClasse from './../Components/AddClasse';
import BorraClasse from './../Components/BorraClasse';
import MostraClasse from './../Components/MostraClasse';


import { getClases, getProfesores, getAlumnos } from '../Crud';


function Clases() {

const [ llista, setLlista ] = useState([]);
const [ alumnes, setAlumnes ] = useState([]);
const [ profes, setProfes ] = useState([]);
const [ claseSel, setClaseSel ] = useState([]);
const [ showMostra, setShowMostra ] = useState(false);
const [ showEdita, setShowEdita ] = useState(false);
const [ showAdd, setShowAdd ] = useState(false);
const [ showBorra, setShowBorra ] = useState(false);


let fetchData = useCallback(async () => {
    const result = await getClases();
    const result2 = await getProfesores();
    const result3 = await getAlumnos();
    const body = await result.data
    const bodyProfes = await result2.data;
    const bodyAlumnes = await result3.data;
    setProfes(bodyProfes);
    setAlumnes(bodyAlumnes)
    setLlista(body);
}, []) 

useEffect(() => {
    fetchData();
}, [fetchData]) 

function handleShowClase(e) {
    let clase = llista.filter(el => el.idClase.toString() === e.target.value);
    let alumnos = alumnes.filter(el => el.clase_idClase.toString() === e.target.value);
    let profesores = profes.filter(el => el.clase_idClase.toString() === e.target.value);
    setClaseSel(clase);
    setAlumnes(alumnos);
    setProfes(profesores);
    setShowMostra(!showMostra);
}

function editaClase(e) {
    let clase = llista.filter(el => el.idClase.toString() === e.target.value);
    setClaseSel(clase);
    setShowEdita(!showEdita);
}

function handleShowBorra(e) {
    let clase = llista.filter(el => el.idClase.toString() === e.target.value);
    setClaseSel(clase);
    setShowBorra(!showBorra)
}

function handleShowAdd () {
    setShowAdd(!showAdd)
}

    return (
     <div className="principal">
        <h1>Classes</h1>
     <Table responsive={true}>
        <thead>
            <tr>
                <th>Nom</th>
                <th>Horari</th>
            </tr>
        </thead>
        {llista.map((cl) => {
        return (
         <tbody key={cl.idClase}>
            <tr>
                <td>{cl.Nom}</td>
                <td>{cl.Horario}</td>
                <td><Button color="secondary" value={cl.idClase} onClick={(e) => handleShowClase(e)}>Amplia</Button></td>
                <td><Button color="primary" value={cl.idClase} onClick={(e) => editaClase (e)}>Edita</Button></td>
                <td><Button color="danger" value={cl.idClase} onClick={(e) => handleShowBorra(e)}>Borra</Button></td>   
                
            </tr>
        </tbody>
            )
        })}        
     </Table>
     <Button color="primary" onClick={() => handleShowAdd()}>Afegeix nova classe</Button>

    {showMostra ?
    <MostraClasse fetchData={fetchData} alumnes={alumnes} profes={profes} setShowMostra={setShowMostra} showMostra={showMostra} claseSel={claseSel} llista={llista}/> 
    : null}

    {showEdita ? 
    <EditaClasse fetchData={fetchData} setShowEdita={setShowEdita} showEdita={showEdita} claseSel={claseSel} llista={llista}/>
    : null
    }

    {showAdd ?
    <AddClasse fetchData={fetchData} setShowAdd={setShowAdd} showAdd={showAdd} /> 
    : null}

    {showBorra ? 
    <BorraClasse fetchData={fetchData} setShowBorra={setShowBorra} showBorra={showBorra} claseSel={claseSel}/> 
    : null }

     </div>
    )
    
}


export default Clases