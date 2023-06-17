import {useTranslation} from '../i18n';

const MAPTILER =
  'https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=LEgnW6rLIATYGpn1aObS';

export const useMaptiler = () => {
  const {i18n} = useTranslation();
  const lang = i18n.language;
  const isRU = lang === 'ru';
  return isRU ? MAPTILER : MAPTILER;
};
