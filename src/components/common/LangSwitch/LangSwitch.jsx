import { i18n } from 'i18n/i18n';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentLang, setCurrentLang } from 'redux/lang';
import { LangSwitchWrapper, LangSwitchSelect } from './LangSwitch.styled';

export const LangSwitch = () => {
  const dispatch = useDispatch();
  const currentLang = useSelector(getCurrentLang);
  const onSetCurrentLang = e => dispatch(setCurrentLang(e.target.value));

  return (
    <LangSwitchWrapper>
      <LangSwitchSelect
        name="lang"
        defaultValue={currentLang}
        id="lang-switch"
        onChange={onSetCurrentLang}
      >
        <option value={i18n.ids.eng}>{i18n.ids.eng}</option>
        <option value={i18n.ids.ukr}>{i18n.ids.ukr}</option>
      </LangSwitchSelect>
    </LangSwitchWrapper>
  );
};
