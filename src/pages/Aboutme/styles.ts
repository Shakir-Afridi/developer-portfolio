import { Styles } from 'react-jss';

 import {
   bgDarkBlue,
   textMid,
   textWhite,
   midBlue,
   mllSize,
   lSize,
   breakpoints,
   mlSize,
   sansFont,
   heights,
 } from '../../theme';
 
 export default {
   root: {
     display: 'grid',
     gridTemplateColumns: "1fr 1fr",
     [`@media screen and (max-width: ${breakpoints.desktop})`]: {
      display: 'block',
      textAlign: 'center'
    },
   },
   personalData:{
     width: '100%',
     display: 'inline-flex',
     alignContent: 'center',
     alignItems: 'center',
     [`@media screen and (max-width: ${breakpoints.desktop})`]: {
      display: 'block',
      textAlign: 'center'
    },
   },
   image:{
    width: '150px'
   },
   personalInfo:{
     marginLeft: '10px',
     '& div':{
        padding: '5px',
        '& strong':{
          marginRight: '5px'
        }
     }
   },
   aboutme: {
    textAlign: "justify",
     paddingTop: '30px',
     justifyContent: 'center',
     width: '60%',
     [`@media screen and (max-width: ${breakpoints.desktop})`]: {
      width: '100%'
    },
    '& h2':{
      borderBottom: `3px solid ${textWhite}`
    }
   },
   skills:{
    width: '60%',
    '& h2':{
      borderBottom: `3px solid ${textWhite}`,
      marginBottom: '20px'
    },
     [`@media screen and (max-width: ${breakpoints.desktop})`]: {
      width: '100%'
    },
    '& div':{
      '& div':{
        marginBottom: '20px'
      }
    }
   }
 } as Styles;
 