# Learn React.js-v18

step1:
* React v18
* Setup React project

  - Creating a single-page app
    
    npx create-react-app my-app  

  - Server-rendered website with Node.js

    Next.js

  - Include React and ReactDOM JS in HTML

    ```
      <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
      <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    ```

* JSX  

  -  Work like real DOM, enable attributes and events

    1) 

  -  Prevents XSS Injection Attacks  

    1) Everything is converted to a string before being rendered

  -  Actual work
    ```
      const element = (
        <h1 className="greeting">
          Hello, world!
        </h1>
      );

      equels: 

      const element = React.createElement(
        'h1',
        {className: 'greeting'},
        'Hello, world!'
      );
    ```

* Rendering Elements   

  - Actual work  
    
    ```
      const root = ReactDOM.createRoot(
        document.getElementById('root')
      );
      
      const element = <h1>Hello, world</h1>;
      
      root.render(element);
    ```

  - Only update what’s necessary  

    1) More efficient than manipulate on real DOM  


  - Virtual DOM tree

* Components and Props  

  - Write pure funciton    

    1) React.Component instance  

    ```  
      class Welcome extends React.Component {
        // Basic doing things in constructor 
        constructor(props) { 
          super(props);
          this.state = { counter: 0 };
          this.handleClick = this.handleClick.bind(this);
        }

        // Component mounting callback  
        componentDidMount() { ... }

        // Component updating callback  
        shouldComponentUpdate() 
        componentDidUpdate()

        // render method to return JSX
        render() {
          return <h1>Hello, {this.props.name}</h1>;
        }
      }

    ```

    2) Pure funciton instance  

    ```

      function Jsx(props) {
        const user = {
          firstName: "Harper",
          lastName: "Perez",
        };

        const formatName = (user) => {
          return user.firstName + " " + user.lastName;
        };

        const Element = <h1>Hello, {formatName(user)}!</h1>;

        return <div className="jsx">{Element}</div>;
      }
    ```

  - Nested child components  

  - One-way transfer props


* State and Lifecycle  

  - State response to user actions, network responses   

* Composition, NOT Inheritance

* Handling Events  

  - React events are named using camelCase, rather than lowercase. 

  - With JSX you pass a function as the event handler, rather than a string.

  - Actual work

   ```
     In HTML: 

      <button onclick="activateLasers()">
        Activate Lasers
      </button>  

    In React: 

      <button onClick={activateLasers}>
        Activate Lasers
      </button>
   ```

* Forms

step2: 
* useState   
* useEffect  
* Rule of Hooks  
  
  - Lighter than React.Component  

    1) Without writing a class, avoid lifecycle callbacks like componentDidMount...  

  - Call Hooks at the Top Level  

* Building hooks
