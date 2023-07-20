import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import { Stack, useTheme } from '@mui/material';
import { JSX } from 'react';
import { CompanyDetails, ProjectDetails } from '../../experience.types';
import { ProjectItemBody } from '../ProjectTimelineItem/ProjectItemBody/ProjectItemBody';
import { ProjectTimelineItem } from '../ProjectTimelineItem/ProjectTimelineItem';
import { DOT_SIZE, IMAGE_SIZE } from '../timeline-items.const';
import { CompanyItemBody } from './CompanyItemBody';

export type CompanyTimelineItemProps = CompanyDetails & {
  variant: 'desktop' | 'mobile';
  lastElement?: boolean;
};

export const CompanyTimelineItem = (props: CompanyTimelineItemProps): JSX.Element => {
  const { variant, company, imagePath, projects, lastElement = false, ...rest } = props;

  const { highlighting } = useTheme();

  const generateProjectItem = (project: ProjectDetails, index: number) => (
    <ProjectTimelineItem
      {...project}
      key={`${company}-${project.name}`}
      variant={variant}
      lastElement={lastElement && index === projects.length - 1}
      small
    />
  );

  if (variant === 'desktop') {
    return (
      <>
        <TimelineItem>
          <TimelineOppositeContent>
            <img src={imagePath} alt={company} width={IMAGE_SIZE} />
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: highlighting, width: DOT_SIZE, height: DOT_SIZE }} />
            <TimelineConnector sx={{ width: 4 }} />
          </TimelineSeparator>

          <TimelineContent>
            <CompanyItemBody {...rest} company={company} projects={projects} />

            {/** Generate project item for a single project */}
            {projects.length === 1 && <ProjectItemBody {...projects[0]} variant={variant} small hideName />}
          </TimelineContent>
        </TimelineItem>

        {/** Generate list project list for more than one project */}
        {projects.length > 1 && projects.map(generateProjectItem)}
      </>
    );
  }

  return (
    <Stack alignItems="center" textAlign="center" mb={lastElement ? 0 : 8}>
      <CompanyItemBody {...rest} company={company} projects={projects} imagePath={imagePath} detailed />
      {projects.length > 1 && projects.map(generateProjectItem)}
    </Stack>
  );
};
