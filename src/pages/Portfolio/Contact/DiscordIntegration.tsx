import { IframeHTMLAttributes, JSX } from 'react';
import { useTheme } from '@mui/material';

type DiscordIntegrationProps = Pick<IframeHTMLAttributes<never>, 'height' | 'width'>;

/**
 * Display the integration to the own server
 */
export const DiscordIntegration = (props: DiscordIntegrationProps): JSX.Element => {
  const { width, height } = props;

  const {
    palette: { mode },
  } = useTheme();

  return (
    <iframe
      width={width}
      height={height}
      src={`https://discord.com/widget?id=890581083438080041&theme=${mode}`}
      style={{ border: 'none' }}
      sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
    ></iframe>
  );
};
