import { Model,hasMany } from 'ember-cli-mirage';

export default Model.extend({
  frameworks: hasMany("framework"),
  posts: hasMany("post")
});
