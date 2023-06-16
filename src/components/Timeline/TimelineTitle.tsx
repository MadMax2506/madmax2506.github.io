import { T } from 'components/T/T';
import { Typography } from '@mui/material';
import { TimelineItemTitle } from 'components/Timeline/timeline.types';

type TimelineTitleProps = TimelineItemTitle;

/**
 * Title of the timeline
 */
export const TimelineTitle = (props: TimelineTitleProps): JSX.Element => {
  const { title: Title, titleTextKey } = props;

  if (Title) return <Title />;

  return (
    <Typography variant="h5">
      <T textKey={titleTextKey} />
    </Typography>
  );
};
