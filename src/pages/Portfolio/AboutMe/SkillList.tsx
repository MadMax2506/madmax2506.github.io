import { Grid, useTheme } from '@mui/material';
import { Skill } from 'components/Card/SkillCard/skill.types';
import { SkillCard } from 'components/Card/SkillCard/SkillCard';

/**
 * Display all skills
 */
export const SkillList = (): JSX.Element => {
  const { breakpoints } = useTheme();

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      sx={{
        justifyContent: 'center',
        [breakpoints.up('md')]: { justifyContent: 'left' },
      }}
    >
      {[Skill.JAVASCRIPT, Skill.REACT, Skill.VUE_JS, Skill.TYPESCRIPT, Skill.MATERIAL_UI, Skill.GIT_HUB].map(
        (value) => (
          <Grid key={value} item>
            <SkillCard type={value} />
          </Grid>
        )
      )}
    </Grid>
  );
};
