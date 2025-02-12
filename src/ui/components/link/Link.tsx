import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material'
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps
} from 'react-router-dom'

// Omit the component prop as we'll set it ourselves.
type LinkProps = Omit<MuiLinkProps, 'component'> & RouterLinkProps

/**
 * A simple link to combine material and react-router-dom 'Link' components
 * @param props
 * @constructor
 */
export const Link = (props: LinkProps) => (
  <MuiLink component={RouterLink} {...props} />
)
