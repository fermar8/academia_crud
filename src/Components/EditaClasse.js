import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody,
        ModalFooter, Button, Form, FormGroup, Label, 
        Input } from 'reactstrap';
import './../App.css';


import { patchClases } from '../Crud';

function EditaClasse(props) {
    
const id = props.claseSel[0].idClase

const [ modal, setModal ] = useState(true)

const [ nom, setNom ] = useState();
const [ horari, setHorari ] = useState();

useEffect(() => {
    setModal(props.showEdita);
    setNom(props.claseSel[0].Nom);
    setHorari(props.claseSel[0].Horario);

}, [props.claseSel, props.showEdita, id])

async function guardaClase(e) {
    e.preventDefault();
    await patchClases({
      id,
      nom,
      horari
    });
    props.fetchData();
    props.setShowEdita(false);
}

const handleTornar = (modal) => {
    props.setShowEdita(false);
    setModal(!modal);
}

    return (

        <Modal isOpen={modal} toggle={(modal) => handleTornar (modal)}>
        <ModalHeader>Edita la Classe</ModalHeader>
        <ModalBody>
        <Form style={{marginTop: "20px"}}>
            <FormGroup>
                <Label>Nom</Label>
                <Input 
                placeholder={nom}
                value={nom}
                onChange={(e)=> setNom(e.target.value)} >
                </Input>
            </FormGroup>
            <FormGroup>
                <Label>Horari (matins o tardes)</Label>
                <Input onChange={(e)=> setHorari(e.target.value)} type="select" defaultValue={horari} name="select"> 
                    <option>Matí</option>
                    <option>Tarda</option>
                </Input>
            </FormGroup>
            <ModalFooter>
            <Button color="success" onClick={(e) => guardaClase (e)}>Guardar</Button>
            <Button color="secondary" onClick={(modal) => handleTornar (modal)}>Tornar</Button>
            </ModalFooter>
         </Form>
        </ModalBody>
     </Modal>    
        )
}

export default EditaClasse