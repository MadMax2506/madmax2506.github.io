import { DarkMode as DarkModeIcon, LightMode as LightModeIcon, Sync as SyncIcon } from '@mui/icons-material';
import { ToggleButton, ToggleButtonGroup, ToggleButtonGroupProps, Tooltip } from '@mui/material';
import { useLanguageContext } from 'context/LanguageContext/LanguageContext';
import { ThemeMode, useThemeContext } from 'context/ThemeContext/ThemeContext';
import { MouseEvent, ReactElement } from 'react';

type ThemeModeIconProps = {
  type: ThemeMode;
  children: ReactElement;
};

const ThemeModeButton = (props: ThemeModeIconProps) => {
  const { type, children } = props;
  const { translate } = useLanguageContext();

  return <Tooltip title={translate(`theme-mode.${type}`)}>{children}</Tooltip>;
};

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
        <ThemeModeButton type={ThemeMode.LIGHT}>
          <LightModeIcon fontSize="small" />
        </ThemeModeButton>
      </ToggleButton>

      <ToggleButton value={ThemeMode.DARK}>
        <ThemeModeButton type={ThemeMode.DARK}>
          <DarkModeIcon fontSize="small" />
        </ThemeModeButton>
      </ToggleButton>

      <ToggleButton value={ThemeMode.SYNC}>
        <ThemeModeButton type={ThemeMode.SYNC}>
          <SyncIcon fontSize="small" />
        </ThemeModeButton>
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
