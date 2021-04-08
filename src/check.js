import React, { Component } from 'react';

class check extends Component {
    constructor(props){
        super(props);
        this.state={
            age:40
        }
        // this.handlerf=this.handlerf.bind(this);
    }
    handlerf(){
           console.log(this)
    }
    render() {
        return (
            <div>
                <button onClick={this.handlerf.call(this)}>click</button> 
                // when a button object is created, constructor would be called and the 
                //  handler func is bind to this of 
            </div>
        );
    }
}

export default check;