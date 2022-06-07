import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'

import { globalStyles } from '../../shared/styles'
import { ChannelContextProvider } from '../context/ChannelContext'

const cache = createCache({ key: 'next' })

const App = ({ Component, pageProps }) => (
  <CacheProvider value={cache}>
    <ChannelContextProvider>
    {globalStyles}
    <Component {...pageProps} />
    </ChannelContextProvider>
  </CacheProvider>
)

export default App
