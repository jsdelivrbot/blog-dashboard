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
    if(this.get("status")=="hint"){
      return Ember.String.htmlSafe(`<div class="hint">${this.get("content")}</div>`);
    }else if(this.get("status")=="block"){
      return Ember.String.htmlSafe(`<div class="block-status">${this.get("content")}</div>`);      
    }else if(this.get("status")=="header"){
      return Ember.String.htmlSafe(`<h2>${this.get("content")}</h2>`);
    }
    else{
      return Ember.String.htmlSafe(this.get("content"));
    }
  })
});