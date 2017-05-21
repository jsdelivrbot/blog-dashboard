import Ember from 'ember';

export default Ember.Controller.extend({  
  session: Ember.inject.service(),
  error: null,
  actions: {
    authenticate: function() {
      var credentials = this.getProperties('identification', 'password'),
      authenticator = 'authenticator:jwt';
      this.get('session').authenticate(authenticator, credentials).catch((reason)=>{
        this.set('error', reason.error || reason);
      });
    }
  }
});