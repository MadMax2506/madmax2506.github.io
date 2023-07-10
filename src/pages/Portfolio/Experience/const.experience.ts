import { Skill } from 'components/Card/SkillCard/skill.types';
import { ProjectItemProps } from './TimelineItems/ProjectItem';

export const PROJECTS: ProjectItemProps[] = [
  {
    title: 'VEDA Horizon',
    imageName: '/assets/projects/veda-gmbh.png',
    skills: [],
  },
  {
    title: 'Lagerverwaltung Uni Siegen',
    imageName: '/assets/projects/plagge-it.png',
    skills: [Skill.RUBY_ON_RAILS, Skill.VUE_JS, Skill.GIT_LAB],
  },
  {
    title: 'Evaluationstool FH-Aachen',
    imageName: '/assets/projects/plagge-it.png',
    skills: [Skill.RUBY_ON_RAILS, Skill.GIT_LAB],
  },
  {
    title: 'Flurbeleuchtung',
    imageName: '/assets/projects/plagge-it.png',
    skills: [Skill.ARDUINO, Skill.C_CPP],
  },
];
