import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import emailjs from '@emailjs/browser'
import { useState } from 'react'

export default function FormDialog(props: { onClose: any; open: any }) {
  const { onClose, open } = props
  const [formData, setFormData] = useState({
    email: '',
  })

  const handleClose = () => {
    onClose(false)
  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_qnyh18p',
        'template_cdlckwg',
        e.currentTarget,
        'GSr3XNhto1i_9ltj7'
      )
      .then(
        result => {
          console.log(result.text)
          setFormData({ email: '' })
        },
        error => {
          console.log(error.text)
        }
      )

    handleClose()
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>CAMP INFORMATION</DialogTitle>

        <form onSubmit={sendEmail}>
          <DialogContent>
            <DialogContentText>
              For further information about the camp, please write your email and we will
              contact you soon.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              name="email"
              fullWidth
              required
              variant="standard"
              onChange={e => setFormData({ email: e.target.value })}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button value={formData.email} type="submit">
              SEND
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  )
}
