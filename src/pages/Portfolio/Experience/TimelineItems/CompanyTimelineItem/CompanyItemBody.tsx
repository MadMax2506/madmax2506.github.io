import { OpenInNew as OpenInNewIcon } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import { T } from 'components/T/T';
import { useLanguageContext } from 'context/LanguageContext/LanguageContext';
import dayjs from 'dayjs';
import { JSX } from 'react';
import { IMAGE_SIZE } from '../timeline-items.const';
import { CompanyTimelineItemProps } from './CompanyTimelineItem';

const DATE_FORMAT = 'MM/YYYY';

export type CompanyItemBodyProps = Pick<
  CompanyTimelineItemProps,
  'company' | 'startDate' | 'href' | 'employmentType' | 'projects' | 'endDate'
> &
  (
    | (Pick<CompanyTimelineItemProps, 'imagePath'> & {
        /**
         * If {@code true} the component will display more details
         */
        detailed: true;
      })
    | {
        imagePath?: never;
        detailed?: never;
      }
  );

export const CompanyItemBody = (props: CompanyItemBodyProps): JSX.Element => {
  const { company, startDate, href, employmentType, projects, endDate, imagePath, detailed = false } = props;

  const { translate } = useLanguageContext();

  const formattedStartDate = dayjs(startDate).format(DATE_FORMAT);
  const formattedEndDate = endDate ? dayjs(endDate).format(DATE_FORMAT) : translate('experience.until-yet');

  return (
    <>
      <Typography variant="h5">
        {company}
        <IconButton onClick={() => window?.open(href, '_blank')?.focus()}>
          <OpenInNewIcon />
        </IconButton>
      </Typography>

      {detailed && (
        <Box my={1}>
          <img src={imagePath} alt={company} width={IMAGE_SIZE} />
        </Box>
      )}

      <Typography variant="body2" mb={2}>
        <T textKey="experience.duration" args={[formattedStartDate, formattedEndDate]} />
      </Typography>

      <Typography variant="body1" mb={projects.length === 0 ? 0 : 2}>
        <T textKey={employmentType} />
      </Typography>
    </>
  );
};
