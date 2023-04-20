import { Frameworks } from 'components/Card/FrameworkCard/framework.types';
import { Avatar, Paper, Stack, Typography } from '@mui/material';
import { T } from 'components/T/T';

type FrameworkProps = { type: Frameworks };

const AVATAR_SIZE = 25;

export const FrameworkCard = (props: FrameworkProps): JSX.Element => {
  const { type } = props;

  return (
    <Paper sx={{ maxWidth: 'min-content', borderRadius: 10, py: 1, px: 2 }}>
      <Stack direction="row" alignItems="center" spacing={1.2}>
        <Avatar alt={type} src={`src/assets/frameworks/${type}.svg`} sx={{ width: AVATAR_SIZE, height: AVATAR_SIZE }} />
        <Typography noWrap>
          <T textKey={`frameworks.${type}`} />
        </Typography>
      </Stack>
    </Paper>
  );
};
