import React from 'react';
import styled from 'styled-components';
//import ProjectCard from '../assets/ProjectCard';
import Pro1 from '../assets/Pro1.png';
import Pro2 from '../assets/Pro2.png';



const Projects = () => (
  <ProjectsContainer>
    <h1 className='projectTitle'>My Projects</h1>
    
    <div className='projectList'>
      <ProjectItem>
        <a href='https://project-js-nyan-cat-teal-ten.vercel.app/' target='_blank'>
        <div className='bgImage' style={{ backgroundImage: `url(${Pro1})` }}></div>
        </a>
        <h1>Nyan Cat Game</h1>
      </ProjectItem>
      
      <ProjectItem>
      <a href='https://react-use-state-six.vercel.app/' target='_blank'>
        <div className='bgImage' style={{ backgroundImage: `url(${Pro2})` }}></div>
      </a>
        <h1>Tic Tac Toc Game</h1>
      </ProjectItem>
    
    </div>
  </ProjectsContainer>
);

const ProjectsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Poppins', sans-serif;
  

  .projectTitle {
    text-align: center;
    color: #27282b;
    font-size: 50px;

    font-family: 'Poppins', sans-serif;
  }

  .projectList {
    width: 70vw;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
    font-family: 'Poppins', sans-serif;

    @media only screen and (max-width: 1300px) {
      grid-template-columns: 1fr 1fr;
    }

    @media only screen and (max-width: 800px) {
      grid-template-columns: 1fr;
    }

    @media only screen and (max-width: 800px) {
      width: 100%;
    }
  }
`;

const ProjectItem = styled.div`
  border-radius: 15px;
  width: 300px;
  height: 300px;
  margin: 40px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: box-shadow 0.3s ease-in;

  &:hover {
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  .bgImage {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    width: 100%;
    height: 200px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  h1 {
    font-size: 25px;
    font-family: 'Poppins', sans-serif;
  }
`;

export default Projects;