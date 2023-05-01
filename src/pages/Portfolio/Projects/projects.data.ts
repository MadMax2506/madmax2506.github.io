import { ProjectCardProps } from 'pages/Portfolio/Projects/ProjectCard';
import { Framework } from 'components/Card/FrameworkCard/framework.types';

export const PROJECT_DATA: ProjectCardProps[] = [
  {
    owner: 'MadMax2506',
    repositoryName: 'madmax2506.github.io',
    frameworks: [Framework.REACT, Framework.MATERIAL_UI],
  },
  {
    owner: 'MadMax2506',
    repositoryName: 'electron-react-template',
    frameworks: [Framework.ELECTRON, Framework.REACT, Framework.MATERIAL_UI],
  },
  {
    owner: 'MadMax2506',
    repositoryName: 'react-template',
    frameworks: [Framework.REACT, Framework.MATERIAL_UI],
  },
  {
    owner: 'MadMax2506-SmartHome',
    repositoryName: 'roomlight',
    imagePath: '/assets/projects/roomlight.jpg',
    frameworks: [Framework.ARDUINO],
  },
];
