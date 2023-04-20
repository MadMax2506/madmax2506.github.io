import { Typography } from '@mui/material';
import { T } from 'components/T/T';
import { TimelineItemDescription } from 'components/Timeline/timeline.types';

type TimelineDescriptionProps = TimelineItemDescription;

/**
 * Description of the timeline
 */
export const TimelineDescription = (props: TimelineDescriptionProps): JSX.Element => {
  const { description: Description, descriptionTextKey } = props;

  if (Description) {
    return <Description />;
  }

  if (descriptionTextKey) {
    return (
      <Typography variant="h6">
        <T textKey={descriptionTextKey} />
      </Typography>
    );
  }

  return <></>;
};
