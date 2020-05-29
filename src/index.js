import _ from 'lodash';

//import "~bootstrap";
import './index.scss';


function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'Parag'], ' ');

    return element;
}

document.body.appendChild(component());