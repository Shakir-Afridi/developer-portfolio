import React from 'react'
import { CSSIcon, ReactIcon, NodeIcon, JavaScriptIcon, HTMLIcon, GitHubIcon, SqlIcon, MySQLIcon, PostgreSQLIcon, VsCodeIcon } from '../../assets/icons'
import styles from './styles'
import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles(styles);
const image = require('../../assets/javascript_ninja.png')

export default function Aboutme() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <div className={classes.personalData}>
          <img src={image} className={classes.image} />
          <div className={classes.personalInfo}>
            <div><strong>Name:</strong>Shakir Ullah</div>
            <div><strong>Profile:</strong>Sr. Software Engineer - JavaScript</div>
            <div><strong>Email:</strong>shakir.development@gmail.com</div>
            <div><strong>Phone:</strong>(+92) 3336861392</div>
          </div>

        </div>
      </div>
      <div className={classes.aboutme}>
        <h2>A Bit About Me</h2>
        I represent an experienced and advanced skill set of the ReactJS, React with Redux,
        LoopbackJS, NodeJS, MySQL, PostgreSQL, Parse API and Firebase and I'm currently
        working in these technologies. I am also very skillful in creating solutions for
        Android devices as well. I am a specialist in creating and developing multiple apps
        and I also know how to monitor them properly.
        <br />
        I am a graduate in Computer Science and I use my educational and professional
        background to become more efficient in my field.
      </div>
      <br />
      <div className={classes.skills}>
        <h2>Skills And Tools</h2>
        <div className='row'>
          <div className='col-xs-3 col-sm-2'>
            <img width="80px" src={JavaScriptIcon} />
          </div>
          <div className='col-xs-3 col-sm-2'>
            <img width="80px" src={NodeIcon} />
          </div>
          <div className='col-xs-3 col-sm-2'>
            <img width="80px" src={ReactIcon} />
          </div>
          <div className='col-xs-3 col-sm-2'>
            <img width="80px" src={HTMLIcon} />
          </div>
          <div className='col-xs-3 col-sm-2'>
            <img width="80px" src={CSSIcon} />
          </div>
          <div className='col-xs-3 col-sm-2'>
            <img width="80px" src={GitHubIcon} />
          </div>
          <div className='col-xs-3 col-sm-2'>
            <img width="80px" src={VsCodeIcon} />
          </div>
          <div className='col-xs-3 col-sm-2'>
            <img width="80px" src={SqlIcon} />
          </div>
          <div className='col-xs-3 col-sm-2'>
            <img width="80px" src={PostgreSQLIcon} />
          </div>
          <div className='col-xs-3 col-sm-2'>
            <img width="80px" src={MySQLIcon} />
          </div>
        </div>

      </div>
    </>
  )
}
