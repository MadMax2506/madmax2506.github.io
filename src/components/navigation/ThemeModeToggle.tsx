import { useThemeContext } from 'context/ThemeContext/ThemeContext';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { DarkMode as DarkModeIcon, LightMode as LightModeIcon } from '@mui/icons-material';

/**
 * Switch between the light and dark mode
 */
export const ThemeModeToggle = (): JSX.Element => {
  const { mode, toggleMode } = useThemeContext();

  return (
    <ToggleButtonGroup value={mode} onChange={toggleMode}>
      <ToggleButton value="light">
        <LightModeIcon />
      </ToggleButton>
      <ToggleButton value="dark">
        <DarkModeIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
