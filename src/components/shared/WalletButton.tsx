import { Button } from 'antd'
import React, { useEffect } from 'react'

import { useReactiveVar } from '@apollo/client'

import { formatShortAddressWallet } from 'src/services/UtilServices'
import { connectWallet } from 'src/services/WalletService'
import { signerProviderVar, walletAccountVar, walletHasInitializedVar } from './graphql/variables/WalletVariables'

interface WalletButtonProps {
  rpc?: Record<string, string>
}

export function WalletButton({ rpc }: WalletButtonProps) {
  const [name, setName] = React.useState<string | null>(null)
  const signerProvider = useReactiveVar(signerProviderVar)
  const walletHasInitialized = useReactiveVar(walletHasInitializedVar)
  const walletAccount = useReactiveVar(walletAccountVar)

  useEffect(() => {
    const handleName = async () => {
      if (!signerProvider || !walletHasInitialized || !walletAccount) {
        return
      }

      const ens = await signerProvider.lookupAddress(walletAccount)

      setName(ens || formatShortAddressWallet(walletAccount))
    }

    signerProvider && walletHasInitialized && walletAccount && handleName()
  }, [signerProvider, walletHasInitialized, walletAccount])

  useEffect(() => {
    if (!!localStorage.getItem('WEB3_CONNECT_CACHED_PROVIDER')) {
      connectWallet()
    } else {
      walletHasInitializedVar(true)
    }
  }, [])

  return (
    <>
      {name ? (
        <Button type='primary'>{name}</Button>
      ) : (
        <Button loading={!walletHasInitialized} type='primary' onClick={() => connectWallet(rpc)}>
          Connect Wallet
        </Button>
      )}
    </>
  )
}
