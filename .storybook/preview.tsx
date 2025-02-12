import '@fontsource/roboto/300.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import type { Preview } from '@storybook/react'
import { ThemeProvider } from '@emotion/react'
import { getTheme } from '@/app/config'
import { HelmetProvider } from 'react-helmet-async'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },

  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={getTheme()}>
          <HelmetProvider>
            <Story />;
          </HelmetProvider>
        </ThemeProvider>
      )
    }
  ],

  tags: ['autodocs']
}

export default preview
