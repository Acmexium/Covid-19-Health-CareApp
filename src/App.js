const App = () => {
  // Initialize HCL SDK API
  const API = process.env.REACT_APP_API_KEY;
  const hclAPI = new window.HclAPI({
    apiKey: API, // To replace by a working API key
  });
  window.HCLSDK.init({
    apiKey: API,
  });

  return (
    <div className='App'>
      <h1>YES</h1>
    </div>
  );
};

export default App;
