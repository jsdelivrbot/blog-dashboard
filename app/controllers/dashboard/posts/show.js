import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  admin: Ember.computed("currentPath", function(){
    return this.get("session").get("session.authenticated.admin");
  }),
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
    toolbar: "false",
    browser_spellcheck : true
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
    browser_spellcheck : true,
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
  header:{
    browser_spellcheck : true,
    forced_root_block: "h2",
    content_css:'/assets/blog-dashboard.css',
    menu: "false",
    body_class:"header",
    statusbar: false,
    setup: function (ed) {
        ed.on('init', function() {
            var id = ed.id;
            var height = 50;
            document.getElementById(id + '_ifr').style.height = height + 'px';
        });
    },
    paste_as_text: true,
    theme: 'modern',
    plugins: [
      'paste'
    ],
    toolbar: "false"
  },
  arry: [],
  transition: null,
  sortProperties: ['displayOrder:asc'],
  sortedBlocks: Ember.computed.sort('model.blocks', 'sortProperties'),
  sortableObjectList:  Ember.computed('model.blocks', function(){
    console.log(this.get('sortedBlocks').toArray());
    this.set("arry",  this.get('sortedBlocks').toArray());
  }),
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
      model.set("edit", true);
    },
    sortEndAction: function(content) {
      this.get('arry').forEach(function(block, index){
        block.set("displayOrder", index);
        block.save();
      });

    }
  }
});