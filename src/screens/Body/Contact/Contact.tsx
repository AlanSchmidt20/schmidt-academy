import React, { useRef, useState } from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import { contactUs } from '../../../content/contactUs'
import emailjs from '@emailjs/browser'
import AlertDialog from './Modal/Modal'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body1,
  padding: theme.spacing(1.6),
  /*   textAlign: 'center', */
  color: theme.palette.text.primary,
}))

const contactInformation = contactUs.map(contact => (
  <Stack>
    <Item sx={{ display: 'flex' }}>
      <b>{contact.title} </b> {contact.icon}
      {contact.description}
      {contact.iconOne} {contact.inconTwo} {contact.iconThree}
    </Item>
  </Stack>
))

export default function ContactUs() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: '',
  })
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      }
    })
  }

  const form = useRef<HTMLFormElement>(null!)

  const sendEmail = (e: { target: any; preventDefault: () => void }) => {
    e.preventDefault()

    emailjs.sendForm('service_qnyh18p', 'template_znafdfh', form.current, 'GSr3XNhto1i_9ltj7').then(
      result => {
        console.log(result.text)
        setFormData({
          firstName: '',
          lastName: '',
          phoneNumber: '',
          email: '',
          message: '',
        })
      },
      error => {
        console.log(error.text)
      }
    )
  }

  const [modalOpen, setModalOpen] = useState(false)

  const handleClickOpen = () => {
    setModalOpen(true)
  }

  const handleClose = () => {
    setModalOpen(false)
  }
  var open = 'something' //temporary solution for keyword error

  return (
    <div className="contact--container">
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>CONTACT US</h1>
      <Box
        className="contact--component"
        sx={{
          display: 'flex',
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}>
        <form
          ref={form}
          onSubmit={sendEmail}
          /* onSubmit={handleSubmit} */ className="contact--form">
          <TextField
            className="textField--input"
            type="text"
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}
            id="outlined-basic"
            label="First Name"
            variant="outlined"
          />
          <TextField
            className="textField--input"
            type="text"
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
          />
          <TextField
            className="textField--input"
            type="text"
            onChange={handleChange}
            name="phoneNumber"
            value={formData.phoneNumber}
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
          />
          <TextField
            className="textField--input"
            type="text"
            onChange={handleChange}
            name="email"
            value={formData.email}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <TextField
            className="textField--input"
            type="text"
            onChange={handleChange}
            name="message"
            multiline
            maxRows={4}
            value={formData.message}
            id="outlined-basic"
            label="Message"
            variant="outlined"
          />
          <Button
            className="submit--button"
            type="submit"
            variant="outlined"
            size="large"
            onClick={handleClickOpen}
            disabled={
              formData.firstName.length < 1 ||
              formData.lastName.length < 1 ||
              formData.phoneNumber.length < 1 ||
              formData.email.length < 1
            }
            sx={{ m: 1, display: 'block', mb: 2 }}>
            Submit
          </Button>
        </form>
        <Stack spacing={2.3} className="contact--information">
          {contactInformation}
        </Stack>
      </Box>
      {modalOpen && <AlertDialog open={open} onClose={handleClose} />}
    </div>
  )
}
