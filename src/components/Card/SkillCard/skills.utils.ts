import { Skill } from 'components/Card/SkillCard/skill.types';
import { TextKey } from 'types';

// TODO
type SkillDetails = {
  label: TextKey;
  since: number;
};

/**
 * @param {Skill} type of the skill
 * @return {string} link for a specific {@link Skill}
 */
export const getSkillDetails = (type: Skill): SkillDetails => {
  switch (type) {
    case Skill.JAVA:
      return {
        label: 'skills.java',
        since: 2019,
      };
    case Skill.JAVASCRIPT:
      return {
        label: 'skills.javascript',
        since: 2019,
      };
    case Skill.REACT:
      return {
        label: 'skills.react',
        since: 2021,
      };
    case Skill.TYPESCRIPT:
      return {
        label: 'skills.typescript',
        since: 2021,
      };
    case Skill.POSTGRESQL:
      return {
        label: 'skills.postgresql',
        since: 2021,
      };
    case Skill.MARIA_DB:
      return {
        label: 'skills.maria-db',
        since: 2019,
      };
    case Skill.MATERIAL_UI:
      return {
        label: 'skills.material-ui',
        since: 2021,
      };
    case Skill.GIT:
      return {
        label: 'skills.git',
        since: 2019,
      };
    case Skill.ARDUINO:
      return {
        label: 'skills.git',
        since: 2017,
      };
    case Skill.C_CPP:
      return {
        label: 'skills.c-cpp',
        since: 2017,
      };
    case Skill.RUBY_ON_RAILS:
      return {
        label: 'skills.ruby-on-rails',
        since: 2019,
      };
    case Skill.VUE_JS:
      return {
        label: 'skills.vue-js',
        since: 2019,
      };
    case Skill.DOCKER:
      return {
        label: 'skills.docker',
        since: 2022,
      };
    case Skill.PYTHON:
      return {
        label: 'skills.python',
        since: 2017,
      };
    case Skill.KOTLIN:
      return {
        label: 'skills.kotlin',
        since: 2023,
      };
    case Skill.NEST_JS:
      return {
        label: 'skills.nest-js',
        since: 2022,
      };
    case Skill.SPRING_BOOT:
      return {
        label: 'skills.spring-boot',
        since: 2019,
      };
    case Skill.MONGO_DB:
      return {
        label: 'skills.mongo-db',
        since: 2023,
      };
    case Skill.SQLITE:
      return {
        label: 'skills.sqlite',
        since: 2017,
      };
    default:
      throw new Error(`Invalid skill '${type}'`);
  }
};
