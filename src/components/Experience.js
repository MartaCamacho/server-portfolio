import React, { Component } from 'react';
import service from "../lib/service";

export default class Experience extends Component {
    state = {
        listOfExperiences: [],
    }
    
        componentDidMount = async () => {
          await this.setState({ listOfExperiences: this.props.allExperiences })
        }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
