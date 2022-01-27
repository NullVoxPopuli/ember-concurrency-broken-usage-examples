import Component from '@glimmer/component';
import { cached, tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency';

export default class DemoFromGetterComponent extends Component {
  get data() {
    return {
      _data: this._data,
      value: this.myTask.last?.value,
      isIdle: this.myTask.isIdle,
      isPending: this.myTask.isPending,
      isRunning: this.myTask.isRunning,
    };
  }

  // Never do this!
  // Demonstration purposes only!
  @cached
  get _data() {
    return this.myTask.perform();
  }

  @task
  *myTask() {
    console.log('getter >> my task');
    yield new Promise((resolve) => setTimeout(resolve, 1000));
  }
}
