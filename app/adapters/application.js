import ActiveModelAdapter from 'active-model-adapter';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin'; 
import config from '../config/environment';

export default ActiveModelAdapter.extend(DataAdapterMixin, {
  namespace: 'api',
  // host: `${config.host}`,
  authorizer: 'authorizer:custom'
});