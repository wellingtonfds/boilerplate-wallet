import WalletConnectProvider from '@walletconnect/web3-provider'
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'

import {
  clearWalletVariables,
  signerProviderVar,
  walletAccountVar,
  walletChainIdVar,
  walletHasInitializedVar,
  web3modalVar
} from 'src/components/shared/graphql/variables/WalletVariables'

function setSingerProvider(modal: any) {
  const provider = new ethers.providers.Web3Provider(modal)
  signerProviderVar(provider)
}

function handleEvents(modal: any) {
  if (!modal?.on) {
    return
  }

  const handleAccountsChanged = (accounts: string[]) => {
    if (accounts) {
      walletAccountVar(accounts[0])
      setSingerProvider(modal)
    }
    walletHasInitializedVar(true)
  }

  const handleChainChanged = (_hexChainId: string) => {
    walletChainIdVar(parseInt(_hexChainId))
    setSingerProvider(modal)
  }

  modal.on('accountsChanged', handleAccountsChanged)
  modal.on('chainChanged', handleChainChanged)
}

export async function connectWallet(rpc?: Record<string, string>) {
  const web3Modal = new Web3Modal({
    network: 'mainnet',
    cacheProvider: true,
    providerOptions: {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          rpc
        }
      }
    }
  })
  try {
    const modal = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(modal)
    const accounts = await provider.listAccounts()
    const network = await provider.getNetwork()

    signerProviderVar(provider)
    walletChainIdVar(network.chainId)
    web3modalVar(web3Modal)

    if (accounts) {
      walletAccountVar(accounts[0])
      walletHasInitializedVar(true)
    }

    handleEvents(modal)
    walletHasInitializedVar(true)
  } catch (e) {
    walletHasInitializedVar(true)
  }
}

export async function disconnectWallet() {
  const web3Modal = web3modalVar()
  web3Modal && (await web3Modal.clearCachedProvider())
  clearWalletVariables()
}

export const switchNetwork = async (switchToChainId: number) => {
  const signerProvider = signerProviderVar()

  const toHex = (num: number) => {
    return '0x' + num.toString(16)
  }

  if (signerProvider && signerProvider.provider.request) {
    await signerProvider.provider.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: toHex(switchToChainId) }]
    })
  }
}
