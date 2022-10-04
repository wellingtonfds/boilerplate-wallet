import { makeVar, ReactiveVar } from '@apollo/client'
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'

export const walletAccountVar: ReactiveVar<string> = makeVar<string>('')
export const walletChainIdVar: ReactiveVar<number | null> = makeVar<number | null>(null)
export const signerProviderVar: ReactiveVar<ethers.providers.Web3Provider | null> = makeVar<ethers.providers.Web3Provider | null>(null)
export const web3modalVar: ReactiveVar<Web3Modal | null> = makeVar<Web3Modal | null>(null)
export const walletConnectVar: ReactiveVar<number | null> = makeVar<number | null>(null)
export const walletHasInitializedVar: ReactiveVar<boolean> = makeVar<boolean>(false)

export function clearWalletVariables() {
  walletAccountVar('')
  walletChainIdVar(null)
  signerProviderVar(null)
  web3modalVar(null)
}
