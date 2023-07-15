import { Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import { SkillCard } from 'components/Card/SkillCard/SkillCard';
import { T } from 'components/T/T';
import { useLanguageContext } from 'context/LanguageContext/LanguageContext';
import { ProjectDetails } from '../../experience.types';
import { ProjectTimelineItemProps } from './ProjectTimelineItem';

export type ProjectItemBodyProps = ProjectDetails &
  Pick<ProjectTimelineItemProps, 'lastElement'> & {
    hideName?: boolean;
  };

export const ProjectItemBody = (props: ProjectItemBodyProps): JSX.Element => {
  const { name, skills, type, detailTextKeys, small = false, lastElement = false, hideName = false } = props;

  const { translate } = useLanguageContext();

  const textVariante = small ? 'body2' : 'body1';
  const marginBottom = small ? 1 : 2;
  const headlineVariante = small ? 'h6' : 'h5';
  const hasDetails = detailTextKeys.length > 0;

  return (
    <>
      {!hideName && (
        <Typography variant={headlineVariante} mb={marginBottom}>
          {name}
        </Typography>
      )}

      <Typography sx={!hasDetails ? { mb: marginBottom } : {}} variant={textVariante} fontWeight="bold">
        <T textKey={`experience.type.${type}`} />
      </Typography>

      {hasDetails && (
        <List dense sx={{ mb: marginBottom }}>
          {detailTextKeys.map((detailTextKey) => (
            <ListItem key={detailTextKey}>
              <ListItemText primary={translate(detailTextKey)} />
            </ListItem>
          ))}
        </List>
      )}

      <Typography variant={textVariante} mb={marginBottom} fontWeight="bold">
        <T textKey="skills.technologies" />
      </Typography>

      <Grid container spacing={2} sx={{ justifyContent: 'flex-start', mb: lastElement ? 0 : marginBottom * 3 }}>
        {skills.map((value) => (
          <Grid key={value} item>
            <SkillCard type={value} small />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
