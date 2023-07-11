import { CompanyDetails, ProjectDetails } from './experience.types';

export const isProject = (elem: ProjectDetails | CompanyDetails): elem is ProjectDetails => {
  const project = elem as ProjectDetails;
  return project.name !== undefined && project.skills !== undefined;
};

export const isCompany = (elem: ProjectDetails | CompanyDetails): elem is CompanyDetails => {
  const company = elem as CompanyDetails;
  return (
    company.company !== undefined &&
    company.startDate !== undefined &&
    company.imagePath !== undefined &&
    company.href !== undefined &&
    company.detailsTextKey !== undefined &&
    company.projects !== undefined
  );
};
