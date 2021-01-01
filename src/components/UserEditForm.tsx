import { Box } from '@material-ui/core'
import React from 'react'
import { Button, LinkButton } from './shared/Button'
import { FormGroup } from './shared/FormGroup'
import { FormInput } from './shared/FormInput'
import { FormLabel } from './shared/FormLabel'

type Props = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  onChange: (event: React.ChangeEvent<any>) => void
  values: { username: string; email: string; password: string; country: string }
  isSubmitting: boolean
  submitButtonText: string
  isDeleteing: boolean
  deleteButtonText: string
  onDeleteClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export function UserEditForm({
  onSubmit,
  onChange,
  values,
  isSubmitting,
  submitButtonText,
  isDeleteing,
  deleteButtonText,
  onDeleteClick,
}: Props) {
  return (
    <form onSubmit={onSubmit} noValidate>
      <Box mb="24px">
        <FormGroup
          formLabel={<FormLabel htmlFor="username">Username</FormLabel>}
          formInput={
            <FormInput
              type="text"
              name="username"
              id="username"
              onChange={onChange}
              value={values.username}
              width={250}
            />
          }
        />
      </Box>

      <Box mb="24px">
        <FormGroup
          formLabel={<FormLabel htmlFor="email">Email</FormLabel>}
          formInput={
            <FormInput
              type="email"
              name="email"
              id="email"
              onChange={onChange}
              value={values.email}
              width={250}
            />
          }
        />
      </Box>

      <Box mb="24px">
        <FormGroup
          formLabel={<FormLabel htmlFor="password">Password</FormLabel>}
          formInput={
            <FormInput
              type="password"
              name="password"
              id="password"
              onChange={onChange}
              value={values.password}
              width={250}
            />
          }
        />
      </Box>

      <Box mb="24px">
        <FormGroup
          formLabel={<FormLabel htmlFor="country">Country</FormLabel>}
          formInput={
            <FormInput
              type="text"
              name="country"
              id="country"
              onChange={onChange}
              value={values.country}
              width={250}
            />
          }
        />
      </Box>

      <Box mb="24px">
        <Box display="inline-block" pr="16px">
          <Button variant="primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Loading...' : submitButtonText}
          </Button>
        </Box>

        <Box display="inline-block" pr="16px">
          <Button variant="warning" type="button" onClick={onDeleteClick} disabled={isDeleteing}>
            {isDeleteing ? 'Loading...' : deleteButtonText}
          </Button>
        </Box>

        <Box display="inline-block" pr="16px">
          <LinkButton to="/users">Cancel</LinkButton>
        </Box>
      </Box>
    </form>
  )
}
