import * as S from '@eyedea/syncano'
import {Event} from './types'

interface Args extends Event {}

class Endpoint extends S.Endpoint {
  async run(
    {response, data}: S.Core,
    {args}: S.Context<Args>
  ) {
    await data.Event.create(args)
    response.json({}, 204)
  }
}

export default ctx => new Endpoint(ctx)
