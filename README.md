# Processo Seletivo Frontend Junior da Sigma/TJMT
Bem-vindo ao processo seletivo para desenvolvedor Frontend Junior do TJMT/Sigma!

## O Desafio - Projeto Democraticamente

Crie uma aplicação Web utilizando a API do TSE (Tribunal Superior Eleitoral) como fonte de dados.

## Endpoints:
#### [Presidente](http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2018/BR/2022802018/1/candidatos)
#### [Governador](http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2018/MT/2022802018/3/candidatos)
#### [Senador](http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2018/MT/2022802018/5/candidatos)
#### [Deputado Federal](http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2018/MT/2022802018/6/candidatos)
#### [Deputado Estadual](http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2018/MT/2022802018/7/candidatos)
http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/buscar/2018/BR/2022802018/candidato/${id_candidato} // URL de detalhes dos candidatos a presidência.

http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/buscar/2018/MT/2022802018/candidato/${id_candidato} // URL de detalhes das outras classes de candidatos

### Para visualizar o resultado das API's, vocês poder usar:
##### [JSON Formatter](https://jsonformatter.curiousconcept.com/)
##### [JSON Formatter-Chrome extension](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=pt-BR)
##### [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/?hl=pt-br)
##### [Postman | API Development Environment](https://www.getpostman.com/)


## Requisitos
Deverá atender os requisitos abaixo para todas categorias de candidatos: Presidente/Governador/Senador/Deputado Federal/Deputado Estadual
### Obrigatório
* Página para Listagem dos candidatos
* Página para visualização dos detalhes do candidato
    * Foto
    * Nome
    * Cargo
    * Candidatura (Deferida/Indeferida)
    * Partido
    * Número do Candidato
    * Vices Candidatos

### Observações/Dicas

* Não limite-se às funcionalidades acima. Qualquer outra feature extra (e não obrigatória) é bem-vinda. Por exemplo:
    * Campo de pesquisa por nome na páginas de listagem
    * Campo de pesquisa por estado do candidato
    * Criar uma lista para salvar seus candidatos (Pode ser memória ou cache), se persistir é melhor ainda
    
* O layout é por sua conta.
* A arquitetura é por sua conta.
* Qualquer framework SPA (Vue.js, React ou Angular) é permitido
* Usar javascript puro é permitido
* Usar CSS puro é permitido
* Usar qualquer pré-processador (LESS ou SASS) é permitido
* Não se esqueça da otimização da velocidade da aplicação e da experiência do usuário.

## Critérios de avaliação

* Usabilidade
* Criatividade
* Código limpo e organizado
* Documentação do projeto (readme)


## Procedimento

* Faça um fork do projeto 
* Ao finalizar a sua aplicação, crie um pull request no projeto de origem.

## Prazo
*  O prazo para criar pull requests é até o dia 01/10/2018, às 12h.

### Dê o seu melhor!
### Boa prova! 
### Qualquer dúvida não hesite em perguntar.
