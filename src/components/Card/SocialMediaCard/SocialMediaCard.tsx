import { useTranslationContext } from 'context/TranslationContext/TranslationContext';
import { Paper, Stack, Typography, useTheme } from '@mui/material';
import { SocialMedia } from 'components/Card/SocialMediaCard/social-media.types';
import { getSocialMediaDetails } from 'components/Card/SocialMediaCard/social-media.utils';

type SocialMediaCardProps = {
  type: SocialMedia;
  /**
   * If true only the link of the social media reference is shown
   * @default false
   */
  linkOnly?: boolean;
};

/**
 * Display a social media reference
 */
export const SocialMediaCard = (props: SocialMediaCardProps): JSX.Element => {
  const { type, linkOnly = false } = props;

  const { t } = useTranslationContext();

  const {
    highlighting: highlightingColor,
    palette: {
      text: { primary: primaryTextColor },
    },
  } = useTheme();

  const { link, mailTo, icon: Icon } = getSocialMediaDetails(type);

  return (
    <a href={link ?? `mailto:${mailTo}`} style={{ textDecoration: 'none' }} target={link ? '_blank' : ''}>
      {linkOnly ? (
        <Typography
          sx={{
            'box-shadow': `inset 0 0 0 0 ${highlightingColor}`,
            color: highlightingColor,
            padding: '0 .25rem',
            margin: '0 -.25rem',
            transition: 'color .3s ease-in-out, box-shadow .3s ease-in-out',
            '&:hover': {
              color: primaryTextColor,
              'box-shadow': `inset 220px 0 0 0 ${highlightingColor}`,
            },
          }}
        >
          {mailTo}
        </Typography>
      ) : (
        <Paper sx={{ maxWidth: 'min-content', borderRadius: 10, py: 1, px: 2 }}>
          <Stack direction="row" alignItems="center" spacing={1.2}>
            {Icon && <Icon />}
            <Typography noWrap>{t(`social-media.${type}`)}</Typography>
          </Stack>
        </Paper>
      )}
    </a>
  );
};
