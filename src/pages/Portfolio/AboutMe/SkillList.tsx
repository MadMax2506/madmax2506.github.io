import { Grid } from '@mui/material';
import { Skill } from 'components/Card/SkillCard/skill.types';
import { SkillCard } from 'components/Card/SkillCard/SkillCard';

/**
 * Display all skills
 */
export const SkillList = (): JSX.Element => (
  <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
    {[
      Skill.JAVASCRIPT,
      Skill.NODE_JS,
      Skill.TYPESCRIPT,
      Skill.NEXT_JS,
      Skill.REACT,
      Skill.MONGO_DB,
      Skill.MATERIAL_UI,
      Skill.GIT_HUB,
    ].map((value) => (
      <Grid key={value} item>
        <SkillCard type={value} />
      </Grid>
    ))}
  </Grid>
);
