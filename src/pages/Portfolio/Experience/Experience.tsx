import { Timeline } from '@mui/lab';
import { Box } from '@mui/material';
import { SectionContainer } from 'components/Container/SectionContainer';
import { DesktopCompanyItem } from './TimelineItems/Desktop/DesktopCompanyItem';
import { DesktopProjectItem } from './TimelineItems/Desktop/DesktopProjectItem';
import { EXPERIENCE } from './experience.const';
import { isCompany, isProject } from './experience.utils';

/**
 * Displays my experience
 */
export const Experience = (): JSX.Element => (
  <SectionContainer titleTextKey="pages.projects">
    <Timeline sx={{ display: { xs: 'none', md: 'block' } }} position="right">
      {EXPERIENCE.map((experience, index) => {
        const lastElement = EXPERIENCE.length - 1 === index;

        if (isProject(experience)) {
          return <DesktopProjectItem {...experience} key={experience.name} lastElement={lastElement} />;
        }

        if (isCompany(experience)) {
          return <DesktopCompanyItem {...experience} key={experience.company} lastElement={lastElement} />;
        }

        throw Error('Invalid experience');
      })}
    </Timeline>

    <Box sx={{ display: { xs: 'block', md: 'none' } }}>TODO</Box>
  </SectionContainer>
);
