import { Address, encodeFunctionData, PublicClient } from 'viem'
import { getRegistryModules } from '../../common/queries'
import { Execution } from '../../account/types'
import { REGISTRY_ADDRESS } from './constants'
import { abi } from './abi'

export const fetchRegistryModules = ({ client }: { client: PublicClient }) =>
  getRegistryModules({ client })

export const getTrustAttestersAction = ({
  attesters,
  threshold,
}: {
  attesters: Address[]
  threshold: number
}): Execution => {
  return {
    target: REGISTRY_ADDRESS,
    value: BigInt(0),
    callData: encodeFunctionData({
      functionName: 'trustAttesters',
      abi,
      args: [threshold, attesters],
    }),
  }
}
