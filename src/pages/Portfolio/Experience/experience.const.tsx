import { Skill } from 'components/Card/SkillCard/skill.types';
import { CompanyDetails, ProjectDetails, ProjectType } from './experience.types';

export const EXPERIENCE: (CompanyDetails | ProjectDetails)[] = [
  {
    company: 'VEDA GmbH',
    startDate: new Date('2021/09/01'),
    imagePath: '/assets/projects/veda-gmbh.png',
    href: 'https://www.veda.net',
    employmentType: 'experience.veda-gmbh.employmentType',
    projects: [
      {
        nameTextKey: 'experience.veda-gmbh.veda-horizon.name',
        type: ProjectType.FULL_STACK,
        detailTextKeys: ['experience.veda-gmbh.veda-horizon.part1', 'experience.veda-gmbh.veda-horizon.part2'],
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
      // TODO https://github.com/MadMax2506/madmax2506.github.io/issues/224
      /*{
        nameTextKey: 'experience.veda-gmbh.nuwork.name',
        type: ProjectType.FULL_STACK,
        detailTextKeys: [],
        skills: [
          Skill.JAVASCRIPT,
          Skill.NODE_JS,
          Skill.TYPESCRIPT,
          Skill.REACT,
          Skill.NEST_JS,
          Skill.TAILWIND_CSS,
          Skill.GIT_LAB,
        ],
      },*/
    ],
  },
  {
    company: 'Plagge.IT',
    startDate: new Date('2019/10/01'),
    imagePath: '/assets/projects/plagge-it.png',
    href: 'https://plagge.it',
    employmentType: 'experience.plagge-it.employmentType',
    projects: [
      {
        nameTextKey: 'experience.plagge-it.stock-management.name',
        type: ProjectType.FULL_STACK,
        detailTextKeys: ['experience.plagge-it.stock-management.part1', 'experience.plagge-it.stock-management.part2'],
        skills: [Skill.RUBY_ON_RAILS, Skill.VUE_JS, Skill.GIT_LAB],
      },
      {
        nameTextKey: 'experience.plagge-it.evaluation-tool.name',
        type: ProjectType.FULL_STACK,
        detailTextKeys: ['experience.plagge-it.evaluation-tool.part1'],
        skills: [Skill.RUBY_ON_RAILS, Skill.GIT_LAB],
      },
      {
        nameTextKey: 'experience.plagge-it.roomlight.name',
        type: ProjectType.MICROCONTROLLER,
        detailTextKeys: ['experience.plagge-it.roomlight.part1', 'experience.plagge-it.roomlight.part2'],
        skills: [Skill.ARDUINO, Skill.C_CPP],
      },
    ],
    endDate: new Date('2021/11/30'),
  },
];
