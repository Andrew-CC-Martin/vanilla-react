console.log('here')

const myElement = React.createElement('p', null, 'hello world!')

const rootElement = document.getElementById('react')

ReactDOM.render(myElement, rootElement)
