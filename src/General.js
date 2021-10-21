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
 * Componentes podem referir-se a outros componentes em sua saída
 * Componentes devem agir como funções puras em ralação ao seus
   props.
*/
function Car(props){ 
  return <p>My car is a {props.carName}</p>
}
const element = <Car carName='Sedan' />

/* Chapter 5 (Hard)

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
  Para manipular os formulários, e evitá-los de seu 
  comportamento padrão( Quando aperta submit, ele envia
  os dados e muda a página ) é necessário adicionar um
  evento aos seus elementos ( Como input e textarea ).

*/
