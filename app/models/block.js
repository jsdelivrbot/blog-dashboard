import DS from "ember-data";
import Ember from "ember";
export default DS.Model.extend({
  content: DS.attr("string"),
  status:DS.attr("string"),
  displayOrder: DS.attr("number"),
  post: DS.belongsTo("post"),
  edit: DS.attr("boolean"),
  block: Ember.computed("status", function(){
    return this.get("status")=="block";
  }),
  code: Ember.computed("status", function(){
    return this.get("status")=="code";
  }),
  hint: Ember.computed("status", function(){
    return this.get("status")=="hint";
  }),
  header: Ember.computed("status", function(){
    return this.get("status")=="header";
  }),
 contentHtmlSafe: Ember.computed("content",function(){
    if(this.get("status")=="hint"){
      return Ember.String.htmlSafe(`<div class="hint">${this.get("content")}</div>`);
    }else if(this.get("status")=="block"){
      return Ember.String.htmlSafe(`<div class="block-status">${this.get("content")}</div>`);      
    }
    else{
      return Ember.String.htmlSafe(this.get("content"));
    }
  })
});