import { OpenInNew as OpenInNewIcon } from '@mui/icons-material';
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import { IconButton, Stack, Typography, useTheme } from '@mui/material';
import { T } from 'components/T/T';
import { useLanguageContext } from 'context/LanguageContext/LanguageContext';
import dayjs from 'dayjs';
import { JSX } from 'react';
import { CompanyDetails } from '../experience.types';
import { ProjectItem } from './ProjectItem';
import { DOT_SIZE, IMAGE_SIZE } from './timeline-items.const';

const DATE_FORMAT = 'MM/YYYY';

export type CompanyItemProps = CompanyDetails & {
  lastElement?: boolean;
};

export const CompanyItem = (props: CompanyItemProps): JSX.Element => {
  const { company, startDate, imagePath, href, detailsTextKey, projects, endDate, lastElement = false } = props;

  const { translate } = useLanguageContext();
  const { highlighting } = useTheme();

  const formattedStartDate = dayjs(startDate).format(DATE_FORMAT);
  const formattedEndDate = endDate ? dayjs(endDate).format(DATE_FORMAT) : translate('experience.until-yet');

  return (
    <>
      <TimelineItem>
        <TimelineOppositeContent>
          <img src={imagePath} alt={company} width={IMAGE_SIZE} />
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineDot sx={{ backgroundColor: highlighting, width: DOT_SIZE, height: DOT_SIZE }} />
          <TimelineConnector sx={{ width: 4 }} />
        </TimelineSeparator>

        <TimelineContent>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="h5">{company}</Typography>

            <IconButton onClick={() => window?.open(href, '_blank')?.focus()}>
              <OpenInNewIcon />
            </IconButton>
          </Stack>

          <Typography variant="body2" mb={2}>
            <T textKey="experience.duration" args={[formattedStartDate, formattedEndDate]} />
          </Typography>

          <Typography variant="body1" mb={projects.length === 0 ? 0 : 2}>
            <T textKey={detailsTextKey} />
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {projects.map((project, index) => (
        <ProjectItem
          {...project}
          key={`${company}-${project.name}`}
          lastElement={lastElement && index === projects.length - 1}
          small
        />
      ))}
    </>
  );
};
