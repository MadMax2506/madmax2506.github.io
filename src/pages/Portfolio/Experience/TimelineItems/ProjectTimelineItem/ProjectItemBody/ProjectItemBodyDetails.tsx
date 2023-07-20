import { GridProps, Stack, Typography, TypographyProps } from '@mui/material';
import { T } from 'components/T/T';
import { useLanguageContext } from 'context/LanguageContext/LanguageContext';
import { ProjectItemBodyProps } from './ProjectItemBody';

type ProjectItemBodyDetailsProps = Required<Pick<ProjectItemBodyProps, 'detailTextKeys' | 'type'>> & {
  textVariante: TypographyProps['variant'];
  justifyContent: GridProps['justifyContent'];
  marginBottom: number;
};

export const ProjectItemBodyDetails = (props: ProjectItemBodyDetailsProps): JSX.Element => {
  const { textVariante, justifyContent, marginBottom, detailTextKeys, type } = props;

  const { translate } = useLanguageContext();

  if (detailTextKeys.length === 0) return <></>;

  return (
    <>
      <Typography sx={{ mb: marginBottom }} variant={textVariante} fontWeight="bold">
        <T textKey={`experience.type.${type}`} />
      </Typography>

      <Stack mb={marginBottom} justifyContent={justifyContent} spacing={1}>
        {detailTextKeys.map((detailTextKey) => (
          <Typography key={detailTextKey} variant={textVariante}>
            {translate(detailTextKey)}
          </Typography>
        ))}
      </Stack>
    </>
  );
};
