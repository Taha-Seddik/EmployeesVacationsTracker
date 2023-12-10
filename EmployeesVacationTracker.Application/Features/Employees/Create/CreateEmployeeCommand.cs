using AutoMapper;
using EmployeesVacationTracker.Application.Common.Interfaces;
using EmployeesVacationTracker.Domain.Entities;
using MediatR;

namespace EmployeesVacationTracker.Application.Features.Employees.Create;

public class CreateEmployeeCommand : IRequest<int>
{
    public string JobTitle { get; set; }
    public EmployeeDepartment Department { get; set; }
    public DateTimeOffset JoiningDate { get; set; }
    public int UserId { get; set; }
}

public class CreateEmployeeCommandHandler : IRequestHandler<CreateEmployeeCommand, int>
{
    private readonly IMapper _mapper;
    private readonly IEmployeesRepository _employeesRepo;

    public CreateEmployeeCommandHandler(IEmployeesRepository employeesRepo, IMapper mapper)
    {
        _employeesRepo = employeesRepo;
        _mapper = mapper;
    }

    public async Task<int> Handle(CreateEmployeeCommand request, CancellationToken cancellationToken)
    {
        var newEmployee = _mapper.Map<Employee>(request);
        newEmployee = await _employeesRepo.AddAsync(newEmployee, cancellationToken);
        return newEmployee.Id;
    }
}

