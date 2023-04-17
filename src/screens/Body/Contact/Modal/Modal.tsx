import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import { Button } from '@mui/material'

export default function AlertDialog(props: { onClose: any; open: any }) {
  const { onClose, open } = props

  const handleClose = () => {
    onClose(false)
  }
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{'Thanks for contacting us!'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your message has been received, we will contact you soon.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
