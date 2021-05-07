import React, { useState, useEffect } from 'react';
import { Table, Modal, ModalHeader, ModalBody,
        ModalFooter, Button } from 'reactstrap';
import './../App.css';

function MostraClasse(props) {


const [ profes, setProfes ] = useState([]);
const [ alumnes, setAlumnes ] = useState([]);
const [ nom, setNom ] = useState([]);
const [ horari, setHorari ] = useState([]);

const [ modal, setModal ] = useState(true)


useEffect(() => {
    setProfes(props.profes);
    setAlumnes(props.alumnes);
    setNom(props.claseSel[0].Nom);
    setHorari(props.claseSel[0].Horario);
    setModal(props.showMostra);
    
}, [props.profes, props.alumnes, props.claseSel, props.showMostra]) 

function canviarData(data) {
    let strToArray = data.split('');
    let handleDate = strToArray.splice(0, 10);
    return handleDate.join('');
}

const handleTornar = (modal) => {
    props.fetchData();
    props.setShowMostra(false);
    setModal(!modal);
}

    return (
        <Modal modalClassName="custom-modal-style" size={"xl"} isOpen={modal} toggle={(modal) => handleTornar (modal)}>
        <ModalHeader>Classe {nom} | Horari de {horari} </ModalHeader>
        <ModalBody>
            <Table responsive>
        <thead>
            <tr>
                <th>Professors</th>
            </tr>
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
        {profes.map((prof) => {
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
            </tr>
        </tbody>
            )
        })} 

        <thead>
            <tr>
                <th>Alumnes</th>
            </tr>
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
        {alumnes.map((al) => {
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
            </tr>
        </tbody>
            )
        })}    
     </Table>
     </ModalBody>
     <ModalFooter>
            <Button color="secondary" onClick={(modal) => handleTornar (modal)}>Tornar</Button>
     </ModalFooter>
     </Modal>  
    )
}

export default MostraClasse
