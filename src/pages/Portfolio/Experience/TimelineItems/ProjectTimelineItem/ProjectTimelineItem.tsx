import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import { Box, useTheme } from '@mui/material';
import { ProjectDetails } from '../../experience.types';
import { DOT_SIZE, DOT_SIZE_SMALL, IMAGE_SIZE } from '../timeline-items.const';
import { ProjectItemBody } from './ProjectItemBody/ProjectItemBody';

export type ProjectTimelineItemProps = ProjectDetails & {
  variant: 'desktop' | 'mobile';
  lastElement?: boolean;
};

export const ProjectTimelineItem = (props: ProjectTimelineItemProps): JSX.Element => {
  const { variant, nameTextKey: name, imagePath, small = false, ...rest } = props;

  const { highlighting } = useTheme();

  const size = small ? DOT_SIZE_SMALL : DOT_SIZE;

  if (variant === 'desktop') {
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
          <ProjectItemBody {...rest} variant={variant} nameTextKey={name} small={small} />
        </TimelineContent>
      </TimelineItem>
    );
  }

  return (
    <Box textAlign="center" alignItems="center">
      <ProjectItemBody {...rest} variant={variant} nameTextKey={name} small={small} />
    </Box>
  );
};
