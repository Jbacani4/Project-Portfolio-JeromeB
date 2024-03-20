import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import  GitHubIcon  from '@material-ui/icons/GitHub';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <a href='https://www.instagram.com/jeromebaguette/' target='_blank' rel='noopener noreferrer'>
        <InstagramIcon />
        </a>
        
        <a href='https://github.com/Jbacani4' target='_blank' rel='noopener noreferrer'>
        <GitHubIcon />
        </a>

        <a href='https://www.linkedin.com/in/jerome-bacani-a7ab5a152/' target='_blank' rel='noopener noreferrer'>
        <LinkedInIcon />
        </a>
        </div>
        
        <p> &copy; 2024 jeromeb</p>
    </div>
  )
}

export default Footer