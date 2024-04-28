import logo from './logo.svg';
import './App.css';
import TopMenu from './components/TopMenu/TopMenu';
import SideMenu from './components/SideMenu/SideMenu';
import Button from './components/ListPage/buttons/button';
import SideBtn from './components/SideMenu/SideButton/SideButton';
import ListPage from './components/ListPage/ListPage';
import LoginPage from './components/LoginPage/LoginPage'
import Dashboard from './components/DashBoard/Dashboard.js'
import { useSelector } from 'react-redux';
import { useGetRecipesQuery, useAddTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation } from './features/recipesApiSlice.js';

function App() {

  // const { data: recipes } = useGetRecipesQuery();

  // const [addRecipe] = useAddRecipeMutation()
  // const [updateRecipe] = useUpdateRecipeMutation()
  // const [deleteRecipe] = useDeleteRecipeMutation()


  const user = useSelector(state => state.auth.user)


  return (
    <div className="App">

      {user ? <Dashboard /> : <LoginPage />}

    </div>
  );
}

export default App;
