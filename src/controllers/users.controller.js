
const users=[{
    id:1,
    name:"Avaz",
    surname:"Aliyev"
 },
 {
    id:2,
    name:"Avaz",
    surname:"Aliyev"
 }]

const getAllUsers = async (req, res) => {
    return res.json(users)
}
const getUserById = async (req, res) => {
    const id = req.params.id;
    const user = users?.find((user) => user?.id == +id)
    return res.json(user)
}
export {
    getAllUsers,
    getUserById
}