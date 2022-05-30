import { render, screen } from '@testing-library/react'
import { mocked } from 'ts-jest/cli'
import { SignInButton } from '.'

jest.mock('next-auth/react')

describe("SignInButton component", () => {

  it('renders correctly when user is not authenticated', () => {
    // const useSessionMocked = mocked(useSession)

    // useSessionMocked.mockReturnValueOnce([null, false]);

    render(<SignInButton />)
  
    expect(screen.getByText('Sign in with Github')).toBeInTheDocument()
  })
  
  // it('renders correctly when user is authenticated', () => {
  //   const useSessionMocked = mocked(useSession)

  //   useSessionMocked.mockReturnValueOnce([
  //     { 
  //       user: { name: 'John Doe', email: 'john@doe.com' }, 
  //       expires: 'fake-expires' 
  //     }, 
  //     false
  //   ])

  //   render(<SignInButton />)
  
  //   expect(screen.getByText('John Doe')).toBeInTheDocument()
  // })
})