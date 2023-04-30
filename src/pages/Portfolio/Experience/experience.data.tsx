import { TimelineItem } from 'components/Timeline/timeline.types';
import { Duration } from 'pages/Portfolio/Experience/Duration';
import { JobDescription } from 'pages/Portfolio/Experience/JobDescription';
import { Framework } from 'components/Card/FrameworkCard/framework.types';

const LOGO_SIZE = 100;

export const CAREER_DATA: TimelineItem[] = [
  {
    titleTextKey: `career-steps.veda-gmbh.title`,
    icon: () => <img src={`src/assets/career/veda-gmbh.png`} alt={'VEDA GmbH'} width={LOGO_SIZE} />,
    href: 'https://www.veda.net',
    subtitle: () => <Duration from={new Date('2021-09-01')} />,
    description: (props) => (
      <JobDescription
        {...props}
        textKey="career-steps.veda-gmbh.description.training"
        frameworks={[Framework.SPRING_BOOT, Framework.JAVA, Framework.REACT, Framework.MATERIAL_UI]}
      />
    ),
  },
  {
    titleTextKey: `career-steps.fh-aachen.title`,
    icon: () => <img src={`src/assets/career/fh-aachen.jpg`} alt="FH-Aachen" width={LOGO_SIZE} />,
    href: 'https://www.fh-aachen.de/studium/studiengaenge/angewandte-mathematik-und-informatik-aos-bsc',
    subtitle: () => <Duration from={new Date('2021-09-01')} />,
    description: (props) => (
      <JobDescription
        {...props}
        textKey="career-steps.fh-aachen.description"
        frameworks={[Framework.SPRING_BOOT, Framework.JAVA, Framework.REACT, Framework.MATERIAL_UI]}
      />
    ),
  },
  {
    titleTextKey: `career-steps.veda-gmbh.title`,
    icon: () => <img src={`src/assets/career/veda-gmbh.png`} alt="VEDA GmbH" width={LOGO_SIZE} />,
    href: 'https://www.veda.net',
    subtitle: () => <Duration from={new Date('2021-07-01')} until={new Date('2021-08-31')} />,
    description: (props) => (
      <JobDescription
        {...props}
        textKey="career-steps.veda-gmbh.description.internship"
        frameworks={[Framework.SPRING_BOOT, Framework.JAVA]}
      />
    ),
  },
  {
    titleTextKey: `career-steps.plagge-it.title`,
    icon: () => <img src={`src/assets/career/plagge-it.png`} alt="Plagge.IT" width={LOGO_SIZE} />,
    href: 'https://plagge.it',
    subtitle: () => <Duration from={new Date('2019-10-01')} until={new Date('2021-11-01')} />,
    description: (props) => (
      <JobDescription
        {...props}
        textKey="career-steps.plagge-it.description"
        frameworks={[Framework.ARDUINO, Framework.RUBY_ON_RAILS, Framework.VUE_JS]}
      />
    ),
  },
];
