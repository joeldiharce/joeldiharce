# React Components - React.js overview - React components and where they live

React library is a popular method to create SPAs (single page applications)

## Definitions

><u>Component-based archetecture:</u> Design philosophy for building software based on reusable components of code.
>
><u>Components:</u> Stand alone parts of a UI

## Properties of React
Reuseable: Used multiple times and easily inserted anywhere where needed.
Independent: Components can exist within the same space independently from each other.

## Advantages of React
Developers can work on a component without disturbing the components that other developers are working on.

### How components work
React provides a virtual DOM which is an in-memory representation or clone of the real DOM, and minimizes the updates to the DOM itself. React uses the virtual DOM to update the browser's DOM only when needed. This ensures the update is as small as possible, increasing speed and performance.

There are 2 types of components in React.js: Functional components, and Class components. We'll focus on Class components later. For now, let's look at Functional components.

Example:
```
  function Welcome() {
    return <h1> "Hello"</h1>
  };
```

In the default react application (what you get when you install the react library using npm), only one component is rendered (via the index.js file): the app component located as the file `app.js` in the source folder. Every react app *must* contain at least one component, known as the 'Root Component'. The component is loaded using the import statement in order for it to work. In the default react app, the root component is the app.js file.

The render Syntax in the index.js file is: <ComponentName />
Example code in index.js: 
```
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

Root components can contain other components used to create the UI.
The root component is converted into a dom fragment, and placed in the existing DOM with an id element named "root"
Example HTML in DOM:
```
<div id="root">
  <!-- This element's contents will be
    replaced with your component. -->
</div>
```
The div element is then rendered to the browser.

The root component is typically a separate .js file that contains an export statement at the bottom. 
Example of a root component:
```
function App() {
  return (
    <div className='App'>
    <h1>Hello React.</h1>
    </div>
  );
};

export default App;
```
The export statment can be specific or general in what is being exported. If you are exporting the entire file's contents, you can use "default".

#### JSX Defined:
> <u>JSX:</u> JavaScript XML. JSX is a syntax extension to JavaScript. React is scripted using JSX. 
>Look at the example of a root component above, and notice that HTML is returned. This is what JSX looks like - you can think of JSX as a combination of JavaScript and HTML.

Remember that a functional component won't be rendered until it is used as a JSX element similar to how a JavaScript function won't be used until it is run or invoked.

When creating a component, remember that it's file name must be capitalized like so: "Heading.js" This is necessary because there is a difference in how React treats capitalized and non-capitalized component names. All component names must be capitalized. React treats lowercase components as HTML elements. Capitalizing them allows React to treat them as JSX elements.

To use the component file in the app.js file, open the app.js file and create a function named "Heading", notice that the name of the function matches the capitalization in the name of the component file "Heading".
Visual Aid:
  ```
  function Heading() {
    let title = "This is some heading text";
    return (
      <h1>{title}</h1>    <!-- Note: In order to get react to evaluate the title variable, you have to surround the variable with curly brackets in the html code. -->
    )
  }
```
This will render on the page because of 'Transpiling', which will be covered later.

As an exercise we will create a functional component. Notes on the exercise will be located in the notes file named "003_Creating_a_functional_Component.md".
