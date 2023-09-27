﻿using HelpfulNeighbor.web.Features.Authorization;

namespace HelpfulNeighbor.web.Features.Interfaces
{
    public interface IUserRoleRepository
    {
        ICollection<UserRole> GetUserRoles();
    }
}