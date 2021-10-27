// General Testings of React Documentation
import React from 'react'

/* Chapter 2 

- Observações:
 * Elementos são objetos que representam o que é desejado na tela
 * Babel Compila a sintaxe JSX para funções React.createElement()
   que retornam objetos
*/
const element = <p>Some element</p>;

/* Chapter 3
 
- Como é rendenrizado um elemento? 
 * Através de um elemente HTML que possua a id='root', 
   basta passar este elemento na função ReactDOM.render()

- Observação:
 * É possível usar o Debbug do React nas ferramentas do Chrome
*/
let root = document.getElementById('root');

/* Chapter 4

- O que é um Componente React?
 * São representações de partes independentes de uma UI.
 
- Quais tipos de componente?
 * De Classe e de função, ambos 
   recebendo obejto props e retornando um elemento.

- Como se representa um Componente em um elemento?
 * Se usa <NomeDoComponente props='algo' />

- Observações:
 * Pode se passar uma quantidade limitada de props em um 
 componente, caso seja necessário usar funcionalidades não
 gráficas entre componentes, pode se extrair estas 
 funcionalidades em módulos.
 * Props são somente para leitura.
 * Componentes podem referir-se a outros componentes em sua 
 saída
 * Componentes devem agir como funções puras em ralação ao
 seus props.
*/
function Car(props){ 
  return <p>My car is a {props.carName}</p>
}
const element = <Car carName='Sedan' />

/* Chapter 5 

-O que é um state?
 * É o que permite os componentes alterarem sua
   saída em resposta à ações de usuário, resposta de rede,etc.

-O que são métodos de ciclo de vida?
 * São métodos que são chamados quando são Renderizados no DOM 
   ou quando são removidos

-Quais duas formas de usar setState()?
 * Através de um objeto e de uma arrow function.
   E.g:setState({stateName:...})
   E.g:setState( prevState => stateName = prevState.stateName + 1)

-Observações
 * O state deve ser modificado usando o setState();
 * State e props podem ser atualizados de forma assincronas 
 * O setState() mescla o objeto que você atualiza ao objeto do this.state.
 * É possível usar componentes sem state dentro de componentes com state e vice-versa(Lembrando
 stateless=sem state, stateful= com state)
 * A diferença entre state e props, é que props é modificável
 enquanto props é somente para leitura.
*/
class Moto extends React.Component {
  constructor(props){
  super(props);
  this.state={ligado:false};
  }
  componentDidMount(){
    setState({ligado:true});
  }
  render(){
    return <p>Está ligado? {this.state.ligado}</p>;
  }
}

/* Chapter 6

- Como usar eventos em React?
 * Usando camelCase e uma função (Diferente do HTML,
   que seria onclick="texto de código")
   E.g: <button onClick={algumafuncao}>Click!</button>
   Note que a função não tem os parenteses...
 * Componentes de classe, usam métodos como manipuladores
   de evento.

- O que é um Syntect Event?
  É um evento que agrupa diferentes tipos de eventos DOM
  de diferentes Browsers em um único evento sintético com
  um nome padrão.
  E.g: Se no Chrome usa onclick e no Firefox usa onclicked,
  o React usa um evento sintético onClick quer chamará o
  manipulador de evento dependendo do Browser utilizado.

- Como usar um evento?
  No atributo desejado ( um button por exemplo ), se usa
  o nome do evento(do syntect event) e o atribui uma callback   (dentro de uma expreção {} ) tendo como parâmetro o evento.
  E.g: < button onClick={(evento) => { 
    console.log(evento.target.nodeName)
  } // Irá mostrar o nome do elemento que ativou o evento

- Porque usar bind(this) no manipulador de eventos? 
  Por 3 fatores:
  1. Ao chamar o componente e passar a função, não se usa
  o parênteses.
  Por este motiva o this não é definido, 
  E.g: <button onClick={giveAlert}>Clique</button>
  2.Por isso é utilizado no construtor:
  this.giveAlert = this.giveAlert.bind(this);
  ^ Este é o this do construtor, ^ Este é o this da função
  na Classe, e o bind(this) define a função da Classe para
  pertencer à Classe.

- Observação:
 * Não retorne false para pevinir que 
   o React não use seu comportamento padrão
   em vez disso use e.preventDefault() explicitamente,
   onde o 'e' representa o syntetic event
*/

/* Chapter 7
  
- Redenrização Condicional
  É possível usar if, operador ternário e &&(AND) para a
  redenrização de um Elemento.
  E.g: Está no arquivo Grettings.js

 */

/* Chapter 8 

- Listas em React
  Listas podem ser feitas através de um array, por um map 
  por exemplo.
  E devem possuir um id ( quer geralmente é o indice, em
  útimos casos se usa o indice do array)

*/

/* Chapter 9 

- Formulários
  Quando o React renderiza e controla o formulário, é 
  chamado de Controlled component.

  Elementos de formulário como input,textarea, select,
  possuem um atributo value, que pode ser acessado 
  ( event.targt.value ) e alterado através do State,
  o evento terá funções que irão modificar o estado
  do formulário.

  Caso seja necessário utilizar mais de um input, pode ser
  adicionado um novo atributo no elemento chamado "name", 
  e fazer deste novo atributo(name) o resultado do atributo
  value do elemento.
  E.g:Está no arquivo NumerAndAge.js 

/* Chapter 10

- Elevação de State  
  Quando dois ou mais Componentes filhos utilizam o mesmo 
  state em seus componentes, o state pode ser elevado para o
  Componente Pai, tornando o pai como única fonte de verdade 
  do state. E os filhos podem acessar o state do pai.
 */

/* Chapter 11
- Composição vs Herança  
  No React é bastante recomendado o uso de Composição entre os
  componentes ao invés do uso de herança.

- Mais qual diferença entre Herança e Composição?
  Enquanto a herança herda propriedades de uma Classe Pai, a
  Composição compões uma Classe.
  O exemplo abaixo usa o Corpo Humano como exemplo:
  E.g: Classe Mão herda Classe Tecido; // Herança
  E.g: Classe Dedo Compõe Classe Mão; ou Classe Mão é Composta
  por Classe Dedo; // Composição  

- Em React
  Logo ao invés de herança: <Paragrafo /> herda <Pagina /> 
  Uma melhor opção é a Composição: 
  <Pagina>
    <Pragrafo> 
    <Pragrafo> 
    <Pragrafo> 
  </Pagina>

- Uso do props.children
  O props.children ( dentro da div do mesmo componente ) recebe 
  uma expreção JSX para ser renderizada. 
  E.g: function Mensagem(props) { 
    return <div>{props.children}</div>
  }
  function dizerOi (props) {
    return ( <Mensagem><h1>Oiiii</h1></Mensagem>)
  }
  
- Para casos Especiais
  A casos que um Componente possa ter um formato semelhante à outro, 
  basta utilizar as props para este componente especial.
  E.g: function MensagemBomDia(props){
    return (<Mensagem><h1>props.bomdia</h1>)
  }
  E.g:function dizerBomDia(){
    return (
      <MensagemBomDia bomdia="BOM DIAAA!"</MensagemBomDia>
    )
  }
  
- Obs: Também é possível fazer Contenção em Componentes de Classe.

*/

/* Chapter 12
 
 - Para ajudar no Processo de Criação React aqui vai umas dicas:

 1.Identificar Componentes e separá-los em hierarquias na UI.
   * Pode se usar o princípio da Responsabilidade única para
   saber quais são os componentes, e caso o componente cresça, 
   ele será dividivo/extraido para outros componentes.

 2. Criar versão Estática do app, com o intuito de renderizar
 os dados e componentes, sem nenuma interatividade, use os 
 props para passar dados de pai para filh, e não usar state nesta
 etapa.

 3. Identificar quais dados precisam de State, em outras palavras, 
 quais dados serão mutáveis.

 4.Identificar o local do State.E.g: Um state pode ser colocado em 
 um Componente Pai comum entre dois Componentes filhos, pode até 
 se criar um Componente Pai para armazenar o state caso não exista
 um Componente Pai.

 5.Fazer fluxo de dados inverso, ou seja, garantir que o Componente 
 Pai(Ou os componentes pais) receba informações de seus Componentes 
 filhos.E.g: Passar o valor do input dos filhos para o State do pai.

*/

/* React Hooks
 - Passa state para Componentes de Função...

*/
