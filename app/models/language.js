import DS from 'ember-data';
import Ember from 'ember';
export default DS.Model.extend({
  name: DS.attr('string'),
  slug: DS.attr('string'),
  displayOrder: DS.attr('number'),
  frameworks: DS.hasMany("framework"),
  posts: DS.hasMany("post"),
  active: Ember.computed("posts","frameworks", function(){
    return this.get("frameworks").get("length") || this.get("posts").get("length");
  })
});