import { React } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Headers/Headers';
import SideMain from './Components/SideMain/SideMain';
// import { Main, Favorites, Manga, Chapter, Signup, Signin, Suggestion } from './Pages';

// import SideMenu from './Features/Sidemenu/SideMenu';
// import SideMain from './Components/SideMain/SideMain';
// import Titles from './Pages/Titles/Titles';
// import UserPage from './Pages/User/UserPage';
// import Library from './Pages/Library/Library';
// import MDLists from './Pages/MDLists/MDLists';
// import CreateList from './Pages/CreateList/CreateList';

const App = () => {
  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900">
      <Router>
      <Header />
      <SideMain/>
      {/* <div className="content__wrap">
        <SideMenu options={{menuType: 'main'}}>
          <SideMain />
        </SideMenu>
        <Routes>
          <Route path='/' element={<Suggestion />} />
          <Route path='/favorites' element={<Favorites />} />

          <Route path='/singin' element={<Signin />} />
          <Route path='/singup' element={<Signup />} />

          <Route path='/titles/*' element={<Titles />} />
          <Route path='/manga/:id' element={<Manga />} />
          <Route path='/user/:id' element={<UserPage />} />
          <Route path='/chapter/*' element={<Chapter />} />

          <Route path='/follows' element={<Library />} />
          <Route path='/lists' element={<MDLists />} />

          <Route path='/create/list' element={<CreateList />} />
          
          <Route path='*' element={<Main />} />
        </Routes>
      </div> */}
      </Router>
    </div>
  );
}

export default App;
