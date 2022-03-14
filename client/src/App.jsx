import { navigation_bar, Welcome, footer, services, transactions } from './components';

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <navigation_bar />
        <Welcome />
      </div>
      <services />
      <transactions />
      <footer />
    </div>
  )
}

export default App
