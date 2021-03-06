# App Environment Setup

# TODO: Plugin/Preset files are not allowed to export objects, only functions.

## console

* Run npm init -y to create the node npm setup
  > npm init -y

* install...
  > npm i react --save

  > npm i react-dom --save

* add the file git ignore and inside this add the line.
  > /node_modules/

* install webpack
  > npm install webpack -save

  > npm i webpack-dev-server --save

  > npm i webpack-cli --save

* install babel

  > npm i babel-core --save-dev

  > npm i babel-loader --save-dev

  > npm i babel-preset-env --save-dev

  > npm i babel-preset-react --save-dev

  > npm i html-webpack-plugin --save-dev

* create a files to complete the installation create app.js, main.js, webpack.config.js and .babelrc. You can create tht files manually or using command promp

  > touch index.html

  > touch App.js

  > touch main.js

  > touch webpack.config.js

  > touch .babelrc

* Set compiler, server and loaders, to this, open webpack.config.js and add the following code.

  ```js
  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');

  module.exports = {
    entry: './main.js',
    output: {
        path: path.join(__dirname, '/bundle'),
        filename: 'index_bundle.js'
    },
    devServer: {
        inline: true,
        port: 8080
    },
    module: {
        rules: [
          {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
                presets: ['es2015', 'react']
              }
          }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
          template: './index.html'
        })
    ]
  }
  ```

* Open package.json file and delete "test" *** and add the start and build script

  ```json
  "start": "webpack-dev-server --mode development --open --hot",
  "build": "webpack --mode production"
  ```

* Setup index.html and add an id app as a root element for our app and add index_bundle.js

  ```html
  <html lang = "en">
    <head>
        <meta charset = "UTF-8">
        <title>React App</title>
    </head>
    <body>
        <div id = "app"></div>
        <script src = 'index_bundle.js'></script>
    </body>
  </html>
  ```

* Create the first react component.

  ```js
  import React, { Component } from 'react';

  class App extends Component {
    render () {
      return (
        <div>
          <h1>Hello World</h1>
        </div>
      );
    }
  }

  export default App;
  ```

* We need import this component and and render App element and thats what we do in the main file;

  ```js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import App from './App.js';

  ReactDOM.render(<App />, document.getElementById('app'));
  ```

### **Note − Whenever you want to use something, you need to import it first. If you want to make the component usable in other parts of the app, you need to export it after creation and import it in the file where you want to use it.**

* Create the file .babelrc and paste the following code;
  ```json
  {
    "presets": ["env", "react"]
  }
  ```

* Run the server
  > npm start

* Run the bundle
  > npm bundle

