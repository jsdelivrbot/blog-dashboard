// import { test } from 'qunit';
// import moduleForAcceptance from 'blog-dashboard/tests/helpers/module-for-acceptance';

// moduleForAcceptance('Acceptance | dashboard frameworks new',{
//   beforeEach(){
//     visit("dashboard/frameworks/new")
//   }
// });

// test('visiting /dashboard-frameworks-new', function(assert) {
//   andThen(function() {
//     assert.equal(currentRouteName(), 'dashboard.frameworks.new', 'dashboard frameworks new route');
//   });
// });

// test('placeholders for new frameworks', function(assert) {
//   andThen(function() {
//     assert.equal(find('label').text(), 'Name', 'label for frameworks name');
//     assert.equal(find('label').text(), 'Display Order', 'label for frameworks display order');
//     // assert.equal(find('label').text(), 'secondary name', 'label for language name');

//   });
// });

// test('placeholders for new frameworks', function(assert) {
//   andThen(function() {
//     assert.equal(find('input').placeholder(), 'Name', 'input for frameworks name');
//     assert.equal(find('input').placeholder(), 'Display Order', 'input for frameworks display order');
//     // assert.equal(find('label').text(), 'secondary name', 'label for language name');

//   });
// });

// test('save button', function(assert) {
//   andThen(function() {
//      assert.equal(find('.container > .primary-button').length, 1, 'add save button is present on page');
//   });
// });

// test('cancel button', function(assert) {
//   andThen(function() {
//      assert.equal(find('.container > .secondary-button').length, 1, 'add cancel button is present on page');
//   });
// });


// test('frameworks save on click', function(assert) {
//   click('.primary-button');
//   andThen(function(){
//     assert.equal(currentRouteName(), 'dashboard.frameworks.show', 'frameworks route');
//   });
// });

// test('frameworks new cancel click', function(assert) {
//   click('.secondary-button');
//   andThen(function(){
//     assert.equal(currentRouteName(), 'dashboard.frameworks.show', 'frameworks route');
//   });
// });