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

test('placeholders for new language', function(assert) {
  andThen(function() {
    assert.equal(find('label').text(), 'Name', 'label for language name');
    assert.equal(find('label').text(), 'Display Order', 'label for language display order');
    assert.equal(find('label').text(), 'Theme', 'label for language theme');
    // assert.equal(find('label').text(), 'secondary name', 'label for language name');

  });
});

test('placeholders for new language', function(assert) {
  andThen(function() {
    assert.equal(find('input').placeholder(), 'Name', 'input for language name');
    assert.equal(find('input').placeholder(), 'Display Order', 'input for language display order');
    assert.equal(find('input').placeholder(), 'Theme', 'select for language theme');
    // assert.equal(find('label').text(), 'secondary name', 'label for language name');

  });
});

test('save button', function(assert) {
  andThen(function() {
     assert.equal(find('.container > .primary-button').length, 1, 'add save button is present on page');
  });
});

test('cancel button', function(assert) {
  andThen(function() {
     assert.equal(find('.container > .secondary-button').length, 1, 'add cancel button is present on page');
  });
});

test('languages save on click', function(assert) {
  click('.primary-button');
  andThen(function(){
    assert.equal(currentRouteName(), 'dashboard.languages', 'languages route');
  });
});

test('languages new cancel click', function(assert) {
  click('.secondary-button');
  andThen(function(){
    assert.equal(currentRouteName(), 'dashboard.languages', 'language route');
  });
});