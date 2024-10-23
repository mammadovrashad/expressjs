

const login = async(req, res) => {
    console.log(req.body);
    return res.json({
        message:'suceces'
    })
}

const register = async(req, res) => {
    return res.json(req.body)
}



export {
    register, login
}