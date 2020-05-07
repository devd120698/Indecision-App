console.log("App.js is running");

const app={
    "title": "Indecision app",
    "subtitle": "Put your life in the hands of the computer",
    "options": [],
};
const onFormSubmit=(e) =>{
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = "";
        renderLength();
    }
};

const removeAll = ()=>{
    app.options = [];
    renderLength();
};

const numbers = [10, 55, 24];

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const renderLength = ()=>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length>0 ? "Here are your options":"No options"}</p>
            <button disabled={(app.options.length === 0)} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove all</button>
            {
                app.options.map((option)=>{
                    return <li key = {option}>{option}</li>;
                })
            }
            
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, document.getElementById("app"));
};
renderLength();