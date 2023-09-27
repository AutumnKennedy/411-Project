﻿using HelpfulNeighbor.web.Features.Authorization;
using HelpfulNeighbor.web.Features.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Transactions;

namespace HelpfulNeighbor.web.Controllers
{

    [ApiController]
    [Route("api/users")]
    public class UsersController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        private readonly UserManager<User> userManager;
        public UsersController(IUserRepository userRepository, UserManager<User> userManager)
        {
            _userRepository = userRepository;
            this.userManager = userManager;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<User>))]
        public IActionResult GetUsers()
        {
            var user = _userRepository.GetUsers();
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(user);
        }

        [HttpPost]
        [Authorize(Roles = RoleNames.Admin)]
        public async Task<ActionResult<UserDto>> Create(CreateUserDto dto)
        {
            using var transaction = new TransactionScope(TransactionScopeAsyncFlowOption.Enabled);

            var newUser = new User
            {
                UserName = dto.UserName,
            };
            var createResult = await userManager.CreateAsync(newUser, dto.Password);
            if (!createResult.Succeeded)
            {
                return BadRequest();
            }

            try
            {
                var roleResult = await userManager.AddToRolesAsync(newUser, dto.Roles);
                if (!roleResult.Succeeded)
                {
                    return BadRequest();
                }
            }
            catch (InvalidOperationException e) when (e.Message.StartsWith("Role") && e.Message.EndsWith("does not exist."))
            {
                return BadRequest();
            }

            transaction.Complete();

            return Ok(new UserDto
            {
                Id = newUser.Id,
                Roles = dto.Roles,
                UserName = newUser.UserName,
            });
        }

        [HttpPost]
        [Route("signup")]
        public async Task<ActionResult<UserDto>> Signup(CreateUserDto dto)
        {
            using var transaction = new TransactionScope(TransactionScopeAsyncFlowOption.Enabled);

            var newUser = new User
            {
                UserName = dto.UserName,
            };
            var createResult = await userManager.CreateAsync(newUser, dto.Password);
            if (!createResult.Succeeded)
            {
                return BadRequest();
            }

            try
            {
                var roleResult = await userManager.AddToRolesAsync(newUser, dto.Roles);
                if (!roleResult.Succeeded)
                {
                    return BadRequest();
                }
            }
            catch (InvalidOperationException e) when (e.Message.StartsWith("Role") && e.Message.EndsWith("does not exist."))
            {
                return BadRequest();
            }

            transaction.Complete();

            return Ok(new UserDto
            {
                Id = newUser.Id,
                Roles = dto.Roles,
                UserName = newUser.UserName,
            });
        }
    }
}