import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';

class App extends React.Component{
    render() {
        return (
            <div>
                Jestem w środku APP
            </div>
        )
    }
}

document.addEventListener('DOMContentLoaded',
    function(){
        ReactDOM.render(
            <App />,
            document.getElementById('root')
        );
    });