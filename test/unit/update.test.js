/* global describe it */

import {run} from '@syncano/test'
import {getFakeData} from './utils'

describe('update', function () {
  it('update with required', async () => {

    require('@syncano/core').__setMocks({
      data: {
        Event: {
          update: jest.fn().mockImplementationOnce(() => {
            return Promise.resolve()
          })
        }
      }
    })

    // Generate fake args
    const fakeArgs = await getFakeData('update', {optionalsProbability: 0})

    const result = await run('update', {args: fakeArgs})
    expect(result).toHaveProperty('code', 204)
  })

  it('update with optionals', async () => {

    require('@syncano/core').__setMocks({
      data: {
        Event: {
          update: jest.fn().mockImplementationOnce(() => {
            return Promise.resolve()
          })
        }
      }
    })

    // Generate fake args
    const fakeArgs = await getFakeData('update', {optionalsProbability: 1})

    const result = await run('update', {args: fakeArgs})
    expect(result).toHaveProperty('code', 204)
  })
})
