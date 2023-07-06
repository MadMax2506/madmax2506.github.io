import { Box, Paper, Tooltip, Typography } from '@mui/material';
import { Skill } from 'components/Card/SkillCard/skill.types';
import { useLanguageContext } from 'context/LanguageContext/LanguageContext';
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
  const avatarSize = small ? 50 : 36;

  const { name, since, imageSrc } = getSkillDetails(type);

  const { translate } = useLanguageContext();
  const buildTextKey = () => {
    const duration = new Date().getFullYear() - since;
    const durationTextKey = `skills.usage.duration.${duration === 0 ? 'zero' : duration === 1 ? 'one' : 'multiple'}`;
    return `${translate('skills.usage.since', [since])} - ${translate(durationTextKey, [duration])}`;
  };

  return (
    <Tooltip
      title={
        <Box>
          <Typography variant="body1">{name}</Typography>
          <Typography variant="body2">{buildTextKey()}</Typography>
        </Box>
      }
    >
      <Paper elevation={0} sx={{ width: avatarSize, height: avatarSize }}>
        <img alt={name} src={imageSrc} loading="lazy" />
      </Paper>
    </Tooltip>
  );
};
