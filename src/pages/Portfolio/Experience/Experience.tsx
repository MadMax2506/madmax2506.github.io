import { SectionContainer } from 'components/Container/SectionContainer';
import { Stack } from '@mui/material';
import { Timeline } from 'components/Timeline/Timeline';
import { CAREER_DATA } from 'pages/Portfolio/Experience/experience.data';

/**
 * Displays my work experience
 */
export const Experience = (): JSX.Element => (
  <SectionContainer titleTextKey="pages.experience" fullWidth>
    <Stack>
      <Timeline position={'left'} items={CAREER_DATA} />
    </Stack>
  </SectionContainer>
);
