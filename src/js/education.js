import '../styles/Study.scss';
import { updatePageHistory } from './historyFunction';

export default {
    name: 'EducationComponent',

    mounted() {
        updatePageHistory();
    },
};