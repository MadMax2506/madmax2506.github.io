import { Skill } from 'components/Card/SkillCard/skill.types';
import { TextKey } from 'types';

export type CompanyDetails = {
  company: string;
  startDate: Date;
  imagePath: string;
  href: string;
  detailsTextKey: TextKey;
  projects: ProjectDetails[];
  endDate?: Date;
};

export type ProjectDetails = {
  name: string;
  details: () => JSX.Element;
  skills: Skill[];
  imagePath?: string;
  small?: boolean;
};
