import { NavigationPage } from 'components/Navigation/types';
import { Typography } from '@mui/material';
import { useTranslationContext } from 'context/TranslationContext/TranslationContext';

type NavigationLinkProps = NavigationPage;

export const NavigationLink = (props: NavigationLinkProps): JSX.Element => {
  const { textKey, navigate } = props;
  const { t } = useTranslationContext();

  return (
    <Typography
      key={textKey}
      onClick={navigate}
      component="span"
      color="primary"
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
          backgroundColor: 'primary.main',
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
      {t(textKey)}
    </Typography>
  );
};
