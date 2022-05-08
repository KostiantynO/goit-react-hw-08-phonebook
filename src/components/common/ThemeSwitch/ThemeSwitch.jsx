import {
  DayButton,
  NightButton,
  ThemeSwitchStyled,
} from './ThemeSwitch.styled';
import { useTheme } from 'styled-components';
import { useDispatch } from 'react-redux';
import { setTheme } from 'redux/theme';

export const ThemeSwitch = () => {
  const { mode } = useTheme();
  const dispatch = useDispatch();

  return (
    <ThemeSwitchStyled>
      <NightButton onClick={() => dispatch(setTheme('dark'))}>
        {mode === 'dark' ? '🌒' : '🌜'}
      </NightButton>

      <span />

      <DayButton onClick={() => dispatch(setTheme('light'))}>🌞</DayButton>
    </ThemeSwitchStyled>
  );
};
