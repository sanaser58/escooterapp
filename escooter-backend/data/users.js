import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Sayed Naser',
    email: 'sayed@example.com',
    password: bcrypt.hashSync('123456', 10),
  },

  {
    name: 'Sayed Abu',
    email: 'abu@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users