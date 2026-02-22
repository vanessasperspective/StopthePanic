import pascalDebrunner from '../assets/Images/pascal-debrunner-vBtJYXG6yPA-unsplash.jpg';
import hannaLazar from '../assets/Images/hanna-lazar-NO-lCEHowSs-unsplash.jpg';
import teganConway from '../assets/Images/tegan-conway-yvwSaA5TjoA-unsplash.jpg';
import florianSchindler from '../assets/Images/florian-schindler-9xIY8BQ6_eg-unsplash.jpg';
import daniilSilantev from '../assets/Images/daniil-silantev-bZM8iVXjFaQ-unsplash.jpg';
import jonathanBorba from '../assets/Images/jonathan-borba-JQK137K59_I-unsplash.jpg';
import stanJacobs from '../assets/Images/stan-jacobs--DLso_t4BFs-unsplash.jpg';
import polinaKuzovkova from '../assets/Images/polina-kuzovkova-M5TlpMtJZ7M-unsplash.jpg';
import intricateExplorer from '../assets/Images/intricate-explorer-L6-l45Y_om0-unsplash.jpg';
import atulPandey from '../assets/Images/atul-pandey-CuGMGLngfNI-unsplash.jpg';
import willianJusten from '../assets/Images/willian-justen-de-vasconcellos-hBEIZOrIpRs-unsplash.jpg';

const TOTAL_SCREENS = 20;

export const screenConfig = {
  safe: {
    backgroundImage: pascalDebrunner,
    screenName: 'Safe',
    photoCredit: 'Pascal Debrunner / Unsplash',
    screenNumber: 1,
    totalScreens: TOTAL_SCREENS,
  },
  look: {
    backgroundImage: hannaLazar,
    screenName: 'Look',
    photoCredit: 'Hanna Lazar / Unsplash',
    screenNumber: 2,
    totalScreens: TOTAL_SCREENS,
  },
  listen: {
    backgroundImage: teganConway,
    screenName: 'Listen',
    photoCredit: 'Tegan Conway / Unsplash',
    screenNumber: 3,
    totalScreens: TOTAL_SCREENS,
  },
  link: {
    backgroundImage: florianSchindler,
    screenName: 'Link',
    photoCredit: 'Florian Schindler / Unsplash',
    screenNumber: 4,
    totalScreens: TOTAL_SCREENS,
  },
  breatheIntro: {
    backgroundImage: daniilSilantev,
    screenName: 'Breathe Intro',
    photoCredit: 'Daniil Silantev / Unsplash',
    screenNumber: 5,
    totalScreens: TOTAL_SCREENS,
  },
  breatheOrb: {
    backgroundImage: daniilSilantev,
    screenName: 'Breathe Orb',
    photoCredit: 'Daniil Silantev / Unsplash',
    screenNumber: 6,
    totalScreens: TOTAL_SCREENS,
  },
  ground: {
    backgroundImage: hannaLazar,
    screenName: 'Ground',
    photoCredit: 'Hanna Lazar / Unsplash',
    screenNumber: 7,
    totalScreens: TOTAL_SCREENS,
  },
  bodyScan: {
    backgroundImage: jonathanBorba,
    screenName: 'Body Scan',
    photoCredit: 'Jonathan Borba / Unsplash',
    screenNumber: 8,
    totalScreens: TOTAL_SCREENS,
  },
  visualise: {
    backgroundImage: stanJacobs,
    screenName: 'Visualise',
    photoCredit: 'Stan Jacobs / Unsplash',
    screenNumber: 9,
    totalScreens: TOTAL_SCREENS,
  },
  act: {
    backgroundImage: polinaKuzovkova,
    screenName: 'ACT',
    photoCredit: 'Polina Kuzovkova / Unsplash',
    screenNumber: 10,
    totalScreens: TOTAL_SCREENS,
  },
  cbt: {
    backgroundImage: intricateExplorer,
    screenName: 'CBT',
    photoCredit: 'Intricate Explorer / Unsplash',
    screenNumber: 11,
    totalScreens: TOTAL_SCREENS,
  },
  affirmations: {
    backgroundImage: atulPandey,
    screenName: 'Affirmations',
    photoCredit: 'Atul Pandey / Unsplash',
    screenNumber: 12,
    totalScreens: TOTAL_SCREENS,
  },
  godMenu: {
    backgroundImage: willianJusten,
    screenName: 'God Menu',
    photoCredit: 'Willian Justen de Vasconcellos / Unsplash',
    screenNumber: 13,
    totalScreens: TOTAL_SCREENS,
  },
  patterns: {
    backgroundImage: pascalDebrunner,
    screenName: 'Patterns',
    photoCredit: 'Pascal Debrunner / Unsplash',
    screenNumber: 14,
    totalScreens: TOTAL_SCREENS,
  },
  tetris: {
    backgroundImage: pascalDebrunner,
    screenName: 'Tetris',
    photoCredit: 'Pascal Debrunner / Unsplash',
    screenNumber: 15,
    totalScreens: TOTAL_SCREENS,
  },
  signposting: {
    backgroundImage: willianJusten,
    screenName: 'Signposting',
    photoCredit: 'Willian Justen de Vasconcellos / Unsplash',
    screenNumber: 16,
    totalScreens: TOTAL_SCREENS,
  },
  about: {
    backgroundImage: pascalDebrunner,
    screenName: 'About',
    photoCredit: 'Pascal Debrunner / Unsplash',
    screenNumber: null,
    totalScreens: TOTAL_SCREENS,
  },
  donate: {
    backgroundImage: pascalDebrunner,
    screenName: 'Donate',
    photoCredit: 'Pascal Debrunner / Unsplash',
    screenNumber: null,
    totalScreens: TOTAL_SCREENS,
  },
};

export function getScreenConfig(key) {
  return screenConfig[key] || {};
}
