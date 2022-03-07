import React from 'react';
import Home from '../pages/Home';
import { PageLink, TabLink } from '../models';
import { jsOrange, midBlue, green, pink, red } from '../theme/colors';

import staticData from './json/static.json';
import contactData from './json/contact.json';
import pkg from '../../package.json';

import Aboutme from '../pages/Aboutme';
import Projects from '../pages/Projects';
import Services from '../pages/Services';
import ContactUs from '../pages/ContactUs';

export const pages: PageLink[] = [
  {
    name: 'Home',
    url: '/',
    icon: 'home',
    isInternal: true,
    comp: () => (
      <Home
        staticData={staticData}
        contactData={contactData}
        repoUrl={pkg.repository.url}
      />
    ),
  }
];

export const tabs: TabLink[] = [
  {
    name: 'aboutme.js',
    url: '/aboutme',
    icon: ['fab', 'js'],
    color: jsOrange,
    comp: () => (
      <Aboutme />
    ),
  },
  {
    name: 'projects.config',
    url: '/projects',
    icon: 'sliders-h',
    color: green,
    comp: () => (
      <Projects />
    ),
  },
  {
    name: 'services.sass',
    url: '/services',
    icon: ['fab', 'sass'],
    color: pink,
    comp: () => (
      <Services />
    ),
  },
  {
    name: 'contactus.html',
    url: '/contactUs',
    icon: ['fab', 'html5'],
    color: midBlue,
    comp: () => (
      <ContactUs />
    ),
  },
  // {
  //   name: 'certificates.sass',
  //   url: '/certificates',
  //   icon: ['fab', 'sass'],
  //   color: pink,
  //   mdFileName: 'certificates',
  // },
];
