import React from 'react';
import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const Contact = () => {
  return (
    <HomeContainer>
      <div className='title'>
        <h2>Contact me:</h2>
        <div className='mail'>
          <p>
            Jerome.jbacani@gmail.com
          </p>
          <p>
            604-725-1449
          </p>
          <div>
          <a href='https://github.com/Jbacani4' target='_blank' rel='noopener noreferrer'>
              <GitHubIcon />
            </a>
            <a href='https://www.linkedin.com/in/jerome-bacani-a7ab5a152/' target='_blank' rel='noopener noreferrer'>
              <LinkedInIcon />
            </a>
            <a href='https://www.instagram.com/jeromiromy/' target='_blank' rel='noopener noreferrer'>
              <InstagramIcon />
            </a>
          </div>
      </div>
      
      </div>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  width: 100%;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  color: #27282b;

  .title {
    width: 100%;
    height: calc(100vh - 10px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #27282b;
    color: #f0f0f0;
    position: relative;

    h2 {
      font-family: 'Poppins', sans-serif;
      font-size: 50px;
      color: pink;
      height: 50px;
      margin-top: 50px;
      @media (max-width: 800px){ 
        font-size: 50px;
      }
    }

    .mail {
      width: 40%;
      font-size: 30px;

      svg {
        font-size: 60px;
        margin: 5px;
        color: white;
      }
    }
  }

  .skills {
    font-size: 35px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    h1 {
      color: white;
      font-size: 20px;
    }

    .list {
      list-style: none;
      width: 60%;
    }

    span {
      font-size: 20px;
    }
  }

  @media only screen and (max-width: 600px) {
    .title h2 {
      font-size: 40px;
    }

    .title .mail {
      margin-top: 10px;
      font-size: 20px;
      width: 80%;
    }

    .skills {
      text-align: center;

      .list {
        padding: 0;
      }

      h2 {
        font-size: 30px;
      }
    }
  }
`;

export default Contact;