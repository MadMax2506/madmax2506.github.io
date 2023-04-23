import { DateOptions, formatByCurrentDate } from 'utils/date.utils';
import { T } from 'components/T/T';
import dayjs from 'dayjs';
import { Typography } from '@mui/material';

type DurationProps = { from: Date; until?: Date };

/**
 * Display the duration in the different companies
 */
export const Duration = (props: DurationProps): JSX.Element => {
  const { from, until } = props;

  const dateOption: DateOptions = { year: 'numeric', month: 'short' };

  return (
    <>
      <Typography>{dayjs(from).from(until, true)}</Typography>

      <Typography sx={{ display: { xs: 'none', md: 'block' } }}>
        <T
          textKey={`career-steps.duration.from-until${until ? '' : '-today'}`}
          args={[formatByCurrentDate(from, dateOption), ...(until ? [formatByCurrentDate(until, dateOption)] : [])]}
        />
      </Typography>
    </>
  );
};
