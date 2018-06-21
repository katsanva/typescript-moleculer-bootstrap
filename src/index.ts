import { ServiceBroker } from 'moleculer';
import config from 'config';

import HelloSvc from './services/hello/hello-service';
import HelloDecoratorSvc from './services/hello-decorator/hello-decorator-service';

const broker = new ServiceBroker(config.get('moleculer.broker'));

broker.createService(HelloSvc);
broker.createService(HelloDecoratorSvc);

broker.start();
