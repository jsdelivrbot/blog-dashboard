import DS from "ember-data";
import Ember from "ember";
export default DS.Model.extend({
  content: DS.attr("string"),
  status:DS.attr("string"),
  displayOrder: DS.attr("number"),
  post: DS.belongsTo("post"),
  edit: DS.attr("boolean"),
  options: Ember.computed("",function(){
    if(this.get("status")=="hint"){
      return {
        forced_root_block: "p",
        content_css:'/assets/blog-dashboard.css',
        body_class:"hint",
        menu: "false",
        statusbar: false,
        height: 100,
        paste_as_text: true,
        theme: 'modern',
        plugins: [
          'paste'
        ],
        toolbar: "false"
      };
    }else if(this.get("status")=="block"){
      return {
        content_css:'/assets/blog-dashboard.css',
        body_class:"block-status",
        menu: "false",
        statusbar: false,
        height: 150,
        paste_as_text: true,
        theme: 'modern',
        plugins: [
          'link paste'
        ],
        toolbar: 'undo redo |  bold italic  | bullist numlist | link image'
      };      
    }else if(this.get("status")=="code"){
      return {
        forced_root_block: "pre",
        content_css:'/assets/blog-dashboard.css',
        body_class:"code",
        menu: "false",
        statusbar: false,
        height: 250,
        paste_as_text: true,
        theme: 'modern',
        plugins: [
          'paste'
        ],
        toolbar: "false"
      };
    }
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