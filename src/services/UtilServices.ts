export function formatShortAddressWallet(addressFormat: string): string {
  return `${addressFormat.slice(0, 3)}...${addressFormat.slice(-3)}`
}
