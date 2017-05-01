import { Model, belongsTo,hasMany } from 'ember-cli-mirage';

export default Model.extend({
  language: belongsTo("language"),
  posts: hasMany("post")
});
