## Intro

Demo app based on http://tutorialzine.com/2015/04/first-webapp-react/

## Install

* npm install

## run

* npm run build
* then visit index.html with your browser

## What I learned

* bootstrap 3
* Google map api with api key
* gmap.js


How to use browserify with reactify:
```
NODE_ENV=production browserify -t [ reactify --es6 ] main.js > compiled.js
```

How to define entry point:

normally, we define main.js, in main.js we import component, then injecting the component into a div id.
This div sitting within index.html, which is the entry point of an app. App.js imports different compoents
to form the final app.


Define most of methods and app state in the top of component. i.e. the parent component.
Pass methods into children components, so child can access state.
