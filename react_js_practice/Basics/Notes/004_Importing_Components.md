# Importing Components
There is importance in structuring the react project

## Objectives

1. Explain React's default folder structure
2. Outline the benefits of React's folder structure
3. Customize React's folder structure
4. Explain the benefits of planning folder use.

## Lesson

When building the react app. the project is structured using the folders 
1. `node_modules` folder: 
    - Repository for all module packages in the react app. 
    - Automatically added. 
3. `public` folder: 
    - Contains assets that will be displayed to the user in the app like images.
    - includes the `robots.txt` which is used for search Engine Optimization.
    - includes the `manifest.json` file that provides metadata to devices when the react webapp is installed on it.
    - includes the `index.html` file where the react app is injected into a specific element in the body of html file. Based on the changes react app uses this to injects updates to the body. 
4. `src` folder: 
    - Contains the essential component files to ensure the function of the react app, and is automatically created.
    - Files to get familiar with:
      - We're already familiar with `App.js` and `index.js` files, as we've been practicing so far in them. In conjunction, these render the app.
      - `App.css` contains the styles of the `app.js` component file.
      - `index.css` contains the styles used throughout the entire react app.
      - `App.test.js`, `setupTests.js` and `reportWebVitals.js` are files related to the performance and testing of the app.
      - `logo.svg` file isdisplayed on the default page of the react app when displayed on the local host.
    - We can delete the `App.css`, `index.css`, `App.test.js`, `setupTests.js`, `reportWebVitals.js` and `logo.svg` files as long as we remove the code referencing them because React doesn't have opinions on how we structure the files in the `src` folder, so deleting these files won't be a problem. (customization)
    - Remember that the most important file in the `src` folder is the `index.js` folder because it imports everything needed to render the working react app.
5. Root files are on the same root level as the folders `node_modules`, `public`, and `src`. The root folder files are:
    - `.gitignore` file used in version control, and excludes which folders or files should be excluded from the project. This file is not specific to react.
    - `package-lock.json` file holds list of all dependencies with their versions. It helps npm rebuild the app on another machine, or recover the dependencies if deleted. 
    - `package.json` file lists information pertaining to the app allowing npm to run scripts and perform various tasks in the app.
    - `README.md` file is a markdown file that gives basic information on the project


## React Components and where they live
Advantages:
  - React app is split into self contained components

## Objectives:
1. Demonstrate the import statement
2. Create a component file
3. Import components
4. Structure a project

As a developer, we may need to reuse components created by ourselves or by others.

Components should be grouped in folders with like files. Components are like modules.
Importing components - imports components for use.
Exporting components - used to make components available for other files to import them
  Default export - exports entire file
  named export - exports specific parts of the file. 
Components are single parts or small piece of functionality, while modules are larger than just one componenet, as they can contain multiple components.

## 