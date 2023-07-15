import { OpenInNew as OpenInNewIcon } from '@mui/icons-material';
import { IconButton, Stack, Typography } from '@mui/material';
import { T } from 'components/T/T';
import { useLanguageContext } from 'context/LanguageContext/LanguageContext';
import dayjs from 'dayjs';
import { JSX } from 'react';
import { CompanyTimelineItemProps } from './CompanyTimelineItem';

const DATE_FORMAT = 'MM/YYYY';

export type CompanyItemBodyProps = Pick<
  CompanyTimelineItemProps,
  'company' | 'startDate' | 'href' | 'employmentType' | 'projects' | 'endDate'
>;

export const CompanyItemBody = (props: CompanyItemBodyProps): JSX.Element => {
  const { company, startDate, href, employmentType, projects, endDate } = props;

  const { translate } = useLanguageContext();

  const formattedStartDate = dayjs(startDate).format(DATE_FORMAT);
  const formattedEndDate = endDate ? dayjs(endDate).format(DATE_FORMAT) : translate('experience.until-yet');

  return (
    <>
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
        <T textKey={employmentType} />
      </Typography>
    </>
  );
};
