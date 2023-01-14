import { IconButton, Stack } from '@mui/material'
import { Icon } from '@iconify/react'
import React from 'react'

const NETWORKS = [
  { href: 'https://github.com/killoblanco', icon: 'github' },
  { href: 'https://www.linkedin.com/in/killoblanco', icon: 'linkedin' },
  // { href: 'https://www.facebook.com/killoblanco/', icon: 'facebook' },
  // { href: 'https://twitter.com/killoblanco', icon: 'twitter' },
  // { href: 'https://www.youtube.com/@killo.blanco?sub_confirmation=1', icon: 'youtube' },
  // { href: 'https://www.twitch.tv/killoblanco', icon: 'twitch' },
  { href: 'https://www.paypal.com/donate/?hosted_button_id=XPHPMQWVW2SWA', icon: 'paypal' }
]

export const SocialNetwork = () => (
  <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
    {NETWORKS.map(({ href, icon }) => (
      <IconButton
        key={icon}
        component="a"
        href={href}
        target="_social"
        color="secondary"
        title={icon}
      >
        <Icon icon={`tabler:brand-${icon}`} />
      </IconButton>
    ))}
  </Stack>
)
