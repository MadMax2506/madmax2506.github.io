import { useTheme } from '@mui/material';

type MailLinkProps = { email: string };

/**
 * Provides an e mail link
 */
export const MailLink = (props: MailLinkProps): JSX.Element => {
  const { email } = props;

  const { highlighting: highlightingColor } = useTheme();

  return (
    <a href={`mailto:${email}`} style={{ textDecoration: 'none', color: highlightingColor }}>
      {email}
    </a>
  );
};
