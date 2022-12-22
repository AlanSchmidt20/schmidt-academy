import React from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body1,
  padding: theme.spacing(1.6),
  /*   textAlign: 'center', */
  color: theme.palette.text.primary,
}))

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    comments: '',
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

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // submitToApi(formData)
    console.log(formData)
  }

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>CONTACT US</h1>
      <Box
        className="contact--component"
        // component="form"
        sx={{ display: 'flex', '& .MuiTextField-root': { m: 1, width: '25ch' } }}
        /*    noValidate
      autoComplete="off" */
      >
        <form onSubmit={handleSubmit} style={{ width: '40%' }}>
          <TextField
            type="text"
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}
            id="outlined-basic"
            label="First Name"
            variant="outlined"
          />
          <TextField
            type="text"
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
          />
          <TextField
            type="text"
            onChange={handleChange}
            name="phoneNumber"
            value={formData.phoneNumber}
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
          />
          <TextField
            type="text"
            onChange={handleChange}
            name="email"
            value={formData.email}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <TextField
            type="text"
            onChange={handleChange}
            name="comments"
            multiline
            maxRows={4}
            value={formData.comments}
            id="outlined-basic"
            label="Comments"
            variant="outlined"
          />
          <Button type="submit" variant="outlined" sx={{ m: 1, display: 'block' }}>
            Submit
          </Button>
        </form>
        <Stack spacing={2} sx={{ marginTop: '10px', width: '40%' }}>
          <Item>Hello</Item>
          <Item>Hello</Item>
          <Item>Hello</Item>
          <Item>Hello</Item>
        </Stack>
      </Box>
    </>
  )
}
