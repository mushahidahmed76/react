// JSX: 

// import TodoItem from "./src/components/TodoItem"

// Wraping Elements :  <React.Fragment> .. </React.Fragment>
// We can not return more the one JSX element next to each other 
// We have wrap them into one element like : We can wrap to <p> tag into one <div> tag
// In case you donot want to wrap your elements into div then use <React.Fragment> .. </React.Fragment>
// This is a virtual element that doesn't display on final DOM


// ***********************************************************************
// Shortcut :
    // use (<></>) instead of <div>
    // use a valid JavaScript expression inside the JSX through curly braces, {}



// ***********************************************************************
// Naming conventions :
// Component file name = use UpperCamelCase 
// Component class name should be same as Component file name.

// ***********************************************************************
// Strict Mode : 
// Wrap complete inside <React.StrictMode>...</React.StrictMode>


// ***********************************************************************
// Prop:  Stand for Properties 
// is one of the two types of “model” data in React. 
// It can be thought of as the attributes in the HTML element. For instance, the attributes – type, checked –
// {/* <input type="checkbox" checked="{true}" /> */}
// ***
// Prop are the primary way to pass data and eventhandlers down the component Tree. 
// i.e from parent component to child component

// the data that is received in the child component becomes read-only and cannot be changed by the child component. 
// This is because the data is owned by the parent component and can only be changed by the same parent component.


// prop drilling
// we can access state data at different levels of the component hierarchy.
// We can pass data through props from parent to child and then infinit number of childs.
// it has to do with manually getting data from component A down to component B through the props. 
// Where component A is the parent of B.

// ***********************************************************************
// The State 
// - Unlike the props, the state data is local and specific to the component that owns it.
// - It is not accessible to any other components unless the owner component chooses to pass it down as
//  props to its child component(s).

// -child component receives the data in its props, it wouldn’t know where exactly the data comes from.
//  Maybe it was inputted or comes from the props.

// Usage : 
// a state is decleared anytime you want some data to be updated whenever user perform some action like 
// updating input field, toggling menu button etc. Also, if two or more child components need to communicate
//  with each other.


// css 
// Global Style 
// 1. Create App.css in Src folder
// 2. Import App.css in index.js -- import "./App.css"

// Inline Style
// <h1 style=={{ FontSize:"12px"; BackgroundColor:"red"; }} .....

// Style Object 
// 1. Create TodoItem.module.css in module/components
// 2. import object in perticular component --- import styles from "./TodoItem.module.css"
// 3. <h1 className={style.myClassName} ...
// 4. <h1 className={style['my-class-name']} ... if class name are not in camel case 



//--------- Class Components ----------

// Create State : In class component we create state by following method :
    // State = {
    //     todos: [ // State Name
    //         {    
    //             id:1,
    //             title : 'any thing'
    //         }
    //
    //     ]
    // }

// update State : should be used inside a eventHandler function 
    // By Directly accessing State Obj (Not Recommended)
    // this.setState({
    //     todos: this.state.todos.map(todo => {
    //         todo.completed = !todo.completed;
    //         return todo;
    //     })
    // });

    // setState()  : in a class component is used to update state.
    // line 2 =  map through state
    // line 3 =  change element
    // line 4 =  return      

    // By Using Snapshot of previous state (prevState) withing the setState() to get data of previous state
    // this.setState(prevState => ({
    //     todos: prevState.todos.map(todo => {
    //         todo.completed = !todo.completed
    //       return todo
    //     }),
    //   }))

    //  No Instead of maping throgh State directly we used PrevState.
    //



// Lifecycle methods

// Every React component you create always goes through a series of phases from its birth to death.
// At every phase, there are lifecycle methods that React calls to perform some certain functions.

// Phases are mainly Three
// 1. Mounting (this is the phase when React component mounts (created and inserted) the DOM. In this phase, the component is birthed.)
// 2. Updating (Once the component is mounted, it could get updated. Remember that component gets updated when there is/are state or prop changes, hence trigger re-rendering. All of that happens in this phase.)
// 3. Unmounting (This phase ends the component lifecycle because, in it, the component is removed from the DOM.)

// In each of these phases, React provides lifecycle methods that we can use to monitor and manipulate what happens within the component

// Required Method :
// render() : This method is the only required lifecycle method within a React class component. It’s responsible for rendering React elements in the Virtual DOM and it is called during the mounting and updating phase.

// Optional  Methods :
// componentDidMount() – This lifecycle method is called immediately after a component is rendered.
// componentDidUpdate() – This is called immediately after updating occurs. – i.e after state or props changes.
// componentWillUnmount() – This is called just before a component is unmounted or destroyed.


// componentDidUpdate(prevProps, prevState) {
//     // update logic here
//   }


// ------- Funtional Components ------

// Define : 
// const InputTodo = props => {}

// States :
// instead of defining state obj here we use "useState" 
// const [inputText, setInputText] = useState({ title: "" })
// update state 
// setInputText({ ...inputText,title: e.target.value, })
// setInputText({title: "",})

// useEffect :
// instead of lifecycle functions componentWillUnmount(),componentDidUpdate() and componentDidMount() "useEffect" is used in function base components
// This Hook takes in a function as an argument and an optional array 


// useEffect(() => {
//     ...
//   }, []);


// The function defines the effect to run
// optional array will define when to re-run the effect.
// By default, this effect run after every completed render

// componentDidMount() –  if you do not specify any dependency in the array "[]"
// componentDidUpdate() – 
// componentWillUnmount() – 
