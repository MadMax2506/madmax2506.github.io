import { Grid, Typography } from '@mui/material';
import { SkillCard } from 'components/Card/SkillCard/SkillCard';
import { T } from 'components/T/T';
import { ProjectTimelineItemProps } from './ProjectTimelineItem';

export type ProjectItemBodyProps = Pick<
  ProjectTimelineItemProps,
  'skills' | 'details' | 'small' | 'name' | 'lastElement'
> & {
  hideName?: boolean;
};

export const ProjectItemBody = (props: ProjectItemBodyProps): JSX.Element => {
  const { name, skills, details: Details, small = false, lastElement = false, hideName = false } = props;

  const textVariante = small ? 'body2' : 'body1';
  const marginBottom = small ? 1 : 2;
  const headlineVariante = small ? 'h6' : 'h5';

  return (
    <>
      {!hideName && (
        <Typography variant={headlineVariante} mb={marginBottom}>
          {name}
        </Typography>
      )}

      <Typography variant={textVariante} mb={marginBottom}>
        <Details />
      </Typography>

      <Typography variant={textVariante} mb={marginBottom} fontWeight="bold">
        <T textKey="skills.technologies" />
      </Typography>

      <Grid container spacing={2} sx={{ justifyContent: 'flex-start', mb: lastElement ? 0 : marginBottom * 3 }}>
        {skills.map((value) => (
          <Grid key={value} item>
            <SkillCard type={value} small={small} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
