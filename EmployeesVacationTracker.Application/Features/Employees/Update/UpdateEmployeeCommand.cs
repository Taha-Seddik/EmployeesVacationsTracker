using EmployeesVacationTracker.Application.Common.Interfaces;
using EmployeesVacationTracker.Domain.Entities;
using MediatR;

namespace EmployeesVacationTracker.Application.Features.Employees.Update;

public class UpdateEmployeeCommand : IRequest
{
    public int EmployeeId { get; set; }
    public string JobTitle { get; set; }
    public EmployeeDepartment Department { get; set; }
    public DateTimeOffset JoiningDate { get; set; }
}

public class UpdateEmployeeCommandHandler : IRequestHandler<UpdateEmployeeCommand>
{
    private readonly IEmployeesRepository _employeesRepo;

    public UpdateEmployeeCommandHandler(IEmployeesRepository employeesRepo)
    {
        _employeesRepo = employeesRepo;
    }

    public async Task Handle(UpdateEmployeeCommand request, CancellationToken cancellationToken)
    {
        var entity = await _employeesRepo.GetByIdAsync(request.EmployeeId, cancellationToken);
        if (entity == null) return;
        entity.JobTitle = request.JobTitle;
        entity.Department = request.Department;
        entity.JoiningDate = request.JoiningDate;
        await _employeesRepo.UpdateAsync(entity, cancellationToken);
    }
}