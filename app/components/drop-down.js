import Ember from 'ember';

export default Ember.Component.extend({
  isOpen: false,
  actions: {
    toggleOpen() {
      this.set('isOpen', !this.get('isOpen'));
    }
  },
  didInsertElement() {
    this._super();
    Ember.run.scheduleOnce('afterRender', this, this.afterRender);
  },
  afterRender() {
    Ember.$('body').bind('click', ()=> {
      if(!this.get('isDestroyed')){
        this.set('isOpen', false);
      }
    });
  },
  willDestroyElement: function(){
    let afterRender = this.get('afterRender');
    Ember.$('body').unbind('click', afterRender);
  }
});
