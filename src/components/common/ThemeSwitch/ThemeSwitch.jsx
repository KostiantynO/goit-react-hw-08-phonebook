import {
  DayButton,
  NightButton,
  ThemeSwitchStyled,
} from './ThemeSwitch.styled';
import { useTheme } from 'styled-components';

export const ThemeSwitch = () => {
  const { mode, setMode } = useTheme();

  return (
    <ThemeSwitchStyled>
      <NightButton onClick={() => setMode('dark')}>
        {mode === 'dark' ? '🌒' : '🌜'}
      </NightButton>

      <span />

      <DayButton onClick={() => setMode('light')}>🌞</DayButton>
    </ThemeSwitchStyled>
  );
};
