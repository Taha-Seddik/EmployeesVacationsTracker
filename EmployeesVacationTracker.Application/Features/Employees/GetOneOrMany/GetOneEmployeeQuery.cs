using AutoMapper;
using EmployeesVacationTracker.Application.Common.Interfaces;
using MediatR;

namespace EmployeesVacationTracker.Application.Features.Employees.GetOneOrMany;

public class GetOneEmployeeQueryResponse
{
    public EmployeeDTO Employee { get; set; }
}

public class GetOneEmployeeQuery : IRequest<GetOneEmployeeQueryResponse>
{
    public int EmployeeId { get; set; }
}

public class GetOneEmployeeQueryHandler : IRequestHandler<GetOneEmployeeQuery, GetOneEmployeeQueryResponse>
{
    private readonly IMapper _mapper;
    private readonly IEmployeesRepository _employeesRepo;

    public GetOneEmployeeQueryHandler(IEmployeesRepository employeesRepo, IMapper mapper)
    {
        _employeesRepo = employeesRepo;
        _mapper = mapper;
    }

    public async Task<GetOneEmployeeQueryResponse> Handle(GetOneEmployeeQuery request, CancellationToken cancellationToken)
    {
        var foundEmp = await _employeesRepo.GetOneWithUserFilled(request.EmployeeId, cancellationToken);
        if(foundEmp == null)
        {
            throw new InvalidOperationException("Employee not found");
        }
        var basicDto = _mapper.Map<EmployeeDTO>(foundEmp);
        basicDto.FirstName = foundEmp.User.FirstName;
        basicDto.LastName = foundEmp.User.LastName;
        basicDto.Email = foundEmp.User.Email!;
        return new GetOneEmployeeQueryResponse()
        {
            Employee = basicDto
        };
    }
}



