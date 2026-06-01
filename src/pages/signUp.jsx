import React from 'react'
import AuthLayout from '../components/Layouts/AuthLayout'
import FormSignUp from '../components/Fragments/FormSignUp'

function signup() {
  return (
    <>
      <AuthLayout title="Create an account">
        <FormSignUp />
      </AuthLayout>
    </>
  )
}

export default signup