using AutoMapper;
using EmployeesVacationTracker.Domain.Entities;

namespace EmployeesVacationTracker.Application.Features.Employees.ListAll;

public class EmployeeDTOMapper : Profile
{
    public EmployeeDTOMapper()
    {
        CreateMap<Employee, EmployeeDTO>();
    }
}
