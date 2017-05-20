import DS from "ember-data";

export default DS.Model.extend({
  name: DS.attr("string"),
  slug: DS.attr('string'),
  displayOrder: DS.attr("number"),
  language: DS.belongsTo("language"),
  posts: DS.hasMany("post")
});