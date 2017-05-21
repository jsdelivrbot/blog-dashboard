import DS from "ember-data";

export default DS.Model.extend({
  name: DS.attr("string"),
  slug: DS.attr('string'),
  language: DS.belongsTo("language"),
  posts: DS.hasMany("post")
});