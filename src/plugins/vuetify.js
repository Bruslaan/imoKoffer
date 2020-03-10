import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import de from 'vuetify/es5/locale/de';
// import VueFormGenerator from "vue-form-generator";


Vue.use(Vuetify);
// Vue.use(VueFormGenerator)

export default new Vuetify({
    lang: {
      locales: { de },
      current: 'de',
    },
});
