import { test } from 'qunit';
import moduleForAcceptance from 'blog-dashboard/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | dashboard languages', {
  beforeEach(){
    server.createList('language', 3);
    visit('/dashboard/languages');
  }
});

test('visiting /dashboard/languages', function(assert) {
  andThen(function() {
    assert.equal(currentURL(), '/dashboard/languages');
    assert.equal(currentRouteName(), 'dashboard.languages', 'dashboard languages route');
  });
});

test('showing created languages', function(assert) {
  andThen(function() {
     assert.equal(find('.container > .card').length, 3, 'languages are shown on page');
  });
});

test('language button', function(assert) {
  andThen(function() {
     assert.equal(find('.container > .primary-button').length, 1, 'add button is present on page');
  });
});

test('show language on click', function(assert) {
  click('.card');
  andThen(function(){
    assert.equal(currentRouteName(), 'dashboard.languages.show', 'show language route');
  });
});

test('add language on click', function(assert) {
  click('.primary-button');
  andThen(function(){
    assert.equal(currentRouteName(), 'dashboard.languages.new', 'new language route');
  });
});