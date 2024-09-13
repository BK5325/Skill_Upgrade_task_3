import React, { useState } from 'react';
// React Components
const App = () => {
return (
<div style={styles.app}>
<Header />
<Counter />
<List />
<Parent />
</div>
);
};
// Inline Styles
const styles = {
app: {
fontFamily: 'Arial, sans-serif',
padding: '20px',
backgroundColor: 'f4f4f9',
},
header: {
color: '333',
textAlign: 'center',
marginBottom: '20px',
},
section: {
marginBottom: '20px',
padding: '10px',
border: '1px solid ddd',
borderRadius: '5px',
backgroundColor: 'fff',
},
text: {
fontSize: '16px',
color: '555',
},
button: {
padding: '10px 15px',
backgroundColor: '007bff',
color: 'fff',
border: 'none',
borderRadius: '5px',
cursor: 'pointer',
fontSize: '14px',
},
list: {
padding: '0',
listStyle: 'none',
marginBottom: '20px',
},
listItem: {
padding: '5px 0',
color: '333',
},
};
export default App;
