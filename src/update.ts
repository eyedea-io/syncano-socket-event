import * as S from '@eyedea/syncano'
import {Event} from './types'

interface Args extends Event {
  id: string
}

class Endpoint extends S.Endpoint {
  async run(
    {response, data}: S.Core,
    {args}: S.Context<Args>
  ) {
    const params = Object.assign({}, args)
    delete params.id

    const updatedEvent = await data.Event.update(args.id, params)
    response.json(updatedEvent, 204)
  }
}

export default ctx => new Endpoint(ctx)
