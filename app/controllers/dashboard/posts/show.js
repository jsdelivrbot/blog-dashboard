import Ember from 'ember';

export default Ember.Controller.extend({
  blocks:["header", "block", "code", "hint"],
  hint:{
    forced_root_block: "div",
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
  blockStatus:{
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
  },
  code:{
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
  },
  actions:{
    addText(block, value){
      block.set("content", value);
    },
    saveBlock(block){
      block.save().then(()=>{
        block.set("edit", true);   
      });
    },
    save(model){
      model.save().then(()=>{
        model.set("edit", true);
      });
    },
    destroyPost(model){
      let parentRoute=  model.get("parentRoute");
      let parentId= model.get("parentId");
      model.destroyRecord().then(()=>{
        this.transitionToRoute(parentRoute, parentId);
      });
    },
    destroyBlock(model){
      model.destroyRecord();
    },
    addBlock(block, post){
      this.store.createRecord("block", {
        status: block,
        post: post
      });
    },
    editInput(model){
      model.set("edit", false);
    },
    cancelInput(model){
      model.rollbackAttributes();
    }
  }
});
