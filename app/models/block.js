import DS from "ember-data";
import Ember from "ember";
export default DS.Model.extend({
  content: DS.attr("string"),
  status:DS.attr("string"),
  displayOrder: DS.attr("number"),
  post: DS.belongsTo("post"),
  textarea: Ember.computed("status", function(){
    return this.get("status")=="code" || this.get("status")=="paragraf"
  })
});