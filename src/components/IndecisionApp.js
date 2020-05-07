import React from 'react';
import AddOption from './AddOption.js';
import Header from './Header'
import Action from './Action'
import Options from './Options'
import OptionModal from './OptionModal';
class IndecisionApp extends React.Component {
  state = {
    options : [],
    selectedOption: undefined
  };  
     //LIFECYCLE METHODS - we have learn only three of those, there are more
     //Only class based components have access to lifecycle methods 
     //stateless functional components dont

     //1
    //  handleDeleteOptions(){
    //   this.setState(() => ({ options: [] }));
    // }
    handleDeleteOptions=()=>{
       this.setState(() => ({ options: [] }));
   };
   //handels the deleting selected option state
   handleSelectedOption=()=>{
     this.setState(()=>({ selectedOption:undefined }))
   }
    //2
    handleDeleteOption = (optionToRemove) => {
      this.setState((prevState) => ({
        options: prevState.options.filter((option) => optionToRemove !== option)
      }));
    };
    //DIFFERENCE BETWEEN 1 AND 2 -->
    //1) is a normal ES6 function while 2) is a class property
    //we used 2 by using a "babel transform class properties plugin"
    handlePick = () => {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      this.setState(()=>({
        selectedOption:option
      }));
    }
    handleAddOption=(option) => {
      if (!option) {
        return 'Enter valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists';
      }
  
      this.setState((prevState) => ({
        options: prevState.options.concat(option)
      }));
    }
    componentDidMount=()=> {
      try{
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        if(options){
          this.setState(()=> ({ options }))
        }
      } catch(e){
        //If JSON data is not valid, do nothing at all
      }
    }
    componentDidUpdate=(prevProps, prevState)=>{
      //This is where we save data using JSON.stringify and localStorage.setItem/getItem/removeTem
      if(prevState.options.length !== this.state.options.length){
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
        console.log("qweweqwqre");
      }
      
    }
    //component will unmount - whenever something goes away that is, when we change pages
    componentWillUnmount(){
      console.log("component will unmount");
    }
    
    render() {
      const subtitle = 'Put your life in the hands of a computer';
  
      return (
        <div>
          <Header subtitle={subtitle} />
          <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption
            handleAddOption={this.handleAddOption}
          />
          </div>
          </div>
          
          <OptionModal 
            selectedOption = {this.state.selectedOption}
            handleSelectedOption = {this.handleSelectedOption}
          />
        </div>
      );
    }
}

export default IndecisionApp;