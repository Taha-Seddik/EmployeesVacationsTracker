using AutoMapper;
using EmployeesVacationTracker.Application.Common.Interfaces;
using EmployeesVacationTracker.DomainLayer.Entities;
using MediatR;
using Microsoft.AspNetCore.Identity;

namespace EmployeesVacationTracker.Application.Features.Employees.Create;

public class CreateEmployeeCommand : IRequest<int>
{
    public string Email { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Password { get; set; }
    public string JobTitle { get; set; }
    public EmployeeDepartment Department { get; set; }
    public DateTimeOffset JoiningDate { get; set; }
    public int UserId { get; set; }
}

public class CreateEmployeeCommandHandler : IRequestHandler<CreateEmployeeCommand, int>
{
    private readonly IMapper _mapper;
    private readonly IEmployeesRepository _employeesRepo;
    private readonly UserManager<ApplicationUser> _userManager;

    public CreateEmployeeCommandHandler(IEmployeesRepository employeesRepo, IMapper mapper, UserManager<ApplicationUser> userManager)
    {
        _employeesRepo = employeesRepo;
        _mapper = mapper;
        _userManager = userManager;
    }

    public async Task<int> Handle(CreateEmployeeCommand request, CancellationToken cancellationToken)
    {
        var newEmployee = _mapper.Map<Employee>(request);
        newEmployee = await _employeesRepo.AddAsync(newEmployee, cancellationToken);

        // add user infos
        var newUser = new ApplicationUser
        {
            UserName = request.Email,
            Email = request.Email,
            FirstName = request.FirstName,
            LastName = request.LastName
        };
        await _userManager.CreateAsync(newUser, request.Password);
        await _userManager.AddToRoleAsync(newUser, "User");

        return newEmployee.Id;
    }
}

