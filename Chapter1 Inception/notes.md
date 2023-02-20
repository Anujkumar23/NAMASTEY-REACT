## 1. What is CDN and why we use it?
CDN stand for Content Delivery Network, it is a group of server that work together that provide fast delivery od internet content. This network of server provide content to the users. React and ReactDOM are available over a CDN.

## 2. What is React and React DOM?
React is a Javascript Library for building User Interface.React allows developers to create reusable components, which can help make large applications easier to manage and maintain.The react package contains React.createElement(), React.Component, React.Children, and other helpers related to elements and component classes.

ReactDOM is also a library which allow React to interact with DOM.The react-dom package contains ReactDOM.render(), and in react-dom/server we have server-side rendering support with ReactDOMServer.renderToString() and ReactDOMServer.renderToStaticMarkup().


## 3.Async and Defer
Async: In Async operation when we are parsing HTML page and any script tag encounter with async it start downloading the script along with the parsing of the HTML page asynchronously,after the downloading of script the HTML parsing is paused and script start executing. Once the script is executed  the HTML parsing continue.

Defer:In Defer operation when we are parsing HTML any script tag encounter with defer start downloading the data parallely with HTML Parsing and execute the script only after the HTML parsing is completed. 