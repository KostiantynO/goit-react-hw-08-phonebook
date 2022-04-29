import { i18n } from 'i18n/i18n';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getCurrentLang } from 'redux/lang';

export const useLang = () => {
  const currentLang = useSelector(getCurrentLang);
  const lang = useMemo(
    () => i18n.entities[i18n.ids[currentLang]],
    [currentLang]
  );
  return lang;
};
