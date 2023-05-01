import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

type ProjectDetailsDialogProps = {
  handleClose: () => void;
};

/**
 * Display project details
 */
export const ProjectDetailsDialog = (props: ProjectDetailsDialogProps): JSX.Element => {
  const { handleClose } = props;

  return (
    <Dialog open={true} onClose={handleClose}>
      <DialogTitle>Optional sizes</DialogTitle>
      <DialogContent>
        <DialogContentText>You can set my maximum width and whether to adapt or not.</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
