import { Locale } from './locale';

export default Object.seal({
  [Locale.EN]: await importTranslation(Locale.EN),
  [Locale.BG]: await importTranslation(Locale.BG),
});

async function importTranslation(locale) {
  return Object.seal({
    translation: await import(`./${locale}/translation.json`),
  });
}
