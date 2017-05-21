import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  slug: DS.attr('string'),
  frameworks: DS.hasMany("framework"),
  posts: DS.hasMany("post")
});