import { Skill } from 'components/Card/SkillCard/skill.types';
import { DesktopCompanyItemProps } from './TimelineItems/Desktop/DesktopCompanyItem';
import { DesktopProjectItemProps } from './TimelineItems/Desktop/DesktopProjectItem';

export const EXPERIENCE: (
  | Omit<DesktopCompanyItemProps, 'lastElement'>
  | Omit<DesktopProjectItemProps, 'lastElement'>
)[] = [
  {
    company: 'VEDA GmbH',
    startDate: new Date('2021/09/01'),
    imagePath: '/assets/projects/veda-gmbh.png',
    href: 'https://www.veda.net',
    detailsTextKey: 'experience.veda-gmbh',
    projects: [
      {
        name: 'VEDA Horizon',
        details: () => <>TODO</>,
        skills: [
          Skill.JAVASCRIPT,
          Skill.JAVA,
          Skill.TYPESCRIPT,
          Skill.REACT,
          Skill.MATERIAL_UI,
          Skill.SPRING_BOOT,
          Skill.GIT_HUB,
        ],
      },
      {
        name: 'nuWork',
        details: () => <>TODO</>,
        skills: [
          Skill.JAVASCRIPT,
          Skill.NODE_JS,
          Skill.TYPESCRIPT,
          Skill.REACT,
          Skill.NEST_JS,
          Skill.TAILWIND_CSS,
          Skill.GIT_LAB,
        ],
      },
    ],
  },
  {
    company: 'Plagge.IT',
    startDate: new Date('2019/10/01'),
    imagePath: '/assets/projects/plagge-it.png',
    href: 'https://plagge.it',
    detailsTextKey: 'experience.plagge-it',
    projects: [
      {
        name: 'Lagerverwaltung Uni Siegen',
        details: () => <>TODO</>,
        skills: [Skill.RUBY_ON_RAILS, Skill.VUE_JS, Skill.GIT_LAB],
      },
      {
        name: 'Evaluationstool FH-Aachen',
        details: () => <>TODO</>,
        skills: [Skill.RUBY_ON_RAILS, Skill.GIT_LAB],
      },
      {
        name: 'Flurbeleuchtung',
        details: () => <>TODO</>,
        skills: [Skill.ARDUINO, Skill.C_CPP],
      },
    ],
    endDate: new Date('2021/11/30'),
  },
];
