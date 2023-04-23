import { Grid, Stack, Typography } from '@mui/material';
import { FrameworkCard } from 'components/Card/FrameworkCard/FrameworkCard';
import { Framework } from 'components/Card/FrameworkCard/framework.types';
import { TimelineItemDescriptionProps } from 'components/Timeline/timeline.types';
import { TextKey } from 'types';
import { T } from 'components/T/T';

type JobDescriptionProps = TimelineItemDescriptionProps & {
  /**
   *
   */
  textKey: TextKey;
  /**
   * List of {@link Framework}
   */
  frameworks: Framework[];
};

/**
 * Display more details to the related job in the {@link TimelineItemDescription#description}
 */
export const JobDescription = (props: JobDescriptionProps): JSX.Element => {
  const { justifyContent, textKey, frameworks } = props;

  return (
    <Stack direction="column" justifyContent={justifyContent} spacing={1}>
      <Typography sx={{ pl: 1 }}>
        <T textKey={textKey} />
      </Typography>

      <Grid spacing={1} justifyContent={justifyContent} sx={{ display: { xs: 'none', md: 'flex' } }} container>
        {frameworks.map((framework) => (
          <Grid key={framework} item>
            <FrameworkCard type={framework} small />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
