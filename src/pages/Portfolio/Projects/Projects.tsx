import { SectionContainer } from 'components/Container/SectionContainer';
import { PROJECT_DATA } from 'pages/Portfolio/Projects/projects.data';
import { ProjectCard } from 'pages/Portfolio/Projects/ProjectCard';
import { Grid } from '@mui/material';

export const Projects = (): JSX.Element => {
  return (
    <SectionContainer titleTextKey="pages.projects">
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        {PROJECT_DATA.map(({ owner, repositoryName, ...restProject }) => (
          <Grid item key={`${owner}/${repositoryName}`} xs={12} md={6} xl={4}>
            <ProjectCard owner={owner} repositoryName={repositoryName} {...restProject} />
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  );
};
