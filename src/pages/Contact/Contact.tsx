import { SectionContainer } from 'components/Container/SectionContainer';
import { Stack } from '@mui/material';
import { SocialMediaList } from 'pages/Contact/SocialMediaList';
import { MailReference } from 'pages/Contact/MailReference';

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
