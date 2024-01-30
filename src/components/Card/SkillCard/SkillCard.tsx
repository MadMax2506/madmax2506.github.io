import { Box, Paper, Tooltip, Typography, useTheme } from '@mui/material';
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
  const { name, since, imageSrc } = getSkillDetails(type);

  const { palette } = useTheme();
  const { translate } = useLanguageContext();

  const description = (() => {
    const duration = new Date().getFullYear() - since;
    const durationString = (() => {
      if (duration === 0) return 'zero';
      if (duration === 1) return 'one';
      return 'multiple';
    })();

    const durationTextKey = `skills.usage.duration.${durationString}`;
    return `${translate('skills.usage.since', [since])} - ${translate(durationTextKey, [duration])}`;
  })();

  const avatarSize = small ? 36 : 50;

  return (
    <Tooltip
      PopperProps={{ disablePortal: true }}
      title={
        <Box>
          <Typography variant="body1" color={palette.text.secondary}>
            {name}
          </Typography>
          <Typography variant="body2" color={palette.text.secondary}>
            {description}
          </Typography>
        </Box>
      }
      enterTouchDelay={0}
      leaveDelay={100}
    >
      <Paper elevation={0} sx={{ width: avatarSize, height: avatarSize }}>
        <img alt={name} src={imageSrc} loading="lazy" />
      </Paper>
    </Tooltip>
  );
};
