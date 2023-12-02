import { NavLink } from 'react-router-dom';
import { RoutesMap } from '../../../routing/RoutesMap';
import { PageContentContainer } from '../../../styles/base.styles';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { DatePickerElement, FormContainer, TextFieldElement, useForm } from 'react-hook-form-mui';
import { CreateOrUpdateFormData } from '../../../models/entities/employee';
import { getDefaultFormData } from './employeeEditionUtils';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

const topic = 'employee';
const title = `Create new ${topic}`;

const EmployeeEditionPage: React.FC<{}> = () => {
  const formDetails = useForm<CreateOrUpdateFormData>({ defaultValues: getDefaultFormData() });

  const handleSubmit = (data: CreateOrUpdateFormData) => {};

  return (
    <PageContentContainer className='fullySizedFlexColumn' elevation={0}>
      {/* Navigation side */}
      <Box className='flexStartCenterRow'>
        <NavLink to={RoutesMap.employees.path}>
          <Fab color='primary' size='small' sx={{ mr: 2 }}>
            <KeyboardReturnIcon />
          </Fab>
        </NavLink>
        <Typography variant='h6'>{title}</Typography>
      </Box>

      {/* Form  */}
      <FormContainer
        formContext={formDetails}
        onSuccess={handleSubmit}
        FormProps={{ className: 'flexColumn formStyle' }}>
        <Divider textAlign='center' sx={{ my: 2 }}>
          Basic details
        </Divider>
        {/* email */}
        <TextFieldElement type='text' name='email' label='Email' required fullWidth margin='normal' />
        <Grid container columnSpacing={{ xs: 0, md: 2 }}>
          {/* firstname */}
          <Grid item md={6} xs={12}>
            <TextFieldElement type='text' name='firstname' label='Firstname' required fullWidth margin='normal' />
          </Grid>
          {/* lastname */}
          <Grid item md={6} xs={12}>
            <TextFieldElement type='text' name='lastname' label='Lastname' required fullWidth margin='normal' />
          </Grid>
        </Grid>

        <Divider textAlign='center' sx={{ my: 2 }}>
          Employement details
        </Divider>

        {/* jobTitle */}
        <TextFieldElement type='text' name='jobTitle' label='Job title' required fullWidth margin='normal' />
        {/* departement */}
        <TextFieldElement type='text' name='departement' label='Departement' required fullWidth margin='normal' />
        {/* role */}
        <TextFieldElement type='text' name='role' label='Role' required fullWidth margin='normal' />
        {/* joiningDate */}
        <DatePickerElement
          name='joiningDate'
          label='Joining Date'
          required
          inputProps={{ margin: 'normal' }}
          slotProps={{ inputAdornment: { position: 'start', sx: { pl: 1 } } }}
        />

        <Button type='submit' variant='contained' color='primary' sx={{ mt: 2 }}>
          Create
        </Button>
      </FormContainer>
    </PageContentContainer>
  );
};

export default EmployeeEditionPage;
