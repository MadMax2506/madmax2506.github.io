import { Stack } from '@mui/material';
import { FrameworkCard } from 'components/Card/FrameworkCard/FrameworkCard';
import { Frameworks } from 'components/Card/FrameworkCard/framework.types';

type JobDescriptionProps = {
  frameworks: Frameworks[];
};

/**
 * Display more details to the related job
 */
export const JobDescription = (props: JobDescriptionProps): JSX.Element => {
  const { frameworks } = props;

  return (
    <Stack direction="column">
      {/* TODO description text with type of work */}
      <Stack direction={'row'} spacing={1} alignItems="flex-end">
        {frameworks.map((framework) => (
          <FrameworkCard key={framework} type={framework} />
        ))}
      </Stack>
    </Stack>
  );
};
