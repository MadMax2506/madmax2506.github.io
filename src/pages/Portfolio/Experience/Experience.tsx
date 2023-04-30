import { Framework } from 'components/Card/FrameworkCard/framework.types';
import { SectionContainer } from 'components/Container/SectionContainer';
import { Stack } from '@mui/material';
import { Timeline } from 'components/Timeline/Timeline';
import { generateCareerSteps } from 'pages/Portfolio/Experience/experience.utils';

/**
 * Displays my work experience
 */
export const Experience = (): JSX.Element => {
  const careerSteps = generateCareerSteps([
    {
      key: 'plagge-it',
      href: 'https://plagge.it',
      from: new Date('2019-10-01'),
      until: new Date('2021-11-01'),
      frameworks: [Framework.ARDUINO, Framework.RUBY_ON_RAILS, Framework.VUE_JS],
    },
    {
      key: 'veda-gmbh',
      href: 'https://www.veda.net',
      descriptionTextKey: 'career-steps.veda-gmbh.description.internship',
      from: new Date('2021-07-01'),
      until: new Date('2021-08-31'),
      frameworks: [Framework.SPRING_BOOT, Framework.JAVA],
    },
    {
      key: 'fh-aachen',
      imageType: 'jpg',
      href: 'https://www.fh-aachen.de/studium/studiengaenge/angewandte-mathematik-und-informatik-aos-bsc',
      from: new Date('2021-09-01'),
      frameworks: [Framework.ANDROID, Framework.JAVA, Framework.ELECTRON, Framework.KOTLIN, Framework.PYTHON],
    },
    {
      key: 'veda-gmbh',
      href: 'https://www.veda.net',
      descriptionTextKey: 'career-steps.veda-gmbh.description.training',
      from: new Date('2021-09-01'),
      frameworks: [Framework.SPRING_BOOT, Framework.JAVA, Framework.REACT, Framework.MATERIAL_UI],
    },
  ]);

  return (
    <SectionContainer titleTextKey="pages.experience" fullWidth>
      <Stack>
        <Timeline position={'left'} items={careerSteps} />
      </Stack>
    </SectionContainer>
  );
};
