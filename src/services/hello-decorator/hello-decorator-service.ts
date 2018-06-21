import { Context, ActionParams } from 'moleculer';
import { Service, Action, BaseSchema, ActionOptions } from 'moleculer-decorators';
import HelloActionParams from 'HelloActionParams';

const helloActionOptions: ActionOptions = {
  params: <ActionParams>{
    name: {
      type: 'string',
      optional: true,
    },
  },
};

@Service({
  name: 'hello:decorator',
})
export default class DecoratorService extends BaseSchema {
  @Action(helloActionOptions)
  async world(ctx: Context): Promise<string> {
    const { name = 'Decorated world' } = <HelloActionParams>ctx.params;

    return `Hello, ${name}!`;
  }
}
