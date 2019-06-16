import Vue from 'vue'
import VueI18n from 'vue-i18n'
import {getCookie} from '../utils/util'

Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: getCookie('PLAY_LANG', 'zh'),
    messages: {
        'zh': require('./lang/zh'),
        'en': require('./lang/en')
    },
});

export default i18n;
