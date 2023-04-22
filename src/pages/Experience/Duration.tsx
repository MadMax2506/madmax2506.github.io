import { DateOptions, formatByCurrentDate } from 'utils/date.utils';
import { T } from 'components/T/T';

type DurationProps = { from: Date; until?: Date };

/**
 * Display the duration in the different companies
 */
export const Duration = (props: DurationProps): JSX.Element => {
  const { from, until } = props;

  const dateOption: DateOptions = { year: 'numeric', month: 'long' };

  if (until) {
    return (
      <T
        textKey={'career-steps.duration.from-until'}
        args={[formatByCurrentDate(from, dateOption), formatByCurrentDate(until, dateOption)]}
      />
    );
  }

  return <T textKey={'career-steps.duration.from-until-today'} args={[formatByCurrentDate(from, dateOption)]} />;
};
