import { test } from 'qunit';
import moduleForAcceptance from 'blog-dashboard/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | dashboard posts new',{
  beforeEach(){
    visit("dashboard/posts/new")
  }
});

test('visiting /dashboard-posts-new', function(assert) {
  andThen(function() {
    assert.equal(currentRouteName(), 'dashboard.posts.new', 'dashboard posts new route');
  });
});

test('label for new post', function(assert) {
  andThen(function() {
    assert.equal(find('label').text(), 'Title', 'label for post title');

  });
});

test('placeholders for new language', function(assert) {
  andThen(function() {
    assert.equal(find('input').placeholder(), 'Title', 'input for post title');

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

test('post save on click', function(assert) {
  click('.primary-button');
  andThen(function(){
    assert.equal(find('.add-button small').text(), 'Paragraf', 'paragraf for post');
    assert.equal(find('.add-button small').text(), 'Code', 'Code for post');
    assert.equal(find('.add-button small').text(), 'Hint', 'Hint for post');
    assert.equal(find('.add-button small').text(), 'List', 'List for post');
    assert.equal(find('.add-button small').text(), 'Header', 'Header for post');

  });
});

test('post  cancel click', function(assert) {
  click('.secondary-button');
  andThen(function(){
    assert.equal(currentRouteName(), 'dashboard.languages', 'language route');
  });
});