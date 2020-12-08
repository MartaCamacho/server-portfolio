import React, { Component } from 'react';
import service from "../lib/service";

export default class Projects extends Component {

    constructor(){
        super();
        this.state = { listOfProjects: [] }
      }


        getAllProjects = async () => {
            try {
                const res = await service.allProjects();
                this.setState({ listOfProjects: res });
            } catch (error) {
            }};
        
            componentDidMount() {
                this.getAllProjects();
              }


    render() {
        return (
            <div>
                <section className="my-work" id="work">
                    <h2 className="section-title section-title-work">My work</h2>
                    <p className="section-subtitle section-subtitle-work">subtitle</p>

                    {/* <div className="portfolio"> */}
                    { this.state.listOfProjects ? this.state.listOfProjects.map((project, index) => {
                    return (
                        <div className="portfolio" key={index}>
                    <a href={project.url} className="portfolio-item">
                    {project.title}
                    </a>
                    <p>{project.description}</p>
                    <p>{project.used}</p>
                        </div>
                    )}) : <p>There are no projects yet!</p>}  
                    {/* </div> */}
                </section>
            </div>
        )
    }
}
