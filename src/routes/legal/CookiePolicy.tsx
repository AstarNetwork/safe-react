import { ReactElement } from 'react'
import { Title, Text } from '@gnosis.pm/safe-react-components'
import Link from 'src/components/layout/Link'
import Page from 'src/components/layout/Page'
import Block from 'src/components/layout/Block'
import { PRIVACY_POLICY_ROUTE } from 'src/routes/routes'

function CookiePolicy(): ReactElement {
  return (
    <Page align="center">
      <Block>
        <Title size="md" strong>
          Cookie Policy
        </Title>
        <Text size="md">
          We use cookies to provide you with the best experience and to help improve our website and application. Please
          read our{' '}
          <Link component={Link} to={PRIVACY_POLICY_ROUTE}>
            Privacy Policy
          </Link>{' '}
          for more information. By clicking “Accept all“, you agree to the storing of cookies on your device to enhance
          site navigation, analyze site usage and provide customer support.
        </Text>
      </Block>
    </Page>
  )
}

export default CookiePolicy
