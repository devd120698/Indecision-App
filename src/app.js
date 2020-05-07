//import './utils.js';
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));


//CODE after this is just for revision
class OldSyntax {
    constructor(){
        this.name = "dafd";
    }
}

const old = new OldSyntax();
console.log(old);
//-------------------------
//Advantages of New syntax --> 1) No need of making construtor
//2) this binding(for ex ->  this.handlePick = this.handlePick.bind(this);) is not required
// this is already binded since we will be using arrow functions
class NewSyntax{
    name = "qwert";
}

const newSyntax = new NewSyntax();
console.log(newSyntax);


































//What is special about default export import?
//Its not named so, you can call it anything you want
//NAMING IS NOT IMPORTANT