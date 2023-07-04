import { DarkMode as DarkModeIcon, LightMode as LightModeIcon, Sync as SyncIcon } from '@mui/icons-material';
import { ToggleButton, ToggleButtonGroup, ToggleButtonGroupProps } from '@mui/material';
import { ThemeMode, useThemeContext } from 'context/ThemeContext/ThemeContext';
import { MouseEvent } from 'react';

type ThemeModeToggle = Required<Pick<ToggleButtonGroupProps, 'color'>>;

/**
 * Switch between the light and dark mode
 */
export const ThemeModeToggle = (props: ThemeModeToggle): JSX.Element => {
  const { color } = props;
  const { themeMode, changeThemeMode } = useThemeContext();

  const handleMode = (_: MouseEvent<HTMLElement>, val: ThemeMode) => changeThemeMode(val as ThemeMode);

  return (
    <ToggleButtonGroup value={themeMode} exclusive onChange={handleMode} color={color}>
      <ToggleButton value={ThemeMode.LIGHT}>
        <LightModeIcon fontSize="small" />
      </ToggleButton>

      <ToggleButton value={ThemeMode.DARK}>
        <DarkModeIcon fontSize="small" />
      </ToggleButton>

      <ToggleButton value={ThemeMode.SYNC}>
        <SyncIcon fontSize="small" />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
