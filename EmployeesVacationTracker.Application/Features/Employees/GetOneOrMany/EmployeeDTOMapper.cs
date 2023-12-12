using AutoMapper;
using EmployeesVacationTracker.DomainLayer.Entities;

namespace EmployeesVacationTracker.Application.Features.Employees.GetOneOrMany;

public class EmployeeDTOMapper : Profile
{
    public EmployeeDTOMapper()
    {
        CreateMap<Employee, EmployeeDTO>();
    }
}
