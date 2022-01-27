import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | from-modifier', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:from-modifier');
    assert.ok(route);
  });
});
