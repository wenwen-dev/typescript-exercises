function Component(constructor: Function) {
  console.log('Component decorator called.');
  constructor.prototype.uniqueId = Date.now();
  constructor.prototype.insertInDOM = () => {
    console.log('Inserting the component in the DOM'); 
  }
}
// parameter name can by anything, but type must be Function
// no return type annotation?

@Component
class ProfileComponent {
}

// class Component {
//   insertInDOM() {}

// }

// class ProfileComponent extends Component{
// }