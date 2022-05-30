import { render, screen, fireEvent } from '@testing-library/react'
import { mocked } from 'ts-jest/cli'
import { signIn, useSession } from 'next-auth/react'
import { SubscribeButton } from '.'
import { useRouter } from 'next/router'

jest.mock('next-auth/react');

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        push: jest.fn()
      }
    }
  }
})
 
describe("SubscribeButton component", () => {
  it('renders correctly', () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce([null, false])

    render(<SubscribeButton priceId="" />)
  
    expect(screen.getByText('Subscribe now')).toBeInTheDocument()
  })

  it('redirects user to sign in when not authenticated', () => {
    const signInMocked = mocked(signIn)
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce([null, false])

    render(<SubscribeButton priceId="" />)

    const subscribeButton = screen.getByText('Subscribe now');

    fireEvent.click(subscribeButton)

    expect(signInMocked).toHaveBeenCalled()
  })

  it('redirects to posts when user already has a subscription', () => {
    const useRouterMocked = mocked(useRouter)
    const useSessionMocked = mocked(useSession)
    const pushMock = jest.fn()

    useSessionMocked.mockReturnValueOnce([
      { 
        user: { name: 'John Doe', email: 'john@doe.com' }, 
        activeSubscription: 'fake-active-subscription',
        expires: 'fake-expires' 
      }, 
      false
    ])    

    useRouterMocked.mockReturnValueOnce({
      push: pushMock
    } as any)

    render(<SubscribeButton priceId="" />)

    const subscribeButton = screen.getByText('Subscribe now');

    fireEvent.click(subscribeButton)

    expect(pushMock).toHaveBeenCalledWith('/posts')
  })
})