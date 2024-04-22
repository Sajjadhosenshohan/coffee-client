import { useLoaderData } from 'react-router-dom'
import './App.css'
import SingleCoffee from './components/SingleCoffee';
import { useState } from 'react';
import Nav from './components/Nav';

function App() {
  const LoadCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(LoadCoffees)

  return (
    <div className='md:m-20'>

      <Nav></Nav>

      <h1 className='text-4xl text-purple-400 text-center my-12'>all categories coffee: {coffees.length}</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {
          coffees.map(coffee => <SingleCoffee key={coffee._id}
            singleCoffee={coffee}
            
            coffees={coffees}
            setCoffees={setCoffees}

          ></SingleCoffee>)
        }
      </div>
    </div>
  )
}

export default App
