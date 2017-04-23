import { test } from 'qunit';
import moduleForAcceptance from 'blog-dashboard/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | dashboard languages', {
  beforeEach(){
    server.createList('lanugage', 3);
    visit('/dashboard/languages');
  }
});

test('visiting /dashboard/languages', function(assert) {
  andThen(function() {
    assert.equal(currentURL(), '/dashboard/languages');
    assert.equal(currentRouteName(), 'dashboard.languages', 'dashboard lanugages route');
  });
});

test('showing created languages', function(assert) {
  andThen(function() {
     assert.equal(find('.container > .card').length, 3, 'lanugages are shown on page');
  });
});

test('language button', function(assert) {
  andThen(function() {
     assert.equal(find('.container > .add-button .large').length, 1, 'add button is present on page');
  });
});

test('show language on click', function(assert) {
  click('.card');
  andThen(function(){
    assert.equal(currentRouteName(), 'dashboard.lanugages.show', 'show lanugage route');
  });
});

test('add language on click', function(assert) {
  click('.add-button .large');
  andThen(function(){
    assert.equal(currentRouteName(), 'dashboard.lanugages.new', 'new lanugage route');
  });
});