import '../styles/HomeStyle.css'
import { updatePageHistory } from '../js/historyFunction';

export default {
    name: 'HomeComponent',

    mounted() {
        updatePageHistory();
    },
};