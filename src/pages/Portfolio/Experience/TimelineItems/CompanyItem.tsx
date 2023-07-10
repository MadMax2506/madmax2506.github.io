import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import { Typography, useTheme } from '@mui/material';
import { DOT_SIZE } from './const.timeline-items';

export type CompanyItemProps = {
  company: string;
  imageName: string;
};

export const CompanyItem = (props: CompanyItemProps): JSX.Element => {
  const { company, imageName } = props;

  const { highlighting } = useTheme();

  return (
    <>
      <TimelineItem>
        <TimelineOppositeContent>
          <img src={imageName} alt={company} width={150} />
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineDot sx={{ backgroundColor: highlighting, width: DOT_SIZE, height: DOT_SIZE }} />
          <TimelineConnector sx={{ width: 4 }} />
        </TimelineSeparator>

        <TimelineContent>
          <Typography variant="h5" mb={2}>
            {company}
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </>
  );
};
