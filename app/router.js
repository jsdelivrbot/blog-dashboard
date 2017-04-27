import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('dashboard.languages', {path:'dashboard/languages'});
  this.route('dashboard.languages.show', {path:'dashboard/languages/:language_id'});
  this.route('dashboard.languages.new', {path:'dashboard/languages/new'});
  this.route('dashboard.frameworks.new', {path:'dashboard/frameworks/:language_id/new'});
  this.route('dashboard.frameworks.show', {path:'dashboard/frameworks/:framework_id'});
  this.route('dashboard.posts.show', {path:'dashboard/posts/:post_id'});
  this.route('dashboard.posts.new', {path:'dashboard/posts/new'});

});

export default Router;
