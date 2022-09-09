# Learn React.js-v18

step1:
* Setup React project

  npx create-react-app my-app

* JSX  

  -  Work like real DOM, enable attributes and events  
  -  Prevents Injection Attacks

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

* Components and Props  

  - Pure funciton  


* State and Lifecycle  
* Handling Events

step2: 
* useState   
* useEffect  
* Hooks  
