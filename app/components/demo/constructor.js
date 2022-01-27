import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency';

export default class DemoConstructorComponent extends Component {
  constructor() {
    super(...arguments);

    this.myTask.perform();
  }

  @tracked foo;

  get data() {
    return {
      foo: this.foo,
      value: this.myTask.last?.value,
      isIdle: this.myTask.isIdle,
      isPending: this.myTask.isPending,
      isRunning: this.myTask.isRunning,
    };
  }

  @task
  *myTask() {
    this.foo = 2;

    console.log('constructor >> my task');
    yield new Promise((resolve) => setTimeout(resolve, 1000));
  }
}
