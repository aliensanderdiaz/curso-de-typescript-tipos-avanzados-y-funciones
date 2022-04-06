import { ROLES, User } from "./01-enum";

const user: User = {
  username: 'Aliensander',
  role: ROLES.ADMIN
}

export const checkRole = (...roles: ROLES[]) => {
  if (roles.includes(user.role)) {
    return true
  }
  return false
}

console.log(checkRole(ROLES.CUSTOMER, ROLES.SELLER))
console.log(checkRole(ROLES.CUSTOMER, ROLES.ADMIN))
