import { Stack, Typography } from '@mui/material';
import { SectionContainer } from 'components/Container/SectionContainer';
import { T } from 'components/T/T';
import { PersonalAvatar } from 'pages/Portfolio/AboutMe/PersonalAvatar';
import { SkillList } from 'pages/Portfolio/AboutMe/SkillList';

export const AboutMe = (): JSX.Element => (
  <SectionContainer titleTextKey={'pages.about-me'}>
    <Stack
      spacing={4}
      alignItems="center"
      sx={{
        textAlign: 'center',
      }}
    >
      <PersonalAvatar />

      <Typography width="50%">
        <T textKey={'about-me'} html />
      </Typography>

      <SkillList />
    </Stack>
  </SectionContainer>
);
