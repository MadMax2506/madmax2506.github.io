import { Typography, TypographyProps } from '@mui/material';
import { useNavigation } from 'hooks/useNavigation';
import { paths } from 'routes/paths';

type PageTitleProps = Pick<TypographyProps, 'variant' | 'flexShrink'>;

/**
 * Base page title of the page
 */
export const PageTitle = (props: PageTitleProps): JSX.Element => {
  const { variant, flexShrink } = props;
  const { navigateReactRouter } = useNavigation();

  return (
    <Typography
      variant={variant}
      flexShrink={flexShrink}
      component="div"
      onClick={() => navigateReactRouter(paths.root)}
    >
      Max Janorschke
    </Typography>
  );
};
