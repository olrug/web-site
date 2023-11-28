import '../styles/HomeStyle.scss'
import { updatePageHistory } from '../js/historyFunction';

export default {
    name: 'HomeComponent',

    mounted() {
        updatePageHistory();
    },
};