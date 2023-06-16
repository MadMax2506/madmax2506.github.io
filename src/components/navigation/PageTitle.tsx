import { Typography, TypographyProps } from '@mui/material';
import { useNavigation } from 'hooks/useNavigation/useNavigation';
import { MonoNavigationAnchors } from 'routes/types';

type PageTitleProps = Pick<TypographyProps, 'variant' | 'flexShrink'> & {
  /**
   * If {@code true} the component links to the root page
   * @default false
   */
  withLink?: boolean;
};

/**
 * Base page title of the page
 */
export const PageTitle = (props: PageTitleProps): JSX.Element => {
  const { variant, flexShrink, withLink = false } = props;
  const { navigateMonoRoute } = useNavigation();

  return (
    <Typography
      variant={variant}
      flexShrink={flexShrink}
      component="div"
      onClick={withLink ? () => navigateMonoRoute(MonoNavigationAnchors.HOME) : undefined}
      sx={withLink ? { cursor: 'pointer' } : {}}
    >
      Max Janorschke
    </Typography>
  );
};
