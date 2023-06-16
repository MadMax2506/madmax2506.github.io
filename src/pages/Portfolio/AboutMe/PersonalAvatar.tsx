import { Avatar } from '@mui/material';

/**
 * Personal avatar of me
 */
export const PersonalAvatar = (): JSX.Element => {
  const size = {
    xs: 350,
    md: 230,
    lg: 300,
  };

  return <Avatar alt="personal-avatar" src="/assets/profile.jpg" sx={{ width: size, height: size, m: 'auto' }} />;
};
