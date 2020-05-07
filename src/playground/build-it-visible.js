class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility:false
        };
    }
    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility? "Hide Details":"Show Details"};
                </button>
                {
                    this.state.visibility && 
                    <div>
                        Hey there!
                    </div>
                }
            </div>
        );
    }

}

ReactDOM.render(<Visibility />, document.getElementById("app"));

// console.log("hey there");
// let visibility = false;
// const toggleVisibility=() =>{
//     visibility = !visibility;
//     renderVisible();
// };
// const renderVisible = () =>{
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick = {toggleVisibility}>
//                 {visibility ? "Hide details" : "Show Details"}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>Hey there!</p>
//                 </div>
//             )}
            
//         </div>
    
//     );
//     ReactDOM.render(template, document.getElementById("app"));
// };

// renderVisible();