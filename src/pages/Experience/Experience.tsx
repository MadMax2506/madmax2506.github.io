import { TimelineItem } from 'components/Timeline/timeline.types';
import { Duration } from 'pages/Experience/Duration';
import { Frameworks } from 'components/Card/FrameworkCard/framework.types';
import { SectionContainer } from 'components/Container/SectionContainer';
import { Stack } from '@mui/material';
import { Timeline } from 'components/Timeline/Timeline';
import { JobDescription } from 'pages/Experience/JobDescription';

const LOGO_SIZE = 100;

const CAREER_STEPS: TimelineItem[] = [
  {
    titleTextKey: 'career-steps.plagge-it.title',
    icon: () => <img src={'src/assets/career/plagge-it.png'} alt="Plagge.IT" width={LOGO_SIZE} />,
    href: 'https://plagge.it',
    subtitle: () => <Duration from={new Date('2019-10-01')} until={new Date('2021-11-01')} />,
    description: () => (
      <JobDescription frameworks={[Frameworks.ARDUINO, Frameworks.RUBY_ON_RAILS, Frameworks.VUE_JS]} />
    ),
  },
  {
    titleTextKey: 'career-steps.veda-gmbh.title',
    icon: () => <img src={'src/assets/career/veda.png'} alt="VEDA-GmbH" width={LOGO_SIZE} />,
    href: 'https://www.veda.net',
    subtitle: () => <Duration from={new Date('2021-09-01')} />,
    description: () => (
      <JobDescription
        frameworks={[Frameworks.SPRING_BOOT, Frameworks.JAVA, Frameworks.REACT, Frameworks.MATERIAL_UI]}
      />
    ),
  },
];

/**
 * Displays my work experience
 */
export const Experience = (): JSX.Element => {
  return (
    <SectionContainer titleTextKey="pages.experience" fullWidth>
      <Stack>
        <Timeline items={CAREER_STEPS} />
      </Stack>
    </SectionContainer>
  );
};
