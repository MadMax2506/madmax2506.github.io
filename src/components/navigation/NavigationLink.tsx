import { Typography } from '@mui/material';
import { NavigationPage } from 'components/navigation/types';
import { T } from 'components/T/T';

type NavigationLinkProps = Omit<NavigationPage, 'icon'>;

export const NavigationLink = (props: NavigationLinkProps): JSX.Element => {
  const { textKey, navigate } = props;

  return (
    <Typography
      key={textKey}
      onClick={navigate}
      sx={{
        position: 'relative',
        '&:before': {
          content: "''",
          position: 'absolute',
          width: '0',
          height: '2px',
          bottom: '-3px',
          left: '50%',
          transform: 'translate(-50%,0%)',
          backgroundColor: 'text.primary',
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
