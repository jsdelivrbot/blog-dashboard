import { test } from 'qunit';
import moduleForAcceptance from 'blog-dashboard/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | dashboard languages show',{
  beforeEach(){
    let language = server.create('lanugage', {name:"Ruby"});
    server.create('framework', {name: "Ruby on Rails", language_id: language.id});
    server.create('post', {title: "Ruby Installation", language_id: language.id});
    visit(`/dashboard/languages/${language.id}/show`);
  }
});

test('visiting /dashboard-languages-show', function(assert) {
  andThen(function() {
    assert.equal(currentRouteName(), 'dashboard.languages.show', 'dashboard lanugages show route');
  });
});

test('showing created framework', function(assert) {
  andThen(function() {
     assert.equal(find('.container > .card').length, 1, 'framework is shown on page');
  });
});

test('showing created post', function(assert) {
  andThen(function() {
     assert.equal(find('.container > .card long').length, 1, 'post is shown on page');
  });
});

test('framework button', function(assert) {
  andThen(function() {
     assert.equal(find('.container > .add-button .large').length, 1, 'add framework button is present on page');
  });
});

test('post button', function(assert) {
  andThen(function() {
     assert.equal(find('.container > .add-button .long').length, 1, 'add oost button is present on page');
  });
});

test('show framework on click', function(assert) {
  click('.card');
  andThen(function(){
    assert.equal(currentRouteName(), 'dashboard.frameworks.show', 'show framework route');
  });
});

test('show post on click', function(assert) {
  click('.card');
  andThen(function(){
    assert.equal(currentRouteName(), 'dashboard.posts.show', 'show post route');
  });
});

test('add framework on click', function(assert) {
  click('.add-button .large');
  andThen(function(){
    assert.equal(currentRouteName(), 'dashboard.frameworks.new', 'new framework route');
  });
});

test('add post on click', function(assert) {
  click('.add-button .large');
  andThen(function(){
    assert.equal(currentRouteName(), 'dashboard.posts.new', 'new post route');
  });
});