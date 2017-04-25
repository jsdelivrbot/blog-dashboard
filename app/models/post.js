import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  displayOrder: DS.attr("number"),
  framework: DS.belongsTo("framework"),
  language: DS.belongsTo("language")
});