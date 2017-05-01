import { Model, hasMany, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  blocks: hasMany("block"),
  language: belongsTo("language"),
  framework: belongsTo("framework")
});
