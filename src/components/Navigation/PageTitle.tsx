import { Typography, TypographyProps } from '@mui/material';

type PageTitleProps = Pick<TypographyProps, 'variant'>;

/**
 * Base page title of the page
 */
export const PageTitle = (props: PageTitleProps): JSX.Element => {
  const { variant } = props;

  return (
    <Typography variant={variant} component="div">
      Max Janorschke
    </Typography>
  );
};
