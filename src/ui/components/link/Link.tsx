import { Link as MuiLink, type LinkProps as MuiLinkProps } from '@mui/material'
import {
  Link as RouterLink,
  type LinkProps as RouterLinkProps
} from 'react-router'

// Omit the component prop as we'll set it ourselves.
type LinkProps = Omit<MuiLinkProps, 'component'> & RouterLinkProps

/**
 * A simple link to combine material and react-router 'Link' components
 * @param props
 * @constructor
 */
export const Link = (props: LinkProps) => (
  <MuiLink component={RouterLink} {...props} />
)
