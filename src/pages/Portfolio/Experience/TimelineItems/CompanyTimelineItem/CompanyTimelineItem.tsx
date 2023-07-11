import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import { useTheme } from '@mui/material';
import { JSX } from 'react';
import { CompanyDetails } from '../../experience.types';
import { ProjectItemBody } from '../ProjectTimelineItem/ProjectItemBody';
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

            {projects.length === 1 && <ProjectItemBody {...projects[0]} small hideName />}
          </TimelineContent>
        </TimelineItem>

        {projects.length > 1 &&
          projects.map((project, index) => (
            <ProjectTimelineItem
              {...project}
              key={`${company}-${project.name}`}
              variant={variant}
              lastElement={lastElement && index === projects.length - 1}
              small
            />
          ))}
      </>
    );
  }

  return <>TODO </>;
};
