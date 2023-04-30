import { Typography, TypographyProps } from '@mui/material';
import { useNavigation } from 'hooks/useNavigation/useNavigation';
import { MonoNavigationAnchors } from 'routes/types';

type PageTitleProps = Pick<TypographyProps, 'variant' | 'flexShrink'>;

/**
 * Base page title of the page
 */
export const PageTitle = (props: PageTitleProps): JSX.Element => {
  const { variant, flexShrink } = props;
  const { navigateMono } = useNavigation();

  return (
    <Typography
      variant={variant}
      flexShrink={flexShrink}
      component="div"
      onClick={() => navigateMono(MonoNavigationAnchors.HOME)}
    >
      Max Janorschke
    </Typography>
  );
};
