import { Typography } from '@mui/material';
import { T } from 'components/T/T';
import { TimelineItemDescription, TimelineItemDescriptionProps } from 'components/Timeline/timeline.types';
import { TimelineProps } from 'components/Timeline/Timeline';

type TimelineDescriptionProps = Pick<TimelineProps, 'position'> &
  TimelineItemDescription & {
    /**
     * Number of the element in the list
     */
    index: number;
  };

/**
 * Description of the timeline
 */
export const TimelineDescription = (props: TimelineDescriptionProps): JSX.Element => {
  const { position, index, description: Description, descriptionTextKey } = props;

  const getJustifyContent = (): TimelineItemDescriptionProps['justifyContent'] => {
    if ((position === 'alternate' && index % 2 !== 0) || position === 'left') return 'flex-start';

    return 'flex-end';
  };

  if (Description) {
    return <Description justifyContent={getJustifyContent()} />;
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
