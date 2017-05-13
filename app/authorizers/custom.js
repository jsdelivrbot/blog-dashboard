import Base from 'ember-simple-auth/authorizers/base';  
import Ember from 'ember';
export default Base.extend({  
  session: Ember.inject.service(),
  authorize(data, block) {
    if (Ember.testing) {
      block('Authorization', 'Bearer DOTA for life');
    }
    const { token } = data
    if (this.get('session.isAuthenticated') && token) {
      block('Authorization', `Bearer ${token}`);
    }
  }
});
