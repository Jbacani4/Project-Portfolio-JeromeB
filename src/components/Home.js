import React from 'react';
import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import JavascriptIcon from '@mui/icons-material/Javascript';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import DescriptionIcon from '@mui/icons-material/Description';

const HomeContainer = styled.div`
  width: 100%;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  color: #27282b;

  .hero {
    width: 100%;
    height: calc(100vh - 100px);
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
      font-size: 80px;
      color: pink;
      height: 50px;
      margin-top: 50px;
      @media (max-width: 800px){ 
        font-size: 50px;
      }
    }

    .prompt {
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
    .hero h2 {
      font-size: 40px;
    }

    .hero .prompt {
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

const Home = () => {
  return (
    <HomeContainer>
      <div className='hero'>
        <h2>Hello, Jerome here.</h2>
        <div className='prompt'>
          <p>
            A web developer with a passion to learn and create. Based in Montreal, Canada.
          </p>
          <div>
          <a href='https://github.com/Jbacani4' target='_blank' rel='noopener noreferrer'>
              <GitHubIcon />
            </a>
            <a href='https://www.linkedin.com/in/jerome-bacani-a7ab5a152/' target='_blank' rel='noopener noreferrer'>
              <LinkedInIcon />
            </a>
            <a href='https://example.com' target='_blank' rel='noopener noreferrer'>
              <DescriptionIcon />
            </a>
          </div>
          <div>
        <p>Languages:</p>
        <div >
          <HtmlIcon />
          <JavascriptIcon />
          <CssIcon />
        </div>
        </div>
      </div>
      
      </div>
    </HomeContainer>
  );
};

export default Home;