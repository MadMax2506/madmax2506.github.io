import { Avatar, Paper, Stack, Typography } from '@mui/material';
import { Skill } from 'components/Card/SkillCard/skill.types';
import { T } from 'components/T/T';
import { getSkillDetails } from './skills.utils';

type SkillCardProps = {
  /**
   * Selected skill
   */
  type: Skill;
  /**
   * If {@code true} the avatar & text size is small
   * @default false
   */
  small?: boolean;
};

/**
 * Display details of an hard skill
 */
export const SkillCard = (props: SkillCardProps): JSX.Element => {
  const { type, small = false } = props;

  const avatarSize = small ? 25 : 18;
  const { label, since } = getSkillDetails(type);

  return (
    <Paper sx={{ maxWidth: 'min-content', borderRadius: 10, py: small ? 0.5 : 1, px: small ? 1 : 2 }}>
      <Stack direction="row" alignItems="center" spacing={1.2}>
        <Avatar alt={type} src={`/assets/skills/${type}.svg`} sx={{ width: avatarSize, height: avatarSize }} />
        <Typography sx={{ fontSize: small ? '0.8rem' : '1rem' }} noWrap>
          <T textKey={label} />
        </Typography>
      </Stack>
    </Paper>
  );
};
