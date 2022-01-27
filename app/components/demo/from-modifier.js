import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency';

export default class DemoFromModifierComponent extends Component {
  myModifier = () => {
    this.myTask.perform();
  };

  @tracked foo;

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
    console.log('modifier >> my task');
    yield new Promise((resolve) => setTimeout(resolve, 1000));
  }
}
