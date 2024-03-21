import React from 'react'

const ProjectCard = ({ image, name }) => (
    <div className='projectItem'>
        <div style={{backgroundImage: `url(${image})`}} className='bgImage'/>
        <h1> {name} </h1>
    </div>
  );

export default ProjectCard