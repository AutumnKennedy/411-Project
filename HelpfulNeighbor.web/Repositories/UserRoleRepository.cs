﻿using HelpfulNeighbor.web.Data;
using HelpfulNeighbor.web.Interfaces;
using HelpfulNeighbor.web.Models;
using System.Reflection.Metadata.Ecma335;

namespace HelpfulNeighbor.web.Repositories
{
    public class UserRoleRepository : IUserRoleRepository
    {
        private readonly DataContext _context;
        public UserRoleRepository(DataContext context) 
        {
            _context = context;
        }
        public ICollection<UserRole> GetUserRoles()
        {
            return _context.UserRoles.OrderBy(ur=>ur.RoleId).ToList();
        }
    }
}