import { Framework } from 'components/Card/FrameworkCard/framework.types';
import { Avatar, Paper, Stack, Typography } from '@mui/material';
import { T } from 'components/T/T';
import { getFrameworkLink } from 'components/Card/FrameworkCard/framework.utils';

type FrameworkProps = {
  /**
   * Selected framework
   */
  type: Framework;
  /**
   * If {@code true} the avatar & text size is small
   * @default false
   */
  small?: boolean;
};

/**
 * Display details for a specific framework
 */
export const FrameworkCard = (props: FrameworkProps): JSX.Element => {
  const { type, small = false } = props;

  const avatarSize = small ? 25 : 18;

  return (
    <a href={getFrameworkLink(type)} style={{ textDecoration: 'none' }} target={'_blank'}>
      <Paper sx={{ maxWidth: 'min-content', borderRadius: 10, py: small ? 0.5 : 1, px: small ? 1 : 2 }}>
        <Stack direction="row" alignItems="center" spacing={1.2}>
          <Avatar alt={type} src={`/assets/frameworks/${type}.svg`} sx={{ width: avatarSize, height: avatarSize }} />
          <Typography sx={{ fontSize: small ? '0.8rem' : '1rem' }} noWrap>
            <T textKey={`frameworks.${type}`} />
          </Typography>
        </Stack>
      </Paper>
    </a>
  );
};
