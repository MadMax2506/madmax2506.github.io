import { TimelineItemSubtitle } from 'components/Timeline/timeline.types';
import { Typography } from '@mui/material';
import { T } from 'components/T/T';

type TimelineSubtitleProps = TimelineItemSubtitle;

/**
 * Subtitle of the timeline
 */
export const TimelineSubtitle = (props: TimelineSubtitleProps): JSX.Element => {
  const { subtitle: Subtitle, subtitleTextKey } = props;

  return (
    <>
      {subtitleTextKey && (
        <Typography variant="h6">
          <T textKey={subtitleTextKey} />
        </Typography>
      )}
      {Subtitle && <Subtitle />}
    </>
  );
};
