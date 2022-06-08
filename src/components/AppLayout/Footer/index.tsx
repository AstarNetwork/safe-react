import { makeStyles } from '@material-ui/core/styles'
import cn from 'classnames'
import * as React from 'react'
import { useDispatch } from 'react-redux'
//import AppstoreButton from 'src/components/AppstoreButton'

import GnoButtonLink from 'src/components/layout/ButtonLink'
import Link from 'src/components/layout/Link'
import { openCookieBanner } from 'src/logic/cookies/store/actions/openCookieBanner'
import { screenSm, secondary, sm } from 'src/theme/variables'

const useStyles = makeStyles({
  footer: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    flexShrink: '1',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    maxWidth: '100%',
    padding: `20px ${sm} 20px`,
    width: `${screenSm}px`,
  },
  item: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '13px',
  },
  link: {
    color: secondary,
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
  sep: {
    color: 'rgba(0, 0, 0, 0.54)',
    margin: '0 10px',
  },
  buttonLink: {
    padding: '0',
  },
} as any)

const Footer = (): React.ReactElement => {
  const appVersion = process.env.REACT_APP_APP_VERSION ? `v${process.env.REACT_APP_APP_VERSION} ` : 'Versions'
  const date = new Date()
  const classes = useStyles()
  const dispatch = useDispatch()

  const openCookiesHandler = () => {
    dispatch(openCookieBanner({ cookieBannerOpen: true }))
  }

  return (
    <footer className={classes.footer}>
      <span className={classes.item}>©{date.getFullYear()} Astar</span>
      <span className={classes.sep}>|</span>
      <Link className={cn(classes.item, classes.link)} target="_blank" to="https://astar.network">
        Website
      </Link>
      <span className={classes.sep}>|</span>
      <Link className={cn(classes.item, classes.link)} target="_blank" to="https://portal.astar.network">
        Astar Portal
      </Link>
      <span className={classes.sep}>|</span>
      <Link
        className={cn(classes.item, classes.link)}
        target="_blank"
        to="https://docs.google.com/document/d/1gxM0PEzFq7nW5VB11pMcDUaaKxfMz3BjTDtmEem_oo4"
      >
        Terms
      </Link>
      <span className={classes.sep}>|</span>
      <Link
        className={cn(classes.item, classes.link)}
        target="_blank"
        to="https://docs.google.com/document/d/1jEbhRfh292TahRMRdeN4z-8MYNU27dCS_vVopV6xQgk"
      >
        Privacy
      </Link>
      {/*<span className={classes.sep}>|</span>
      <Link className={cn(classes.item, classes.link)} target="_blank" to="https://gnosis-safe.io/licenses">
        Licenses
      </Link>
      <span className={classes.sep}>|</span>
      <Link className={cn(classes.item, classes.link)} target="_blank" to="https://gnosis-safe.io/imprint">
        Imprint
  </Link>*/}
      <span className={classes.sep}>|</span>
      <Link
        className={cn(classes.item, classes.link)}
        target="_blank"
        to="https://docs.google.com/document/d/152Z3d9a3aIU4jJdEltdkmRBx99_t85ytdfsfFwRcGMo"
      >
        Cookie Policy
      </Link>
      <span className={classes.sep}>-</span>
      <GnoButtonLink className={cn(classes.item, classes.link, classes.buttonLink)} onClick={openCookiesHandler}>
        Preferences
      </GnoButtonLink>
      <span className={classes.sep}>|</span>
      <Link className={cn(classes.item, classes.link)} target="_blank" to="https://github.com/AstarNetwork/safe-react">
        {appVersion}
      </Link>
      {/*<span className={classes.sep}>|</span>
      <AppstoreButton light placement="footer" />*/}
    </footer>
  )
}

export default Footer
