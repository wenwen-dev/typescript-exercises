// import { Circle } from "./shapes";

import { Circle } from "./shapes";

let circle = new Circle(2);









type ComponentOptions = {
  selector: string;
}



function Component(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log('Component decorator called.');
    constructor.prototype.options = options;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
      console.log('Inserting the component in the DOM'); 
    }
  }
}


@Component({ selector: '#my-profile'})
class ProfileComponent {
}

// class Component {
//   insertInDOM() {}

// }

// class ProfileComponent extends Component{
// }