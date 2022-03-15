import React, { useEffect } from 'react'
import Typed from 'typed.js';
import { createUseStyles } from 'react-jss';
import MainButtons, { MainButtonsProps } from './components/MainButtons';
import { Static } from '../../models';
import styles from './styles';
const image = require('../../assets/javascript_ninja.png')

const useStyles = createUseStyles(styles);

export interface GreeterProps extends MainButtonsProps {
  staticData: Static;
}

export default function Home(props: any) {
  const { staticData, contactData, repoUrl } = props

  const classes = useStyles();

  useEffect(() => {
    const options = {
      strings: staticData.typed,
      typeSpeed: 70,
      backSpeed: 50,
      loop: true,
      smartBackspace: true,
    };

    const typed = new Typed('#typed-insert-point', options);

    return () => {
      typed.destroy();
    };
  }, [staticData]);

  return (
    <section className={classes.root}>
  <img src={image} className={classes.image} />
      <h1 className={classes.heading}>{staticData.mainLine}</h1>
      <div className={classes.typedWrap}>
        <span id="typed-insert-point" style={{ whiteSpace: 'pre' }} />
      </div>
      <MainButtons contactData={contactData} repoUrl={repoUrl} />
    </section>
  )
}
