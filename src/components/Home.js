import React from 'react';
import '../styles/Home.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import  GitHubIcon  from '@material-ui/icons/GitHub';
import JavascriptIcon from '@mui/icons-material/Javascript';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import DescriptionIcon from '@mui/icons-material/Description';

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hello, I'm Jerome Bacani!</h2>
        <div className='prompt'>
          <p>
            A web developer with a passion to learn and create based in Montreal, Canada.
          </p>
        
          <a href='https://github.com/Jbacani4' target='_blank' rel='noopener noreferrer'>
        <GitHubIcon />
        </a>

        <a href='https://www.linkedin.com/in/jerome-bacani-a7ab5a152/' target='_blank' rel='noopener noreferrer'>
        <LinkedInIcon />
        </a>

        <a href='https://www.linkedin.com/in/jerome-bacani-a7ab5a152/' target='_blank' rel='noopener noreferrer'>
        <DescriptionIcon />
        </a>

        <div className='skills'>
          <h1>Languages:</h1>
          
          <div>
          <HtmlIcon />
          <JavascriptIcon />
          
          <CssIcon />
          </div>
          

        </div>

        </div>
      </div>
    </div>
  )
}

export default Home