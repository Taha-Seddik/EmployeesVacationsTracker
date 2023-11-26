import { styled } from '@mui/material/styles';
import { ListingUpperBar } from '../../../components/common/ListingUpperBar';
import { useEmployeesData } from '../../../components/employeesList/useEmployeesData';
import { usePrepareEmployeesTableColumns } from '../../../components/employeesList/useTableConfig';
import { RoutesMap } from '../../../routing/RoutesMap';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { IEmployee } from '../../../models/entities/employee';
import ConfirmDialog from '../../../components/common/confirmDialog';
import { DataGrid } from '@mui/x-data-grid/DataGrid';
import { useState } from 'react';

const Container = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  flexGrow: 1,
  background: '#ffffffa3',
  zIndex: 99,
  position: 'relative',
}));

const EmployeesPage: React.FC<{}> = () => {
  const { searchText, employeesToShow, fetchRows, handleNewSearch, clearSearchTxt } = useEmployeesData();

  return (
    <Container className='fullySizedFlexColumn' elevation={3}>
      <ListingUpperBar
        title='Employees'
        topic='Employee'
        toPath={RoutesMap.createEmployee.path}
        searchText={searchText}
        handleNewSearch={handleNewSearch}
        clearSearchTxt={clearSearchTxt}
      />
      <Box flexGrow={1} mt={2}>
        <EmployeesTable employees={employeesToShow} fetchRows={fetchRows} />
      </Box>
    </Container>
  );
};

type ITableProps = {
  employees: IEmployee[];
  fetchRows: () => Promise<void>;
};

const EmployeesTable: React.FC<ITableProps> = ({ employees, fetchRows }) => {
  const [openConfirm, setOpenConfirm] = useState(false);
  const [selectedRowsIds, setSelectedRowIds] = useState<string[]>([]);

  const { columns } = usePrepareEmployeesTableColumns(setOpenConfirm);

  const confirmDeleteProduct = () => {};

  return (
    <Box display='flex' flexDirection='column' className='fullHW'>
      <DataGrid
        columns={columns}
        rows={employees}
        onRowSelectionModelChange={(rows) => setSelectedRowIds(rows as string[])}
        rowSelectionModel={selectedRowsIds}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
      />
      <ConfirmDialog
        open={openConfirm}
        title='Sure you wanna delete this employee ?'
        onConfirm={() => confirmDeleteProduct()}
        setOpen={setOpenConfirm}
      />
    </Box>
  );
};

// rowHeight={80}

export default EmployeesPage;
