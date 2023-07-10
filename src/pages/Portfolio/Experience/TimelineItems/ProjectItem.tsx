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
import { Skill } from 'components/Card/SkillCard/skill.types';
import { DOT_SIZE } from './const.timeline-items';

export type ProjectItemProps = {
  title: string;
  imageName: string;
  skills: Skill[];
};

export const ProjectItem = (props: ProjectItemProps): JSX.Element => {
  const { title, imageName, skills } = props;
  console.log(skills);
  const { highlighting } = useTheme();

  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <img src={imageName} alt={title} width={150} />
      </TimelineOppositeContent>

      <TimelineSeparator>
        <TimelineDot sx={{ backgroundColor: highlighting, width: DOT_SIZE, height: DOT_SIZE }} />
        <TimelineConnector sx={{ width: 4 }} />
      </TimelineSeparator>

      <TimelineContent>
        <Typography variant="h5" mb={2}>
          {title}
        </Typography>

        <Typography variant="body2" mb={2}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </Typography>

        <Grid container spacing={2} sx={{ justifyContent: 'flex-start', pb: 2 }}>
          {skills.map((value) => (
            <Grid key={value} item>
              <SkillCard type={value} />
            </Grid>
          ))}
        </Grid>
      </TimelineContent>
    </TimelineItem>
  );
};
