import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useTheme } from '@mui/material';
import { T } from 'components/T/T';

type ProjectDetailsDialogProps = {
  /**
   * Repository full name (organisation/user + repo name)
   */
  fullName: string;
  /**
   * On close callback
   */
  handleClose: () => void;
};

/**
 * Display project details
 *
 * @param props {@link ProjectDetailsDialogProps}
 */
export const ProjectDetailsDialog = (props: ProjectDetailsDialogProps): JSX.Element => {
  const { fullName, handleClose } = props;

  const { highlighting } = useTheme();

  return (
    <Dialog scroll="paper" onClose={handleClose} open={true}>
      <DialogTitle>{fullName}</DialogTitle>

      <DialogContent dividers>
        <DialogContentText>
          <T textKey={`project.${fullName}.description.long`} />
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button variant="text" onClick={handleClose} sx={{ color: highlighting }} autoFocus fullWidth={false}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};
