import { styled } from '@mui/material/styles';
import { ListingUpperBar } from '../../../components/common/ListingUpperBar';
import { useEmployeesData } from '../../../components/employeesList/hooks';
import { RoutesMap } from '../../../routing/RoutesMap';
import Paper from '@mui/material/Paper';

const Container = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  flexGrow: 1,
  background: '#ffffffa3',
  zIndex: 99,
  position: 'relative',
}));

const EmployeesPage: React.FC<{}> = () => {
  const { searchText, handleNewSearch, clearSearchTxt } = useEmployeesData();

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
    </Container>
  );
};

export default EmployeesPage;
