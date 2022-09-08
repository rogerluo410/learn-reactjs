# Learn React.js-v18

step1:
* Setup React project

  npx create-react-app my-app

* JSX  

  -  Work like real DOM, attributes and events  
  -  JSX Prevents Injection Attacks

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

  - Only update what’s Necessary

* Components and Props  

  - Pure funciton  

  
* State and Lifecycle  
* Handling Events

step2: 
* useState   
* useEffect  
* Hooks  
