import { Stack, Typography, useTheme } from '@mui/material';
import { SectionContainer } from 'components/Container/SectionContainer';
import { T } from 'components/T/T';
import { PersonalAvatar } from 'pages/Portfolio/AboutMe/PersonalAvatar';
import { SkillList } from 'pages/Portfolio/AboutMe/SkillList';
import './waving-hand.css';

export const AboutMe = (): JSX.Element => {
  const { breakpoints } = useTheme();

  return (
    <SectionContainer titleTextKey={'pages.about-me'}>
      <Stack spacing={4} alignItems="center" sx={{ textAlign: 'center' }}>
        <PersonalAvatar />

        <Typography
          sx={{
            width: '100%',
            [breakpoints.up('sm')]: {
              width: '80%',
            },
          }}
        >
          <T textKey={'about-me'} html />
        </Typography>

        <SkillList />
      </Stack>
    </SectionContainer>
  );
};
