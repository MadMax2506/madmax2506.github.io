import { TimelineItem } from 'components/Timeline/timeline.types';
import { Duration, DurationProps } from 'pages/Portfolio/Experience/Duration';
import { JobDescription, JobDescriptionProps } from 'pages/Portfolio/Experience/JobDescription';
import { TextKey } from 'types';

export type GenerateCareerStepsProps = Pick<TimelineItem, 'href'> &
  Pick<JobDescriptionProps, 'frameworks'> &
  DurationProps & {
    key: string;
    /**
     * Image type
     * @default 'png
     */
    imageType?: 'jpg' | 'png';
    /**
     * Description text key
     */
    descriptionTextKey?: TextKey;
  };

const LOGO_SIZE = 100;

export const generateCareerSteps = (steps: GenerateCareerStepsProps[]) => {
  steps.sort((a, b) => a.from.getTime() - b.from.getTime());
  return steps.map(
    ({
      key,
      from,
      until,
      frameworks,
      href,
      imageType = 'png',
      descriptionTextKey = `career-steps.${key}.description`,
    }) =>
      ({
        titleTextKey: `career-steps.${key}.title`,
        icon: () => <img src={`/assets/career/${key}.${imageType}`} alt={key} width={LOGO_SIZE} />,
        href,
        subtitle: () => <Duration from={from} until={until} />,
        description: (props) => <JobDescription {...props} textKey={descriptionTextKey} frameworks={frameworks} />,
      } as TimelineItem)
  );
};
