import config from '@payload-config'
import '@payloadcms/next/css'
import { RootLayout } from '@payloadcms/next/layouts'

/* This is the root layout for Payload pages */
const Layout = ({ children }) => <RootLayout config={config}>{children}</RootLayout>

export default Layout
