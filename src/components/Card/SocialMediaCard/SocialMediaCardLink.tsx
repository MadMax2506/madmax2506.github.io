import { Box, Typography, useTheme } from '@mui/material';
import { SocialMediaDetails } from 'components/Card/SocialMediaCard/social-media.types';

type SocialMediaCardLinkProps = Required<Pick<SocialMediaDetails, 'mailTo'>>;

export const SocialMediaCardLink = (props: SocialMediaCardLinkProps): JSX.Element => {
  const { mailTo } = props;

  const {
    highlighting: highlightingColor,
    palette: {
      text: { primary: primaryTextColor },
    },
  } = useTheme();

  return (
    <Box width="max-content">
      <Typography
        sx={{
          fontSize: '1.2rem',
          boxShadow: `inset 0 0 0 0 ${highlightingColor}`,
          color: highlightingColor,
          padding: '0 .25rem',
          margin: '0 -.25rem',
          transition: 'color .3s ease-in-out, box-shadow .3s ease-in-out',
          '&:hover': {
            color: primaryTextColor,
            boxShadow: `inset 265px 0 0 0 ${highlightingColor}`,
          },
        }}
      >
        {mailTo}
      </Typography>
    </Box>
  );
};
