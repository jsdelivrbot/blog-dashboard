import Ember from 'ember';

export default Ember.Controller.extend({
  blocks:["header", "block", "code", "hint"],
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
