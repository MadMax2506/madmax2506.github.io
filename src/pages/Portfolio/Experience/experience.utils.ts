import { CompanyDetails, ProjectDetails } from './experience.types';

export const isProject = (elem: ProjectDetails | CompanyDetails): elem is ProjectDetails => {
  const project = elem as ProjectDetails;
  return (
    project.name !== undefined &&
    project.type !== undefined &&
    project.skills !== undefined &&
    project.detailTextKeys !== undefined
  );
};

export const isCompany = (elem: ProjectDetails | CompanyDetails): elem is CompanyDetails => {
  const company = elem as CompanyDetails;
  return (
    company.company !== undefined &&
    company.startDate !== undefined &&
    company.imagePath !== undefined &&
    company.href !== undefined &&
    company.employmentType !== undefined &&
    company.projects !== undefined
  );
};
