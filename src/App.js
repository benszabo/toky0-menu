import './App.css';

function App() {
  return (
    <div className="App">
 <iframe
          src={process.env.PUBLIC_URL + "/Tokyo_Menu.pdf"}
          title="PDF Viewer"
          height="100%"
          style={{ overflow: 'scroll', height: '100vh' }}
          width="100%"
        />
    </div>
  );
}

export default App;
