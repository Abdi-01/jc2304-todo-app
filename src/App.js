import logo from './logo.svg';
import React from 'react';
import './App.css';
import Todo from './Pages/Todo';
import { Box, Button, Container, Text } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import ModalAdd from './Components/Modal';

function App() {
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
      location: "data:image/jpeg;base64,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",
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
