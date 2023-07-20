import { Typography } from '@mui/material';
import { ProjectDetails } from '../../../experience.types';
import { ProjectTimelineItemProps } from '../ProjectTimelineItem';
import { ProjectItemBodyDetails } from './ProjectItemBodyDetails';
import { ProjectItemBodySkill } from './ProjectItemBodySkill';

export type ProjectItemBodyProps = ProjectDetails &
  Pick<ProjectTimelineItemProps, 'lastElement' | 'variant'> & {
    hideName?: boolean;
  };

export const ProjectItemBody = (props: ProjectItemBodyProps): JSX.Element => {
  const { name, skills, type, variant, detailTextKeys, small = false, lastElement = false, hideName = false } = props;

  const textVariante = small ? 'body2' : 'body1';
  const marginBottom = small ? 1 : 2;
  const headlineVariante = small ? 'h6' : 'h5';
  const justifyContent = variant === 'mobile' ? 'center' : 'flex-start';

  return (
    <>
      {!hideName && (
        <Typography variant={headlineVariante} mb={marginBottom}>
          {name}
        </Typography>
      )}

      <ProjectItemBodyDetails
        textVariante={textVariante}
        justifyContent={justifyContent}
        marginBottom={marginBottom}
        detailTextKeys={detailTextKeys}
        type={type}
      />

      <ProjectItemBodySkill
        textVariante={textVariante}
        justifyContent={justifyContent}
        marginBottom={marginBottom}
        skills={skills}
        lastElement={lastElement}
      />
    </>
  );
};
