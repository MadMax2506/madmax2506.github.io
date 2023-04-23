import { Link, Typography, TypographyProps } from '@mui/material';
import { paths } from 'routes/paths';

type PageTitleProps = Pick<TypographyProps, 'variant' | 'flexShrink'>;

/**
 * Base page title of the page
 */
export const PageTitle = (props: PageTitleProps): JSX.Element => {
  const { variant, flexShrink } = props;

  return (
    <Typography variant={variant} flexShrink={flexShrink} component="div">
      <Link href={paths.root.pattern}>Max Janorschke</Link>
    </Typography>
  );
};
