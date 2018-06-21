import Moleculer from 'moleculer';
import HelloActionParams from 'HelloActionParams';

export default <Moleculer.Action>{
  name: 'world',
  params: {
    name: {
      type: 'string',
      optional: true,
    },
  },
  async handler(ctx: Moleculer.Context): Promise<string> {
    const {
      name = 'World',
    } = <HelloActionParams>ctx.params;

    return `Hello, ${name}!`;
  },
};
