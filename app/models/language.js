import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  theme: DS.attr('string'),
  displayOrder: DS.attr("number"),
  frameworks: DS.hasMany("framework"),
  posts: DS.hasMany("post")
});