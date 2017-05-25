import Ember from 'ember';

export default Ember.Component.extend({
  loading: false,
  classNames:["hide"],
  tagName: 'input',
  attributeBindings: ['type'],
  type: 'file',
  file: [],
  change: function (e) {
    this.set('loading', true);
    var component = this;
    var file = e.target.files[0];
    var fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = function(event) {
      component.set('file', event.target.result);
      component.set('loading', false);
    };
  }
});