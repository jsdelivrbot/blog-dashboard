import DS from 'ember-data';
import Ember from 'ember';
export default DS.Model.extend({
  title: DS.attr('string'),
  edit: DS.attr("boolean"),
  author: DS.attr('string'),
  status: DS.attr('string'),
  displayOrder: DS.attr('number'),
  slug: DS.attr('string'),
  date: DS.attr('string'),
  body: DS.attr('string'),
  framework: DS.belongsTo("framework"),
  language: DS.belongsTo("language"),
  blocks: DS.hasMany("block"),
  parentRoute: Ember.computed("framework", "language", function(){
    let parent= this.get("framework").get("id") ? "frameworks" : "languages";
    return `dashboard.${parent}.show`;
  }),
  parentId: Ember.computed("framework", "language", function(){
    return this.get("framework").get("id") ? this.get("framework").get("id") : this.get("language").get("id");
  }),
  bodyHtmlSafe: Ember.computed("body",function(){
    return Ember.String.htmlSafe(this.get("body"));
  })
});