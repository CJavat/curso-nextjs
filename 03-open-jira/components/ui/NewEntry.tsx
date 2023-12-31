import { ChangeEvent, useContext, useState } from 'react';
import { TextField, Box, Button } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { UIContext } from '@/context/ui';
import { EntriesContext } from '@/context/entries';


export const NewEntry = () => {
  const { isAddingEntry, setIsAddingEntry } = useContext( UIContext );

  const [inputValue, setInputValue] = useState( '' );
  const [touched, setTouched] = useState( false );

  const { addNewEntry } = useContext( EntriesContext );

  const onTextFieldChange = ( event: ChangeEvent<HTMLInputElement> ) => {
    setInputValue(event.target.value);
  };

  const onSave = () => {
    if( inputValue.length === 0 ) return;

    addNewEntry( inputValue );
    setIsAddingEntry( false);
    setTouched( false );
    setInputValue('');
  }

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      
      {
        isAddingEntry 
          ? (
            <>
              <TextField
                fullWidth 
                sx={{ marginTop: 2, marginBottom: 1}} 
                placeholder='Nueva Entrada' 
                autoFocus 
                multiline 
                label='Nueva Entrada'
                helperText={ inputValue.length <= 0 && touched && "Ingresa en valor" }
                error={ inputValue.length <= 0 && touched }
                value={ inputValue }
                onChange={ onTextFieldChange }
                onBlur={ () => setTouched(true) }
              />

              <Box display={ 'flex' } justifyContent={ 'space-between' }>
                <Button variant='text' onClick={ () => setIsAddingEntry( false ) }>
                  Cancelar
                </Button>

                <Button 
                  variant='outlined'
                  color='secondary'
                  endIcon={ <SaveOutlinedIcon /> }
                  onClick={ onSave }
                >
                  Guardar
                </Button>
              </Box>
            </>
          )
          : (
            <Button 
              startIcon={ <AddIcon /> }
              fullWidth
              variant='outlined'
              onClick={ () => setIsAddingEntry( true ) }
            >
              Agregar Tarea
            </Button>
          )
      }

      

      
    </Box>
  )
}
