using EmployeesVacationTracker.Application.Common.Interfaces;
using MediatR;

namespace EmployeesVacationTracker.Application.Features.Employees.Delete;

public class DeleteEmployeeCommand : IRequest
{
    public int EmployeeId { get; set; }
}

public class DeleteEmployeeCommandHandler : IRequestHandler<DeleteEmployeeCommand>
{
    private readonly IEmployeesRepository _employeesRepo;

    public DeleteEmployeeCommandHandler(IEmployeesRepository employeesRepo)
    {
        _employeesRepo = employeesRepo;
    }

    public async Task Handle(DeleteEmployeeCommand request, CancellationToken cancellationToken)
    {
        var entity = await _employeesRepo.GetByIdAsync(request.EmployeeId, cancellationToken);
        await _employeesRepo.DeleteAsync(entity!, cancellationToken);
    }
}