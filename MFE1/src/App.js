import React from 'react';
const IntegratedApp = React.lazy(() => import("container/App"));

const App = () => {
    return(
        <div>
            <h1>Micro-Frontend Host</h1>
            <React.Suspense fallback={"loading"}>
                <IntegratedApp />
            </React.Suspense>
        </div>
    )
}

export default App;