import {
  Timeline as MuiTimeline,
  TimelineConnector as MuiTimelineConnector,
  TimelineContent as MuiTimelineContent,
  TimelineDot as MuiTimelineDot,
  TimelineItem as MuiTimelineItem,
  TimelineOppositeContent as MuiTimelineOppositeContent,
  TimelineProps as MuiTimelineProps,
  TimelineSeparator as MuiTimelineSeparator,
} from '@mui/lab';
import { TimelineItem } from 'components/Timeline/timeline.types';
import { TimelineDescription } from 'components/Timeline/TimelineDescription';
import { TimelineTitle } from 'components/Timeline/TimelineTitle';
import { TimelineSubtitle } from 'components/Timeline/TimelineSubtitle';

export type TimelineProps = Pick<MuiTimelineProps, 'position'> & {
  /**
   * List of {@link TimelineItem TimelineItems}
   */
  items: TimelineItem[];
};

/**
 * Timeline component
 */
export const Timeline = (props: TimelineProps): JSX.Element => {
  const { position, items } = props;

  const openUrl = (href: string | undefined) => href && window.open(href, '_blank', 'noreferrer');

  return (
    <MuiTimeline position={position}>
      {items.map(({ icon: Icon, href, ...rest }, index) => (
        <MuiTimelineItem key={`timeline-item-${index}`}>
          <MuiTimelineOppositeContent>
            <TimelineDescription index={index} position={position} {...rest} />
          </MuiTimelineOppositeContent>

          <MuiTimelineSeparator>
            <MuiTimelineDot
              onClick={() => openUrl(href)}
              sx={{
                border: 'none',
                background: 'none',
                boxShadow: 'none',
                cursor: href ? 'pointer' : 'default',
              }}
            >
              <Icon />
            </MuiTimelineDot>
            {index + 1 < items.length && <MuiTimelineConnector sx={{ height: 100 }} />}
          </MuiTimelineSeparator>

          <MuiTimelineContent>
            <TimelineTitle {...rest} />
            <TimelineSubtitle {...rest} />
          </MuiTimelineContent>
        </MuiTimelineItem>
      ))}
    </MuiTimeline>
  );
};
