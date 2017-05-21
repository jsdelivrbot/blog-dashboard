// import { test } from 'qunit';
// import moduleForAcceptance from 'blog-dashboard/tests/helpers/module-for-acceptance';

// moduleForAcceptance('Acceptance | dashboard languages show',{
//   beforeEach(){
//     let language = server.create('language', {name:"Ruby", framework_ids:[1], post_ids:[1]});
//     server.create('framework', {name: "Ruby on Rails", language: language});
//     server.create('post', {title: "Ruby Installation", language: language});
//     visit(`/dashboard/languages/${language.id}`);
//   }
// });

// test('visiting /dashboard-languages-show', function(assert) {
//   andThen(function() {
//     assert.equal(currentRouteName(), 'dashboard.languages.show', 'dashboard lanugages show route');
//   });
// });

// test('showing created framework', function(assert) {
//   andThen(function() {
//      assert.equal(find('.container > .card').length, 1, 'framework is shown on page');
//   });
// });

// test('showing created post', function(assert) {
//   andThen(function() {
//      assert.equal(find('.container > .block').length, 1, 'post is shown on page');
//   });
// });

// test('show framework on click', function(assert) {
//   click('.card');
//   andThen(function(){
//     assert.equal(currentRouteName(), 'dashboard.frameworks.show', 'show framework route');
//   });
// });

// test('show post on click', function(assert) {
//   click('.block');
//   andThen(function(){
//     assert.equal(currentRouteName(), 'dashboard.posts.new', 'show post route');
//   });
// });

// test('go to add a framework on click', function(assert) {
//   click('.primary-button.large');
//   andThen(function(){
//     assert.equal(currentRouteName(), 'dashboard.frameworks.new', 'new framework route');
//   });
// });

// test('go to add a post on click', function(assert) {
//   click('.primary-button.long');
//   andThen(function(){
//     assert.equal(currentRouteName(), 'dashboard.posts.new', 'new post route');
//   });
// });