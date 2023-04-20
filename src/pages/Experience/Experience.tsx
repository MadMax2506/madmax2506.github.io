import { SectionContainer } from 'components/Container/SectionContainer';
import { Timeline } from 'components/Timeline/Timeline';
import { TimelineItem } from 'components/Timeline/timeline.types';
import { Stack } from '@mui/material';

const LOGO_SIZE = 100;

const CAREER_STEPS: TimelineItem[] = [
  {
    titleTextKey: 'career-steps.plagge-it.title',
    icon: () => <img src={'src/assets/career/plagge-it.png'} alt="Plagge.IT" width={LOGO_SIZE} />,
    href: 'https://plagge.it',
  },
  {
    titleTextKey: 'career-steps.veda-gmbh.title',
    icon: () => <img src={'src/assets/career/veda.png'} alt="VEDA-GmbH" width={LOGO_SIZE} />,
    href: 'https://www.veda.net',
  },
];

// TODO Career step currently/until

export const Experience = (): JSX.Element => {
  return (
    <SectionContainer titleTextKey="pages.experience" fullWidth>
      <Stack>
        <Timeline items={CAREER_STEPS} />
      </Stack>
    </SectionContainer>
  );
};
