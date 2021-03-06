import Component from '@glimmer/component';
import { task } from 'ember-concurrency';

export default class DemoConstructorComponent extends Component {
  constructor() {
    super(...arguments);

    this.myTask.perform();
  }

  get data() {
    return {
      value: this.myTask.last?.value,
      isIdle: this.myTask.isIdle,
      isPending: this.myTask.isPending,
      isRunning: this.myTask.isRunning,
    };
  }

  @task
  *myTask() {
    console.log('constructor >> my task');
    yield new Promise((resolve) => setTimeout(resolve, 1000));
  }
}
