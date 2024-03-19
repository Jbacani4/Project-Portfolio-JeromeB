import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import  GitHubIcon  from '@material-ui/icons/GitHub';

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hello, I'm Jerome Bacani!</h2>
        <div className='prompt'>
          <p>
            A web developer with a passion to learn and create based in Montreal, Canada.
          </p>
        <LinkedInIcon />
        <GitHubIcon />

        <div className='skills'>

        </div>

        </div>
      </div>
    </div>
  )
}

export default Home