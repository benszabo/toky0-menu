import pdfFile from './Tokyo_Menu.pdf';  // replace 'sample.pdf' with your PDF file name
import './App.css';

function App() {
  return (
    <div className="App">
 <iframe
          src={pdfFile}
          title="PDF Viewer"
          className="pdf-viewer"
        />
    </div>
  );
}

export default App;
