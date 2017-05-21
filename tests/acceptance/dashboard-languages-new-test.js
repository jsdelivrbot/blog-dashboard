// import { test } from 'qunit';
// import moduleForAcceptance from 'blog-dashboard/tests/helpers/module-for-acceptance';

// moduleForAcceptance('Acceptance | dashboard languages new',{
//   beforeEach(){
//     visit("dashboard/languages/new")
//   }
// });

// test('visiting /dashboard-languages-new', function(assert) {
//   andThen(function() {
//     assert.equal(currentRouteName(), 'dashboard.languages.new', 'dashboard languages new route');
//   });
// });

// test('placeholders for new language', function(assert) {
//   andThen(function() {
//     assert.equal(find('input:first')[0].placeholder, 'Language Name', 'input for language name');
//     assert.equal(find('input:last')[0].placeholder, 'Language Theme', 'select for language theme');
//   });
// });

// test('languages save on click', function(assert) {
//   fillIn(find('input:first')[0], "My new Language");
//   click('.primary-button');
//   andThen(function(){
//     assert.equal(currentRouteName(), 'dashboard.languages', 'languages route');
//     assert.equal(find('.container > .card').last().text().trim(),  'My new Language', 'new language is added with name');
//   });
// });

// test('languages new cancel click', function(assert) {
//   click('.secondary-button');
//   andThen(function(){
//     assert.equal(currentRouteName(), 'dashboard.languages', 'language route');
//     assert.equal(find('.container > .card').length, 0, 'there is no new language');
//   });
// });