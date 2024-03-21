import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import styled from 'styled-components';

const FooterContainer = styled.div`
  width: 100%;
  height: 200px;
  background: #38393d;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 10px;
  margin-top: 200px;
  font-family: 'Poppins', sans-serif;

  .socialMedia {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    a {
      color: white;
      font-size: 70px;
      cursor: pointer;
    }
  }

  p {
    color: white;
  }

  @media only screen and (max-width: 600px) {
    .socialMedia a {
      font-size: 50px;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className='socialMedia'>
        <a href='https://www.instagram.com/jeromiromy/' target='_blank' rel='noopener noreferrer'>
          <InstagramIcon />
        </a>
        <a href='https://github.com/Jbacani4' target='_blank' rel='noopener noreferrer'>
          <GitHubIcon />
        </a>
        <a href='https://www.linkedin.com/in/jerome-bacani-a7ab5a152/' target='_blank' rel='noopener noreferrer'>
          <LinkedInIcon />
        </a>
      </div>
      <p>&copy; 2024 jeromebacani</p>
    </FooterContainer>
  );
};

export default Footer;