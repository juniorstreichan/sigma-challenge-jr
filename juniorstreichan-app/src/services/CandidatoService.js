import {
    ENDPOINT_LIST_PRESIDENTE,
    ENDPOINT_LIST_GOVERNADOR,
    ENDPOINT_LIST_SENADOR,
    ENDPOINT_LIST_DEP_FEDERAL,
    ENDPOINT_LIST_DEP_ESTADUAL,
    ENDPOINT_CONSULT_BR,
    ENDPOINT_CONSULT_ESTADUAL
} from '../config/apiConfig'




export function getPresidentes() {
    return fetch(ENDPOINT_LIST_PRESIDENTE).then(response => response.json())

}


export function getGovernadores() {
    return fetch(ENDPOINT_LIST_GOVERNADOR).then(response => response.json())

}


export function getSenadores() {
    return fetch(ENDPOINT_LIST_SENADOR).then(response => response.json())
}



export function getDeputadosFederais() {
    return fetch(ENDPOINT_LIST_DEP_FEDERAL).then(response => response.json())

}

export function getDeputadosEstaduais() {
    return fetch(ENDPOINT_LIST_DEP_ESTADUAL).then(response => response.json())

}

export function getPresidenteById(id = 0) {
    return fetch(`${ENDPOINT_CONSULT_BR}/${id}`).then(response => response.json())
}


export function getCandidatoById(id = 0) {
    return fetch(`${ENDPOINT_CONSULT_ESTADUAL}/${id}`).then(response => response.json())
}

