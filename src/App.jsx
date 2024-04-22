import { useLoaderData } from 'react-router-dom'
import './App.css'
import SingleCoffee from './components/SingleCoffee';

function App() {
  const coffees = useLoaderData();


  return (
    <div className='md:m-20'>
      <h1 className='text-4xl text-purple-400 text-center'>all categories coffee: {coffees.length}</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {
          coffees.map(coffee => <SingleCoffee key={coffee._id}
            singleCoffee={coffee}
          ></SingleCoffee>)
        }
      </div>
    </div>
  )
}

export default App
