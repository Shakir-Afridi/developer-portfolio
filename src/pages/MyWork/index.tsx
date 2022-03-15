import React from 'react'
import styles from './styles'
import { createUseStyles } from 'react-jss';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Carousel } from 'react-bootstrap'
const useStyles = createUseStyles(styles);
const deepreefWebsite = require('../../assets/images/deepreef_website.jpg')
const deepreefAdminPortal = require('../../assets/images/deepreef_admin_portal.png')
const deepreefUserPortal = require('../../assets/images/deepreef_user_portal.png')
const deepreefCalculator = require('../../assets/images/deepreef_calculator.png')
const globusAdminPortal = require('../../assets/images/globus_admin_portal.png')
const globusPortal = require('../../assets/images/globus_portal.png')


export default function MyWork() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Carousel >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={deepreefWebsite}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={deepreefAdminPortal}
            alt="Second slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={deepreefUserPortal}
            alt="Third slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={deepreefCalculator}
            alt="Third slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={globusAdminPortal}
            alt="Third slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={globusPortal}
            alt="Third slide"
          />

        </Carousel.Item>
      </Carousel>
    </div>
  )
}
