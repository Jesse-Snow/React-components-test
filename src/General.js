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
 * O setState() mescla o objeto que você atualiza ao objeto do 
   this.state.
 * É possível usar componentes sem state dentro de componentes com
 * state e vice-versa(Lembrando stateless=sem state, stateful=
   com state)
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
  ????????????
  ????????????

- Observação:
 * Não retorne false para pevinir que 
   o React não use seu comportamento padrão
   em vez disso use e.preventDefault() explicitamente,
   onde o 'e' representa o syntetic event
*/
