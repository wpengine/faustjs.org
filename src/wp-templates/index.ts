import FrontPage from './FrontPage';
import Page from './Page';
import Single from './Single';
import SingleFaustExplanation from './SingleFaustExplanation';
import SingleFaustHowToGuide from './SingleFaustHowToGuide';
import SingleFaustReference from './SingleFaustReference';
import SingleFaustTutorial from './SingleFaustTutorial';
import Archive from './Archive';

const templates = {
  'front-page': FrontPage,
  page: Page,
  single: Single,
  'single-faust_explanation': SingleFaustExplanation,
  'single-faust_how_to_guide': SingleFaustHowToGuide,
  'single-faust_reference': SingleFaustReference,
  'single-faust_tutorial': SingleFaustTutorial,
  archive: Archive,
};

export default templates;
