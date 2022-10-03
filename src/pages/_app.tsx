import { chains, providers } from "@web3modal/ethereum"
import type { ConfigOptions } from "@web3modal/react"
import { Web3ModalProvider } from "@web3modal/react"
import type { AppProps } from "next/app"
import "../styles/globals.css"

const config: ConfigOptions = {
  projectId: "e40b66178bd91e41e31cfca63b90c2be",
  theme: "dark",
  accentColor: "default",
  ethereum: {
    appName: "web3Modal",
    chains: [chains.mainnet, chains.goerli],
    autoConnect: true,
    providers: [
      providers.walletConnectProvider({
        projectId: "e40b66178bd91e41e31cfca63b90c2be",
      }),
    ],
  },
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ModalProvider config={config}>
      <Component {...pageProps} />
    </Web3ModalProvider>
  )
}

export default MyApp
