import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import "./App.css"

const Home: React.FC = () => {
  return (
    <div className="mx-auto p-4 min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div className='container mx-auto'>
        <h1 className="text-5xl font-extrabold text-center mb-8 text-blue-800">Todo App with Notes</h1>
        <AddTodo />
        <div className='overflow-scroll h-[80vh] shadow-2xl p-4'>
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default Home;
