import { useTranslationContext } from 'context/TranslationContext/TranslationContext';
import { Paper, Stack, Typography } from '@mui/material';
import { SocialMedia } from 'components/SocialMediaCard/social-media.types';
import { getSocialMediaDetails } from 'components/SocialMediaCard/social-media.utils';

type SocialMediaCardProps = {
  type: SocialMedia;
};

export const SocialMediaCard = (props: SocialMediaCardProps): JSX.Element => {
  const { type } = props;

  const { t } = useTranslationContext();

  const { link, mailTo, icon: Icon } = getSocialMediaDetails(type);

  return (
    <a href={link ?? `mailto:${mailTo}`} style={{ textDecoration: 'none' }} target="_blank">
      <Paper sx={{ maxWidth: 'min-content', borderRadius: 10, py: 1, px: 2 }}>
        <Stack direction="row" alignItems="center" spacing={1.2}>
          {Icon && <Icon />}
          <Typography noWrap>{t(`social-media.${type}`)}</Typography>
        </Stack>
      </Paper>
    </a>
  );
};
