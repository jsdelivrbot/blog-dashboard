import DS from "ember-data";
import Ember from 'ember';
export default DS.Model.extend({
  name: DS.attr("string"),
  slug: DS.attr('string'),
  displayOrder: DS.attr('number'),
  language: DS.belongsTo("language"),
  posts: DS.hasMany("post"),
  active: Ember.computed("posts", function(){
    return this.get("posts").get("length");
  })
});