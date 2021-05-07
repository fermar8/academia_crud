import axios from 'axios';

const API = 'http://localhost:3001/api';

//CRUD Profes

async function getProfesores() {
    try {
        const response = await axios ({
            url: `${API}/profesor`,
            method: 'GET',
        })
        if (response.status === 200) {
        return response
        }
    } catch (e) {
        console.log(e)
    }
}

async function addProfesor(datos) {
    try {
        const response = await axios ({
            url: `${API}/profesor`,
            method: 'POST',
            data: {
                Nom: datos.nom,
                Cognom: datos.cognom,
                NumSeguretatSocial: datos.nSegSoc,
                NIE: datos.NIE,
                Telefon: datos.telefon,
                DataNaixement: datos.dataNaixement,
                CorreuElectronic: datos.correu,
                clase_idClase: datos.id
            }
        });
        if (response.status === 200) {
            return response
        }
    } catch (e) {
        console.log(e)
    }
}

async function patchProfesor(datos) {
    try {
        const response = await axios ({
            url: `${API}/profesor/${datos.id}`,
            method: 'PATCH',
            data: {
                Nom: datos.nom,
                Cognom: datos.cognom,
                NumSeguretatSocial: datos.nSegSoc,
                NIE: datos.NIE,
                Telefon: datos.telefon,
                DataNaixement: datos.dataNaixement,
                CorreuElectronic: datos.correu,
                clase_idClase: datos.idClase

            }
        });
        if (response.status === 200) {
        return response
        }
    } catch (e) {
        console.log(e)
    }
}

async function borraProfesor(id) {
    try {
        const response = await axios ({
            url: `${API}/profesor/${id}`,
            method: 'DELETE',
        });
        if (response.status === 200 ) {
        return response
        }
    } catch (e) {
        console.log(e)
    }
}

//CRUD Alumnes

async function getAlumnos() {
    try {
        const response = await axios ({
            url: `${API}/alumno`,
            method: 'GET',
        })
        if (response.status === 200) {
        return response
        }
    } catch (e) {
        console.log(e)
    }
}

async function addAlumnos(datos) {
    try {
        const response = await axios ({
            url: `${API}/alumno`,
            method: 'POST',
            data: {
                Nom: datos.nom,
                Cognom: datos.cognom,
                NumSeguretatSocial: datos.nSegSoc,
                NIE: datos.NIE,
                Telefon: datos.telefon,
                DataNaixement: datos.dataNaixement,
                CorreuElectronic: datos.correu,
                clase_idClase: datos.id
            }
        });
        if (response.status === 200) {
            return response
        }
    } catch (e) {
        console.log(e)
    }
}

async function patchAlumnos(datos) {
    try {
        const response = await axios ({
            url: `${API}/alumno/${datos.id}`,
            method: 'PATCH',
            data: {
                Nom: datos.nom,
                Cognom: datos.cognom,
                NumSeguretatSocial: datos.nSegSoc,
                NIE: datos.NIE,
                Telefon: datos.telefon,
                DataNaixement: datos.dataNaixement,
                CorreuElectronic: datos.correu,
                clase_idClase: datos.idClase
            }
        });
        if (response.status === 200) {
        return response
        }
    } catch (e) {
        console.log(e)
    }
}

async function borraAlumno(id) {
    try {
        const response = await axios ({
            url: `${API}/alumno/${id}`,
            method: 'DELETE',
        });
        if (response.status === 200 ) {
        return response
        }
    } catch (e) {
        console.log(e)
    }
}

//CRUD clases

async function getClases() {
    try {
        const response = await axios ({
            url: `${API}/clase`,
            method: 'GET',
        })
        if (response.status === 200) {
        return response
        }
    } catch (e) {
        console.log(e)
    }
}

async function addClases(datos) {
    try {
        const response = await axios ({
            url: `${API}/clase`,
            method: 'POST',
            data: {
                Nom: datos.nom,
                Horario: datos.horari,
            }
        });
        if (response.status === 200) {
            return response
        }
    } catch (e) {
        console.log(e)
    }
}

async function patchClases(datos) {
    try {
        const response = await axios ({
            url: `${API}/clase/${datos.id}`,
            method: 'PATCH',
            data: {
                Nom: datos.nom,
                Horario: datos.horari,
            }
        });
        if (response.status === 200) {
        return response
        }
    } catch (e) {
        console.log(e)
    }
}

async function borraClase(id) {
    try {
        const response = await axios ({
            url: `${API}/clase/${id}`,
            method: 'DELETE',
        });
        if (response.status === 200 ) {
        return response
        }
    } catch (e) {
        console.log(e)
    }
}



export { getProfesores, patchProfesor, addProfesor, borraProfesor,
         getAlumnos, patchAlumnos, addAlumnos, borraAlumno,
         getClases, patchClases, addClases, borraClase }