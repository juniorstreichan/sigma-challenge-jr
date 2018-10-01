import {  getEstadoselecionado } from "./estados";

const estadoSigla = ()=>{
    return getEstadoselecionado().sigla
}

const BASE_API_LIST = 'http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2018/'
const BASE_API_CONSULT = 'http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/buscar/2018/'

export const ENDPOINT_LIST_PRESIDENTE = `${BASE_API_LIST}BR/2022802018/1/candidatos`
export const ENDPOINT_LIST_GOVERNADOR = `${BASE_API_LIST}${estadoSigla()}/2022802018/3/candidatos`
export const ENDPOINT_LIST_SENADOR = `${BASE_API_LIST}${estadoSigla()}/2022802018/5/candidatos`
export const ENDPOINT_LIST_DEP_FEDERAL = `${BASE_API_LIST}${estadoSigla()}/2022802018/6/candidatos`
export const ENDPOINT_LIST_DEP_ESTADUAL = `${BASE_API_LIST}${estadoSigla()}/2022802018/7/candidatos`

export const ENDPOINT_CONSULT_BR = `${BASE_API_CONSULT}BR/2022802018/candidato`
export const ENDPOINT_CONSULT_ESTADUAL = `${BASE_API_CONSULT}${estadoSigla()}/2022802018/candidato`



