import { SectionContainer } from 'components/Container/SectionContainer';
import { Stack } from '@mui/material';
import { SocialMediaList } from 'pages/Portfolio/Contact/SocialMediaList';
import { MailReference } from 'pages/Portfolio/Contact/MailReference';

export const Contact = (): JSX.Element => {
  return (
    <SectionContainer titleTextKey="pages.contact">
      <Stack spacing={2}>
        <MailReference />
        <SocialMediaList />
      </Stack>
    </SectionContainer>
  );
};
