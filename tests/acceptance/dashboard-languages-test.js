import { test } from 'qunit';
import moduleForAcceptance from 'blog-dashboard/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | dashboard languages', {
  beforeEach(){
    server.createList('language', 3);
    server.create('language', {name:"Java", displayOrder:10});
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
     assert.equal(find('.container > .card').length, 4, 'languages are shown on page');
  });
});


test('show language on click', function(assert) {
  click(find('.card').last());
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