import { Skill } from 'components/Card/SkillCard/skill.types';
import { TextKey } from './../../../types/text-key.types';

export type CompanyDetails = {
  /**
   * Company name
   */
  company: string;
  /**
   * Start date of employment
   */
  startDate: Date;
  /**
   * Company logo image path
   */
  imagePath: string;
  /**
   * Company website
   */
  href: string;
  /**
   * Employment type {@link TextKey TextKey}
   */
  employmentType: TextKey;
  /**
   * Projects worked on in the company
   */
  projects: ProjectDetails[];
  /**
   * End date of employment
   * @default undefined
   */
  endDate?: Date;
};

export type ProjectDetails = {
  /**
   * Project name
   */
  nameTextKey: string;
  /**
   * Project description
   */
  type: ProjectType;
  /**
   * Skills used in the project
   */
  skills: Skill[];
  /**
   * Project details {@link TextKey TextKeys}
   */
  detailTextKeys: TextKey[];
  /**
   * Project image path
   * @default undefined
   */
  imagePath?: string;
  /**
   * Indicates if the project font size and image size is small
   * @default false
   */
  small?: boolean;
};

export enum ProjectType {
  WEB = 'web',
  FULL_STACK = 'fullStack',
  MICROCONTROLLER = 'microcontroller',
}
