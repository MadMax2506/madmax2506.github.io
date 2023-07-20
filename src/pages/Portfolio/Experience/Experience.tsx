import { Timeline } from '@mui/lab';
import { Box } from '@mui/material';
import { SectionContainer } from 'components/Container/SectionContainer';
import { CompanyTimelineItem } from './TimelineItems/CompanyTimelineItem/CompanyTimelineItem';
import { ProjectTimelineItem } from './TimelineItems/ProjectTimelineItem/ProjectTimelineItem';
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
          return (
            <ProjectTimelineItem
              {...experience}
              key={experience.nameTextKey}
              variant="desktop"
              lastElement={lastElement}
            />
          );
        }

        if (isCompany(experience)) {
          return (
            <CompanyTimelineItem {...experience} key={experience.company} variant="desktop" lastElement={lastElement} />
          );
        }

        throw Error('Invalid experience');
      })}
    </Timeline>

    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
      {EXPERIENCE.map((experience, index) => {
        const lastElement = EXPERIENCE.length - 1 === index;

        if (isProject(experience)) {
          return (
            <ProjectTimelineItem
              {...experience}
              key={experience.nameTextKey}
              variant="mobile"
              lastElement={lastElement}
            />
          );
        }

        if (isCompany(experience)) {
          return (
            <CompanyTimelineItem {...experience} key={experience.company} variant="mobile" lastElement={lastElement} />
          );
        }

        throw Error('Invalid experience');
      })}
    </Box>
  </SectionContainer>
);
