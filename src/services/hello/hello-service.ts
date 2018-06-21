import Moleculer from 'moleculer';

import WorldAction from './actions/world';

export default <Moleculer.ServiceSchema>{
  name: 'hello',
  actions: {
    WorldAction,
  },
};
