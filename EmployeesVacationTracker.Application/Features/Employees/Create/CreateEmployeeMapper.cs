using AutoMapper;
using EmployeesVacationTracker.DomainLayer.Entities;

namespace EmployeesVacationTracker.Application.Features.Employees.Create;

public class CreateEmployeeMapper : Profile
{
    public CreateEmployeeMapper()
    {
        CreateMap<CreateEmployeeCommand, Employee>();
    }
}