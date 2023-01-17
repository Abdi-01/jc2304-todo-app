import logo from './logo.svg';
import React from 'react';
import './App.css';
import Todo from './Pages/Todo';
import { Box, Button, Container, Text } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import ModalAdd from './Components/Modal';

function App() {
  // State open : untuk mengatur buka/tutup modal, yang nantinya dikirim ke modal melalui props
  const [open, setOpen] = React.useState(false);
  // State data : untuk menyimpan data todo, nantinya akan dapat diakses oleh modal/table lewat props untuk melakukan manipulasi data
  const [data, setData] = React.useState([]);

  return (
    <div>
      {/* Navbar */}
      <Box backgroundColor="#16a085"
        className='container shadow rounded-3 mt-4 mb-2 py-2 d-flex justify-content-between align-items-center'>
        <Text fontWeight="bold" fontSize="2xl" color="white">U-Todo</Text>
        <Button onClick={() => {
          setOpen(!open);
        }} backgroundColor="white" className='shadow-sm' position="relative" right={-9} size="lg" rounded="full" padding={0}>
          <AddIcon />
        </Button>
      </Box>
      {/* Modal */}
      <ModalAdd buka={open}
        data={data}
        onToggle={() => setOpen(!open)}
        updateStateData={setData} />
      <div className='container shadow rounded-3 p-3'>
        {/* Table */}
        <Todo />
      </div>
    </div>
  );
}

export default App;
