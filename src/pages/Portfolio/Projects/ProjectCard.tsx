import { Framework } from 'components/Card/FrameworkCard/framework.types';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { FrameworkCard } from 'components/Card/FrameworkCard/FrameworkCard';
import { ProjectDetailsDialog } from 'pages/Portfolio/Projects/ProjectDetailsDialog';
import { useState } from 'react';
import { T } from 'components/T/T';

export type ProjectCardProps = {
  /**
   * Repository owner
   */
  owner: 'MadMax2506' | 'MadMax2506-SmartHome';
  /**
   * Name of the repository in GitHub
   */
  repositoryName: string;
  /**
   * Used frameworks in the repository (Minimum is one {@link Framework})
   */
  frameworks: [Framework, ...Framework[]];
  /**
   * Cover image
   */
  imagePath?: string;
};

/**
 * Display further information of an own project
 */
export const ProjectCard = (props: ProjectCardProps): JSX.Element => {
  const { owner, repositoryName, imagePath, frameworks } = props;

  const [open, setOpen] = useState(false);

  // TODO fill dialog with data
  // TODO Add short description
  // TODO Create reference to github

  const fullName = `${owner}/${repositoryName}`;

  const handleClose = () => setOpen(false);

  return (
    <>
      {open && <ProjectDetailsDialog fullName={fullName} handleClose={handleClose} />}

      <Card sx={{ width: '100%', cursor: 'pointer' }} onClick={() => setOpen(true)}>
        {imagePath && <CardMedia sx={{ height: 200 }} image={imagePath} title={fullName} />}

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {fullName}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            <T textKey={`project.${fullName}.description.short`} />
          </Typography>

          {frameworks.length > 0 && (
            <Grid container spacing={1} sx={{ justifyContent: 'left', mt: 1 }}>
              {frameworks.map((value) => (
                <Grid key={value} item>
                  <FrameworkCard type={value} small />
                </Grid>
              ))}
            </Grid>
          )}
        </CardContent>
      </Card>
    </>
  );
};
