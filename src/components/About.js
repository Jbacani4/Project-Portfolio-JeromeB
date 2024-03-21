import React from 'react';
import styled from 'styled-components';
import profilePic from '../assets/pfpic.png';

function About() {
  return (
    <AboutContainer>
      <div className='main'>
        <div className='profilePic'>
          <img src={profilePic} alt='Profile' />
        </div>
        <div className='description'>
          <p>
            Bonjour hi, <span className='accent'>I'm Jerome Bacani!</span> A Full-Stack Web Developer that is always eager to take on new challenges and projects using my various set of skills within my toolkit. One can usually find me deeply immersed in video games and d&d. Outside of tech, <span className='accent' >I am an aspiring ballerino</span>.
          </p>
        </div>
      </div>
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  width: 100%;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  color: #27282b;

  .main {
    width: 100%;
    height: calc(110vh - 10px);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #27282b;
    color: #f0f0f0;
    position: relative;
    padding: 20px; 

    @media (max-width: 768px) {
      flex-direction: column;
    }

    .profilePic {
      width: 250px;
      height: 370px;
      border-radius: 10%;
      overflow: hidden;
      margin-right: 20px; 
      background-color: white;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .description {
      width: 40%; 
      font-size: 30px;
      text-align: left;

    .accent {
      
      color: pink;
    }

      @media (max-width: 768px) {
        width: 100%; 
        margin-top: 20px; 
      }
    }
  }
`;

export default About;