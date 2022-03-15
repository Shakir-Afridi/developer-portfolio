/**
 * Main layout styles.
 */
import Color from 'color';
import { Styles } from 'react-jss';
import {
  bgMidBlue,
  textLightBlue,
  mSize,
  breakpoints,
  widths,
  textWhite,comicFont
} from '../../theme';

// Notice that it's an object containing
// global "base" values for the rest of the app.
export default {
  '@global': {
    html: {
      fontSize: '62.5%',
    },
    body: {
      fontFamily: comicFont,
      fontSize: mSize,
      background: bgMidBlue,
      boxSizing: 'border-box',
      color: textWhite,
      overflow: 'hidden'
    },
    button: {
      cursor: 'pointer',
      '&:disabled': {
        cursor: 'default',
      },
    },
    a: {
      color: textLightBlue,
      textDecoration: 'none',
      transition: 'color 500ms ease',
      '&:visited': {
        color: Color(textLightBlue).darken(0.1).string(),
      },
    },
    '.color-transform': {
      transform: 'color 500ms ease',
    },
    '.heading_desc':{
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
    },
    "section": {
      paddingTop: '1rem',
      paddingBottom: '5rem'
    },
    ".wrap": {
      display: 'flex',
      background: '#21252b',
      padding: "2rem",
      borderRadius: "0.5rem",
      boxShadow: "7px 7px 30px -5px rgba(0,0,0,0.1)",
      marginBottom: "2rem",
      "h2": {
        marginTop: "0.5rem",
        marginBottom: "0.5rem",
      },
      "p": {
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        lineHeight: "25px",
      },
    },

    ".wrap:hover": {
      background: 'linear-gradient(135deg,#6394ff 0%,#0a193b 100%)',
      color: "#fff"
    },

    ".ico-wrap": {
      margin: 'auto',
    },

    ".mbr-iconfont": {
      fontSize: "4.5rem !important",
      color: "#313131",
      margin: "1rem",
      paddingRight: '1rem',
    },
    ".vcenter": {
      // margin: "auto"
    },

    ".mbr-section-title3": {
      textAlign: "left",
    },
    ".display-5": {
      fontSize: "1.4rem"
    },
    ".mbr-bold": {
      fontWeight: "700"
    },
    ".display-6": {
      fontSize: '1re'
    }
  },
  root: {
    position: 'absolute',
    height: '100vh',
    width: `calc(100% - ${widths.leftBar}px)`,
    padding: 0,
    margin: 0,
  },
  content: {
    position: 'relative',
    top: 0,
    left: `${widths.leftBar}px`,
    right: 0,
    width: '100%',
    // [`@media screen and (max-width: ${breakpoints.desktop})`]: {
    //   left: '0',
    // },
  },
  explorerOpen: {
    left: `${widths.leftBar + widths.explorer}px`,
  },
  mainContent:{
    height: `calc(100vh - 60px)`,
    overflow: 'auto',
    padding:'20px',
    paddingBottom: '40px'
  }
} as Styles;
