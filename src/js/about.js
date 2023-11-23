import '../styles/AboutStyle.css';
import { updatePageHistory } from './historyFunction';

export default {
    name: 'AboutComponent',

    mounted() {
        updatePageHistory();
    },
};