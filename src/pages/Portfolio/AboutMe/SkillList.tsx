import { Grid } from '@mui/material';
import { Skill } from 'components/Card/SkillCard/skill.types';
import { SkillCard } from 'components/Card/SkillCard/SkillCard';

/**
 * Display all skills
 */
export const SkillList = (): JSX.Element => (
  <Grid
    container
    spacing={2}
    sx={{
      justifyContent: 'center',
    }}
  >
    {[
      Skill.JAVASCRIPT,
      Skill.NODE_JS,
      Skill.TYPESCRIPT,
      Skill.REACT,
      Skill.VUE_JS,
      Skill.NEST_JS,
      Skill.MATERIAL_UI,
      Skill.GIT_HUB,
    ].map((value) => (
      <Grid key={value} item>
        <SkillCard type={value} />
      </Grid>
    ))}
  </Grid>
);
