import { styled } from '@mui/material/styles';
import { ListingUpperBar } from '../../../components/common/ListingUpperBar';
import { useEmployeesData } from '../../../components/employeesList/hooks';
import { RoutesMap } from '../../../routing/RoutesMap';

const Container = styled('div')(() => ({}));

const EmployeesPage: React.FC<{}> = () => {
  const { searchText, handleNewSearch, clearSearchTxt } = useEmployeesData();

  return (
    <Container className='fullySizedFlexColumn'>
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
