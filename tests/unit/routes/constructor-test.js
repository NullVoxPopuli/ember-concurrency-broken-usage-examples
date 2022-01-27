import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | constructor', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:constructor');
    assert.ok(route);
  });
});
