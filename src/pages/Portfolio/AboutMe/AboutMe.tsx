import { Stack, useTheme } from '@mui/material';
import { SectionContainer } from 'components/Container/SectionContainer';
import { T } from 'components/T/T';
import dayjs from 'dayjs';
import { PersonalAvatar } from 'pages/Portfolio/AboutMe/PersonalAvatar';
import { SkillList } from 'pages/Portfolio/AboutMe/SkillList';
import './waving-hand.css';

export const AboutMe = (): JSX.Element => {
  const { breakpoints } = useTheme();

  const yearDiff = Math.floor(dayjs(new Date()).diff('2003-06-25', 'year', true));

  return (
    <SectionContainer titleTextKey={'pages.about-me'}>
      <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center' }}>
        <PersonalAvatar />

        <Stack
          spacing={2}
          sx={{
            width: '100%',
            [breakpoints.only('sm')]: { width: '60%' },
            [breakpoints.only('md')]: { width: '50%' },
            [breakpoints.up('lg')]: { width: '50%' },
          }}
        >
          <T textKey={'about-me.part1'} html />
          <T textKey={'about-me.part2'} args={[yearDiff]} />
          <T textKey={'about-me.part3'} />
        </Stack>

        <SkillList />
      </Stack>
    </SectionContainer>
  );
};
