import { Submittals } from './components/Submittals.jsx';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useSubmittals } from './hooks/useSubmittals.js';

import { useState } from 'react';
import SubmittalModal from '../src/components/Modals/SubmittalModal.jsx';

function App() {
  const { submittals } = useSubmittals()
  console.log("submittals::", submittals)
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (formData) => {
    try {
      const postEndpointURL = "https://submittal-post-endpoint.free.beeceptor.com"
      const response = await fetch(postEndpointURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        debugger
        // La solicitud fue exitosa, maneja la respuesta según sea necesario
        console.log('Datos enviados correctamente:', formData);
      } else {
        // La solicitud no fue exitosa, maneja los errores
        console.error('Error al enviar los datos');
      }
    } catch (error) {
      // Manejo errores de red u otros errores
      console.error('Error:', error);
    }
  };
  

  return (
    <div className='page'>
      <header>
        <h1>Submittals</h1>
        <Stack direction="row" spacing={2} marginBottom={2}>
          <Button 
          size="small"
          variant="contained" 
          startIcon={<AddIcon />} 
          onClick={ openModal }>
            Create Item
          </Button>
        </Stack>
        <SubmittalModal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleSubmit}/>
      </header>
      
      <main>
        <Submittals submittals={submittals.submittals} />
      </main>
    </div>
  );
}

export default App
