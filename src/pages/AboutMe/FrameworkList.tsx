import { Grid, useTheme } from '@mui/material';
import { Frameworks } from 'components/Card/FrameworkCard/framework.types';
import { FrameworkCard } from 'components/Card/FrameworkCard/FrameworkCard';

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
          <FrameworkCard type={value} />
        </Grid>
      ))}
    </Grid>
  );
};
