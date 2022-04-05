(() => {
  enum ROLES {
    ADMIN = 'admin',
    SELLER = 'seller',
    CUSTOMER = 'customer'
  }

  type User = {
    username: string,
    role: ROLES
  }

  const alexUser: User = {
    username: 'Alexander',
    role: ROLES.ADMIN
  }
})()
