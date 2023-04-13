import { useTranslationContext } from 'context/TranslationContext/TranslationContext';
import { Avatar, Paper, Stack, Typography } from '@mui/material';
import { SocialMedia } from 'components/SocialMediaCard/social-media.types';

type SocialMediaCardProps = {
  type: SocialMedia;
};

/**
 * @param {SocialMediaCardProps['type']} type for a social media platform
 * @return {SocialMediaDetails} for a specific {@link SocialMedia type}
 */
export const getDetails = (type: SocialMediaCardProps['type']) => {
  switch (type) {
    // TODO
    default:
      throw Error('Invalid social-media type');
  }
};

const AVATAR_SIZE = 20;

export const SocialMediaCard = (props: SocialMediaCardProps): JSX.Element => {
  const { type } = props;

  const { t } = useTranslationContext();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const details = getDetails(type);

  return (
    <Paper sx={{ maxWidth: 'min-content', borderRadius: 10, py: 1, px: 2 }}>
      <Stack direction="row" alignItems="center" spacing={1.2}>
        <Avatar alt={type} src={`src/assets/frameworks/${type}.svg`} sx={{ width: AVATAR_SIZE, height: AVATAR_SIZE }} />
        <Typography noWrap>{t(`social-media.${type}`)}</Typography>
      </Stack>
    </Paper>
  );
};
