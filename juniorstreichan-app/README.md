## PORTAL DEMOCRÁTICO / ELEIÇÕES 2018
[http://eleicoes-jedi.herokuapp.com/](http://eleicoes-jedi.herokuapp.com/) <br>
**O que é ?** <br>
Uma aplicação Web que tem como objetivo mostrar informações vindas da API do Tribunal Superior Eleitoral (TSE) referente aos candidatos que participam das eleições 2018.

**O que faz ?** <br>
Esta aplicação possui as seguintes funcionalidades:

 - Listagem de candidatos a presidente, governador(a) (MT), senador(a) (MT), deputado(a) (MT) federal, deputado(a) (MT) estadual  com opção de filtro de resultados por nome, número ou partido.
 - Pagina contendo os detalhes da candidatura como nome, foto, numero, coligação, contato, sites, vices, situação(deferido, indeferido) dentre outros.
 - Visualização dos bens declarados pelo(a) candidato(a).
![enter image description here](https://raw.githubusercontent.com/juniorstreichan/sigma-challenge-jr/master/juniorstreichan-app/src/assets/gifs/navigation.gif)
![enter image description here](https://raw.githubusercontent.com/juniorstreichan/sigma-challenge-jr/master/juniorstreichan-app/src/assets/gifs/navigation-mobile.gif)
#### ESPECIFICAÇÕES TÉCNICAS <br>
Esta aplicação foi implementada no padrão Single Page Application (SPA)
utilizando o Framework [React JS](https://reactjs.org/) e configurado com o utilitário [create-react-app](https://www.npmjs.com/package/create-react-app) ambos desenvolvidos pelo Facebook.

Não foi utilizado Framework de estilização ou biblioteca de componentes como Bootstrap, a estilização da aplicação e seus componentes foi feita somente com CSS.

**Dependências adicionais**
- [react-icons-kit](http://wmira.github.io/react-icons-kit/#/) - Para os Icones
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) - Para Rotas
- [react-spinkit](http://kyleamathews.github.io/react-spinkit/) - Para o componente Loading

   <b>
git clone https://github.com/juniorstreichan/sigma-challenge-jr.git <br>
cd sigma-challenge-jr/juniorstreichan-app <br>
npm install <br>
npm start <br>
 </b>

#### OBSERVAÇÕES <br>
- Utilizei O React pela facilidade de controle e reaproveitamento de componentes visuais.
- Não utilizei Redux no projeto, ainda que fosse necessário, pois ainda não possuo domínio mínimo do padrão Flux e o prazo de entrega era curto.
- Para resolver os problemas de centralização  e redimensionamento  de componentes foi utilizado **flex-box**

##### CONSIDERAÇÕES FINAIS <br>
Foi uma experiência ótima desenvolver este pequeno projeto, pois consegui colocar em prática algumas coisas das quais venho estudando.

Muito Obrigado!
<small>*Junior Erdmann Streichan*</small>

