import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import "./App.css"

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4 min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
       <h1 className="text-5xl font-extrabold text-center mb-8 text-blue-800">Todo App with Notes</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default Home;
