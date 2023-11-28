import '../styles/AboutStyle.scss';
import { updatePageHistory } from './historyFunction';

export default {
    name: 'AboutComponent',

    mounted() {
        updatePageHistory();
    },
};