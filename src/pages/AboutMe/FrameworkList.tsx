import { Grid, useTheme } from '@mui/material';
import { Framework } from 'components/Framework/Framework';
import { Frameworks } from 'components/Framework/framework.types';

/**
 * Display all frameworks
 */
export const FrameworkList = (): JSX.Element => {
  const { breakpoints } = useTheme();

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      sx={{
        justifyContent: 'center',
        [breakpoints.up('md')]: { justifyContent: 'left' },
      }}
    >
      {Object.values(Frameworks).map((value) => (
        <Grid key={value} item>
          <Framework type={value} />
        </Grid>
      ))}
    </Grid>
  );
};
