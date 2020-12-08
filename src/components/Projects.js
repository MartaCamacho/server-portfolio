import React, { Component } from 'react';
import axios from 'axios';

export default class Projects extends Component {
    this.state = {
        listOfProjects: [],
    }

    getAllProjects = () => {
        axios
        .get("http://localhost:4000/api/v1/todos").then(responseFromApi => {
            this.setState({
                listOfTodos: responseFromApi.data
            });
            
          });
        };
    
        componentDidMount() {
            this.getAllTodos();
          }


    render() {
        return (
            <div>
                
            </div>
        )
    }
}
