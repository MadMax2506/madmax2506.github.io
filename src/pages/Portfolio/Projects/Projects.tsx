import { Timeline } from '@mui/lab';
import { SectionContainer } from 'components/Container/SectionContainer';
import { PROJECTS } from './project.util';
import { ProjectItem } from './TimelineItems/ProjectItem';

/**
 * Displays my projects
 */
export const Projects = (): JSX.Element => (
  <SectionContainer titleTextKey="pages.projects">
    <Timeline position="right">
      {PROJECTS.map((project) => (
        <ProjectItem key={project.title} {...project} />
      ))}
    </Timeline>
  </SectionContainer>
);
