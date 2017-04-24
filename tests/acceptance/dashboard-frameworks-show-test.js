import { test } from 'qunit';
import moduleForAcceptance from 'blog-dashboard/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | dashboard frameworks show',{
  beforeEach(){
    let language = server.create('language', {name:"Ruby"});
    let framework = server.create('framework', {name: "Ruby on Rails", language_id: language.id});
    server.create('post', {title: "Ruby Installation", language_id: language.id});
    visit(`/dashboard/frameworks/${framework.id}`);
  }
});

test('visiting dashboard/frameworks/show', function(assert) {

  andThen(function() {
    assert.equal(currentRouteName(), 'dashboard.frameworks.show', 'dashboard framworks show route');
  });
});

test('showing created post', function(assert) {
  andThen(function() {
     assert.equal(find('.container > card long').length, 1, 'post is shown on page');
  });
});

test('post button', function(assert) {
  andThen(function() {
     assert.equal(find('.container > primary-button long').length, 1, 'add post button is present on page');
  });
});

test('show post on click', function(assert) {
  click('.card');
  andThen(function(){
    assert.equal(currentRouteName(), 'dashboard.posts.show', 'show post route');
  });
});