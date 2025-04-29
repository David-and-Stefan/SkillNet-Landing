import bgTranslation from './bg/translation.json';
import enTranslation from './en/translation.json';
import { Locale } from './locale';

export default Object.seal({
  [Locale.EN]: Object.seal({ translation: enTranslation }),
  [Locale.BG]: Object.seal({ translation: bgTranslation }),
});
