import { Timeline } from '@mui/lab';
import { SectionContainer } from 'components/Container/SectionContainer';
import { ProjectItem } from './ProjectItem';
import { PROJECTS } from './project.util';

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
