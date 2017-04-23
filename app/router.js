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
});

export default Router;
