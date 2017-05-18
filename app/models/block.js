import DS from "ember-data";
import Ember from "ember";
export default DS.Model.extend({
  content: DS.attr("string"),
  status:DS.attr("string"),
  displayOrder: DS.attr("number"),
  post: DS.belongsTo("post"),
  edit: DS.attr("boolean"),
  blockStatus: Ember.computed("status", function(){
    return this.get("status")=="block";
  }),
  hint: Ember.computed("status", function(){
    return this.get("status")=="hint";
  }),
  code: Ember.computed("status", function(){
    return this.get("status")=="code";
  }),
  header: Ember.computed("status", function(){
    return this.get("status")=="header";
  }),
 contentHtmlSafe: Ember.computed("content",function(){
    return Ember.String.htmlSafe(this.get("content"));
  })
});