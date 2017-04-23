import { test } from 'qunit';
import moduleForAcceptance from 'blog-dashboard/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | dashboard languages new',{
  beforeEach(){
    visit("dashboard/languages/new")
  }
});

test('visiting /dashboard-languages-new', function(assert) {
  andThen(function() {
    assert.equal(currentRouteName(), 'dashboard.languages.new', 'dashboard languages new route');
  });
});
