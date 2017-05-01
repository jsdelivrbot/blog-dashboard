import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ["language_id", "framework_id"],
  language_id:null,
  framework_id:null,
  blocks:["header", "block", "code", "hint"],
  options1: {
      content_css:'/assets/blog-dashboard.css',
      body_class:"block-status",
      menu: "false",
      statusbar: false,
      height: 100,
      paste_as_text: true,
      theme: 'modern',
      plugins: [
        'link paste'
      ],
      toolbar: 'undo redo |  bold italic  | bullist numlist | link image'
    },
  options2: {
      forced_root_block: "pre",
      content_css:'/assets/blog-dashboard.css',
      body_class:"code",
      menu: "false",
      statusbar: false,
      height: 100,
      paste_as_text: true,
      theme: 'modern',
      plugins: [
        'paste'
      ],
      toolbar: "false"
    },
  options3: {
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
    },
  options4: {
      forced_root_block: "h2",
      content_css:'/assets/blog-dashboard.css',
      body_class:"header",
      menu: "false",
      statusbar: false,
      height: 100,
      paste_as_text: true,
      theme: 'modern',
      plugins: [
        'paste'
      ],
      toolbar: "false"
    },
  actions:{
    addText(block, value){
      block.set("content", value);
    },
    saveBlock(block){
      block.set("edit", true);
      block.save();
    },
    destroyBlock(block){

    },
    save(model){
      model.set("edit", true);
      model.save();
    },
    addBlock(block, post){
      this.store.createRecord("block", {
        status: block,
        post: post
      });
    },
    editToggle(model){
      model.set("edit", !model.get("edit"));
    }
  }
});
