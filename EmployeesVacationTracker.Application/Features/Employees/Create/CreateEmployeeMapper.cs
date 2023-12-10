using AutoMapper;
using EmployeesVacationTracker.Domain.Entities;

namespace EmployeesVacationTracker.Application.Features.Employees.Create;

public class CreateEmployeeMapper : Profile
{
    public CreateEmployeeMapper()
    {
        CreateMap<CreateEmployeeCommand, Employee>();
    }
}