import React from 'react';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {name:'Yudai'};
    }

    handleClick(name){

        this.setState({name:name});

    }

    render(){
        return(
            <div>
                <h1>Hello World, {this.state.name}</h1>

                <button onClick={()=>{this.handleClick('Yudai')}}>Yudai</button>

                <button onClick={()=>{this.handleClick('Naoki')}}>Naoki</button>

            </div>
        );
    }
}

export default App;