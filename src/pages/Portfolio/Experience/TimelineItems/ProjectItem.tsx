import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import { Grid, Typography, useTheme } from '@mui/material';
import { SkillCard } from 'components/Card/SkillCard/SkillCard';
import { T } from 'components/T/T';
import { ProjectDetails } from '../experience.types';
import { DOT_SIZE, DOT_SIZE_SMALL, IMAGE_SIZE } from './timeline-items.const';

export type ProjectItemProps = ProjectDetails & {
  lastElement?: boolean;
};

export const ProjectItem = (props: ProjectItemProps): JSX.Element => {
  const { name, imagePath, skills, details: Details, small = false, lastElement = false } = props;

  const { highlighting } = useTheme();

  const size = small ? DOT_SIZE_SMALL : DOT_SIZE;
  const headlineVariante = small ? 'h6' : 'h5';
  const textVariante = small ? 'body2' : 'body1';
  const marginBottom = small ? 1 : 2;

  return (
    <TimelineItem>
      {imagePath && (
        <TimelineOppositeContent>
          <img src={imagePath} alt={name} width={IMAGE_SIZE} />
        </TimelineOppositeContent>
      )}

      <TimelineSeparator>
        <TimelineDot sx={{ backgroundColor: highlighting, width: size, height: size }} />
        <TimelineConnector sx={{ width: 4 }} />
      </TimelineSeparator>

      <TimelineContent>
        <Typography variant={headlineVariante} mb={marginBottom}>
          {name}
        </Typography>

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
      </TimelineContent>
    </TimelineItem>
  );
};
