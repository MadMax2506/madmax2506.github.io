import { Avatar } from '@mui/material';

/**
 * Personal avatar of me
 */
export const PersonalAvatar = (): JSX.Element => {
  const size = {
    xs: 230,
    md: 300,
    lg: 350,
  };

  return <Avatar alt="personal-avatar" src="/assets/profile.jpg" sx={{ width: size, height: size, m: 'auto' }} />;
};
