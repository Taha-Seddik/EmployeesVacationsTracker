import { GridRowParams } from '@mui/x-data-grid';
import { Box, IconButton, Tooltip } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { RoutesMap } from '../../../routing/RoutesMap';

interface AdditionalProps {
  setOpenConfirm: (status: boolean) => void;
}

export const ActionsRendrer = ({ setOpenConfirm }: Partial<GridRowParams> & AdditionalProps) => {
  const startDeleteProduct = () => {
    setOpenConfirm(true);
  };

  return (
    <Box display='flex' justifyContent='center' width='100%'>
      <Tooltip title='Edit employee'>
        <NavLink to={RoutesMap.editEmployee.path}>
          <IconButton size='small' color='default' aria-label='edit'>
            <Edit />
          </IconButton>
        </NavLink>
      </Tooltip>
      <Tooltip title='Delete employee'>
        <IconButton size='small' color='default' aria-label='delete' onClick={startDeleteProduct}>
          <Delete />
        </IconButton>
      </Tooltip>
    </Box>
  );
};
