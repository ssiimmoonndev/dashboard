import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function Dashboard() {

  return (
    <div className='layout'>
      <Header />
      <div className='sidebar'>
        <Sidebar />
      </div>
    </div>
  )
}

export default Dashboard;
