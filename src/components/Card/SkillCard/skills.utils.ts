import { useTheme } from '@mui/material';
import { Skill } from 'components/Card/SkillCard/skill.types';

type SkillDetails = {
  name: string;
  since: number;
  imageSrc: string;
};
export const getSkillDetails = (type: Skill): SkillDetails => {
  const imageSrc = `/assets/skills/${type}.svg`;

  const {
    palette: { mode },
  } = useTheme();

  switch (type) {
    case Skill.ARDUINO:
      return {
        imageSrc,
        name: 'Arduino',
        since: 2017,
      };
    case Skill.AWS:
      return {
        imageSrc,
        name: 'Amazon Web Services (AWS)',
        since: 2023,
      };
    case Skill.C_CPP:
      return {
        imageSrc,
        name: 'C / C++',
        since: 2017,
      };
    case Skill.DOCKER:
      return {
        imageSrc,
        name: 'Docker',
        since: 2022,
      };
    case Skill.GIT:
      return {
        imageSrc,
        name: 'Git',
        since: 2019,
      };
    case Skill.GIT_HUB:
      return {
        imageSrc: `/assets/skills/${type}_${mode}.svg`,
        name: 'GitHub',
        since: 2019,
      };
    case Skill.GIT_LAB:
      return {
        imageSrc,
        name: 'GitLab',
        since: 2019,
      };
    case Skill.JAVA:
      return {
        imageSrc,
        name: 'Java',
        since: 2019,
      };
    case Skill.JAVASCRIPT:
      return {
        imageSrc,
        name: 'JavaScript',
        since: 2019,
      };
    case Skill.JENKINS:
      return {
        imageSrc,
        name: 'Jenkins',
        since: 2021,
      };
    case Skill.MATERIAL_UI:
      return {
        imageSrc,
        name: 'Material-UI',
        since: 2021,
      };
    case Skill.MONGO_DB:
      return {
        imageSrc,
        name: 'MongoDB',
        since: 2023,
      };
    case Skill.NEST_JS:
      return {
        imageSrc,
        name: 'NestJS',
        since: 2022,
      };
    case Skill.NEXT_JS:
      return {
        imageSrc,
        name: 'Next.js',
        since: 2024,
      };
    case Skill.NODE_JS:
      return {
        imageSrc,
        name: 'NodeJS',
        since: 2022,
      };
    case Skill.PLAYWRIGHT:
      return {
        imageSrc,
        name: 'Playwright',
        since: 2023,
      };
    case Skill.POSTGRESQL:
      return {
        imageSrc,
        name: 'PostgreSQL',
        since: 2021,
      };
    case Skill.PRISMA:
      return {
        imageSrc,
        name: 'Prisma',
        since: 2023,
      };
    case Skill.PYTHON:
      return {
        imageSrc,
        name: 'Python',
        since: 2016,
      };
    case Skill.REACT:
      return {
        imageSrc,
        name: 'React',
        since: 2021,
      };
    case Skill.REDIS:
      return {
        imageSrc,
        name: 'Redis',
        since: 2024,
      };
    case Skill.RUBY_ON_RAILS:
      return {
        imageSrc,
        name: 'Ruby on Rails',
        since: 2019,
      };
    case Skill.SPRING_BOOT:
      return {
        imageSrc,
        name: 'Spring-Boot',
        since: 2019,
      };
    case Skill.TAILWIND_CSS:
      return {
        imageSrc,
        name: 'Tailwind CSS',
        since: 2023,
      };
    case Skill.TYPESCRIPT:
      return {
        imageSrc,
        name: 'TypeScript',
        since: 2021,
      };
    case Skill.VUE_JS:
      return {
        imageSrc,
        name: 'Vue.js',
        since: 2019,
      };
    default:
      throw new Error(`Invalid skill '${type}'`);
  }
};
