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
import { useLocation } from 'react-router-dom'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body1,
  padding: theme.spacing(1.6),
  /*   textAlign: 'center', */
  color: theme.palette.text.primary,
}))

const contactInformation = contactUs.map((contact, idx) => (
  <Stack key={idx}>
    <Item className="contactInformation-items" sx={{ display: 'flex' }}>
      <b>{contact.title} </b> {contact.icon}
      {contact.description}
      {contact.iconOne} {contact.iconTwo}
    </Item>
  </Stack>
))

export default function ContactUs() {
  const location = useLocation()

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

    emailjs
      .sendForm('service_qnyh18p', 'template_znafdfh', form.current, 'GSr3XNhto1i_9ltj7')
      .then(
        result => {
          console.log(result.text)
          setFormData({
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            message: '',
          })
          setModalOpen(true)
        },
        error => {
          console.log(error.text)
        }
      )
  }

  const [modalOpen, setModalOpen] = useState(false)

  const handleClose = () => {
    setModalOpen(false)
  }
  var open = 'something' //temporary solution for keyword error

  return (
    <div
      className={
        location.pathname === '/contact'
          ? 'contact-page-container contact--container'
          : 'contact--container'
      }>
      <h1
        style={{
          textAlign: 'center',
          margin: '20px 0',
          marginBottom: '30px',
          fontFamily: 'Helvetica Neue LT',
          fontSize: '60px',
        }}>
        CONTACT US
      </h1>
      <Box
        className="contact--component"
        sx={{
          display: 'flex',
          '& .MuiTextField-root': { m: 1, width: '43.5%' },
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
            id="firstname"
            label="First Name"
            variant="outlined"
            required
          />
          <TextField
            className="textField--input"
            type="text"
            onChange={handleChange}
            name="lastName"
            id="lastName"
            value={formData.lastName}
            label="Last Name"
            variant="outlined"
            required
          />
          <TextField
            className="textField--input"
            type="tel"
            onChange={handleChange}
            name="phoneNumber"
            value={formData.phoneNumber}
            id="phoneNumber"
            label="Phone Number"
            variant="outlined"
            required
          />
          <TextField
            className="textField--input"
            type="email"
            onChange={handleChange}
            name="email"
            value={formData.email}
            id="email"
            label="Email"
            variant="outlined"
            required
          />
          <TextField
            className="textField--input message-input"
            type="text"
            onChange={handleChange}
            name="message"
            multiline
            maxRows={4}
            value={formData.message}
            id="name"
            label="Message"
            variant="outlined"
          />
          <Button
            className="submit--button"
            type="submit"
            variant="outlined"
            size="large"
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
