import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component{

    render(){ 
    	return(
           <div>Your first React App</div>
    	);
    }
}

var app = <App/>;
console.log(app);
var node = document.getElementById("app");
console.log(node);
ReactDOM.render(app, node);
