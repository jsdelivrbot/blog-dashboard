import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login', {path:'login'});  
  this.route('dashboard', {path:'dashboard'},function(){
    this.route('profile', {path:'/profile'});
    this.route('languages', {path:'/languages'});
    this.route('languages.show', {path:'/languages/:language_id'});
    this.route('languages.new', {path:'/languages/new'});
    this.route('frameworks.new', {path:'/frameworks/:language_id/new'});
    this.route('frameworks.show', {path:'/frameworks/:framework_id'});
    this.route('posts.show', {path:'/posts/:post_id'});
    this.route('posts.new', {path:'/posts/new'});  
  });
  this.route('languages.show', {path:'/languages/:language_id'});
  this.route('frameworks.show', {path:'/frameworks/:framework_id'});
  this.route('posts.show', {path:'/:post_id'});  
});

export default Router;
