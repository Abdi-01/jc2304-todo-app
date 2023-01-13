import logo from './logo.svg';
import React from 'react';
import './App.css';
import Todo from './Pages/Todo';
import { Box, Button, Container, Text } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import ModalAdd from './Components/Modal';

function App() {
  // State open 
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState([
    {
      id: 1,
      date: "20-11-2021",
      todo: "Make Todo App",
      location: "https://media.istockphoto.com/photos/protective-face-masks-and-hand-sanitizers-on-the-desks-according-to-picture-id1290836478",
      note: "Prepare VSCode, Node js and CRA, Axios",
      status: "Done"
    },
    {
      id: 2,
      date: "2021-11-26",
      todo: "Berlibur",
      location: "https://pict-b.sindonews.net/dyn/620/pena/news/2021/09/18/156/544508/3-pantai-cantik-di-banten-yang-menarik-buat-plesiran-fuw.jpg",
      note: "Camping",
      status: "on going",
    },
    {
      id: 3,
      date: "2021-11-30",
      todo: "Futsal",
      location: "",
      note: "jam 09.00",
      status: "on going",
    },
    {
      id: 4,
      date: "2021-11-30",
      todo: "Futsal B",
      location: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScxYBCtVC_PCsJHbaTov5uf9tIuu6TLyKcvFUXdFCfoc77ctTDlmcsOnm8n7E-foV5qO8&usqp=CAU",
      note: "jam 16.00",
      status: "on going",
    }
  ]);


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
        onToggle={() => setOpen(!open)}
        updateStateData={setData} />
      <div className='container shadow rounded-3 p-3'>
        {/* Table */}
        <Todo data={data} />
      </div>
    </div>
  );
}

export default App;
