import { Grid, GridProps, Typography, TypographyProps } from '@mui/material';
import { SkillCard } from 'components/Card/SkillCard/SkillCard';
import { T } from 'components/T/T';
import { ProjectItemBodyProps } from './ProjectItemBody';

type ProjectItemBodySkillProps = Required<Pick<ProjectItemBodyProps, 'lastElement' | 'skills'>> & {
  textVariante: TypographyProps['variant'];
  justifyContent: GridProps['justifyContent'];
  marginBottom: number;
};

export const ProjectItemBodySkill = (props: ProjectItemBodySkillProps): JSX.Element => {
  const { textVariante, justifyContent, marginBottom, skills, lastElement } = props;

  if (skills.length === 0) return <></>;

  return (
    <>
      <Typography variant={textVariante} mb={marginBottom} fontWeight="bold">
        <T textKey="skills.technologies" />
      </Typography>

      <Grid container spacing={2} sx={{ justifyContent, mb: lastElement ? 0 : marginBottom * 3 }}>
        {skills.map((value) => (
          <Grid key={value} item>
            <SkillCard type={value} small />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
