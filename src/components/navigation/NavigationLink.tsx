import { Typography, useTheme } from '@mui/material';
import { NavigationPage } from 'components/navigation/types';
import { T } from 'components/T/T';

type NavigationLinkProps = Omit<NavigationPage, 'icon'>;

export const NavigationLink = (props: NavigationLinkProps): JSX.Element => {
  const { textKey, navigate } = props;

  const {
    palette: {
      secondary: { main },
    },
  } = useTheme();

  return (
    <Typography
      key={textKey}
      onClick={navigate}
      variant="h6"
      sx={{
        position: 'relative',
        color: main,
        '&:before': {
          content: "''",
          position: 'absolute',
          width: '0',
          height: '2px',
          bottom: '-3px',
          left: '50%',
          transform: 'translate(-50%,0%)',
          backgroundColor: 'secondary.main',
          visibility: 'hidden',
          transition: 'all 0.3s ease-in-out',
        },
        '&:hover:before': {
          visibility: 'visible',
          width: '100%',
        },
        '&:hover': {
          cursor: 'pointer',
        },
      }}
    >
      <T textKey={textKey} />
    </Typography>
  );
};
