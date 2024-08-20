import { getAccount, uninstallModule } from 'src'
import { getModule } from 'src'
import { getClient } from 'src'
import { MockKernelAccountDeployed } from 'test/utils/mocks/account'
import { MockClient } from 'test/utils/mocks/client'
import {
  MockExecutor,
  MockFallback,
  MockHook,
  MockValidator,
} from 'test/utils/mocks/module'
describe('Get calldata to uninstall a module', () => {
  // Setup
  const client = getClient(MockClient)
  const account = getAccount(MockKernelAccountDeployed)
  const validator = getModule({
    ...MockValidator,
    module: '0x503b54ed1e62365f0c9e4caf1479623b08acbe77',
  })
  const executor = getModule(MockExecutor)
  const hook = getModule(MockHook)
  const fallback = getModule(MockFallback)
  it('Should return the data to uninstall a validator', async () => {
    const executions = await uninstallModule({
      client,
      account,
      module: validator,
    })

    expect(executions.length).toEqual(0)
    // expect(executions[0].target).toEqual(account.address)
    // expect(Number(executions[0].value)).toEqual(0)
    // Todo: decode callData
  })
  it('Should return the data to uninstall an executor', async () => {
    const executions = await uninstallModule({
      client,
      account,
      module: executor,
    })

    expect(executions.length).toEqual(0)
    // expect(executions[0].target).toEqual(account.address)
    // expect(Number(executions[0].value)).toEqual(0)
    // Todo: decode callData
  })
  it('Should return the data to uninstall a fallback handler', async () => {
    const executions = await uninstallModule({
      client,
      account,
      module: fallback,
    })
    expect(executions.length).toEqual(0)
    // expect(executions[0].target).toEqual(account.address)
    // expect(Number(executions[0].value)).toEqual(0)
    // Todo: decode callData
  })
  it('Should return the data to uninstall a hook', async () => {
    const executions = await uninstallModule({ client, account, module: hook })

    expect(executions.length).toEqual(0)
    // expect(executions[0].target).toEqual(account.address)
    // expect(Number(executions[0].value)).toEqual(0)
    // Todo: decode callData
  })
})
