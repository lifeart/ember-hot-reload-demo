import Resolver from 'ember-resolver';
import HotReloadMixin from 'ember-cli-hot-loader/mixins/hot-reload-resolver';
import Mixin from '@ember/object/mixin';

const CustomHotReloadMixin = Mixin.create(HotReloadMixin, {
    shouldExcludeComponent({name}) {
      const excludedFromConfig = this._super(...arguments);
      const isBootstrapComponent = name.startsWith('bs-');
      return excludedFromConfig || isBootstrapComponent;
    }
});

export default Resolver.extend(CustomHotReloadMixin);