import { Typography, TypographyProps } from '@mui/material';

type PageTitleProps = Pick<TypographyProps, 'variant' | 'flexShrink'>;

/**
 * Base page title of the page
 */
export const PageTitle = (props: PageTitleProps): JSX.Element => {
  const { variant, flexShrink } = props;

  return (
    <Typography variant={variant} flexShrink={flexShrink} component="div">
      Max Janorschke
    </Typography>
  );
};
