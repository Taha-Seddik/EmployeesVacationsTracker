using EmployeesVacationTracker.Application.Common.Interfaces;
using EmployeesVacationTracker.DomainLayer.Entities;
using MediatR;
using Microsoft.AspNetCore.Identity;

namespace EmployeesVacationTracker.Application.Features.Employees.Update;

public class UpdateEmployeeCommand : IRequest
{
    public int EmployeeId { get; set; }
    public string Email { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string JobTitle { get; set; }
    public EmployeeDepartment Department { get; set; }
    public DateTimeOffset JoiningDate { get; set; }
}

public class UpdateEmployeeCommandHandler : IRequestHandler<UpdateEmployeeCommand>
{
    private readonly IEmployeesRepository _employeesRepo;
    private readonly UserManager<ApplicationUser> _userManager;

    public UpdateEmployeeCommandHandler(IEmployeesRepository employeesRepo, UserManager<ApplicationUser> userManager)
    {
        _employeesRepo = employeesRepo;
        _userManager = userManager;
    }

    public async Task Handle(UpdateEmployeeCommand request, CancellationToken cancellationToken)
    {
        // Update user infos
        var user = await _userManager.FindByEmailAsync(request.Email);
        if(user == null)
        {
            throw new InvalidOperationException("User not found");
        }
        user.FirstName = request.FirstName;
        user.LastName = request.LastName;
        var updateUserRes = await _userManager.UpdateAsync(user);
        if (!updateUserRes.Succeeded)
        {
            var msg = string.Join(", ", updateUserRes.Errors.Select(x => x.Description));
            throw new InvalidOperationException(msg);
        }
        // Update employee infos
        var entity = await _employeesRepo.GetByIdAsync(request.EmployeeId, cancellationToken);
        if (entity == null) return;
        entity.JobTitle = request.JobTitle;
        entity.Department = request.Department;
        entity.JoiningDate = request.JoiningDate;
        await _employeesRepo.UpdateAsync(entity, cancellationToken);
    }
}