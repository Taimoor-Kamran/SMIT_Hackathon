import User from "../models/userModel.js";
// import route from "../routes/userRoute.js";

export const create = async (req, res) => {
  try {
    const userDate = new User(req.body);

    if (!userDate) {
      return res.status(404).json({ msg: "User Data Not Found" });
    }

    const saveData = await userDate.save();
    res.status(200).json(saveData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getAll = async (req, res) => {
  try {
    const userDate = await User.find();

    if (!userDate) {
      return res.status(404).json({ msg: "User data not found" });
    }
    res.status(200).json(userDate);
  } catch (error) {
    res.status(404).json({ error: error });
  }
};

export const getOne = async (req, res) => {
  try {

    const id = req.params.id;
    const userExist = await User.findById(id);
    if(!userExist){
        return res.status(404).json({msg : "User not found"})
    }

    res.status(200).json(userExist)
  } catch (error) {
    res.status(404).json({ error: error });
  }
};


export const update = async (req, res)=> {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id)

        if(!userExist){
            return res.status(401).json({msg: "User not found"})
        }

        const updateData = await User.findByIdAndUpdate(id, req.body, {new: true})
        res.status(200).json(updateData)

    } catch (error) {
    res.status(404).json({ error: error });
        
    }
}


export const deleteUser = async (req, res)=>{
try {
    
    const id = req.params.id;
    const userExist = await User.findById(id)
    if(!userExist){
        return res.status(404).json({msg : "User Does'nt exist" })
    }

    await User.findByIdAndDelete(id);
    res.status(200).json({msg : "User Deleted Successfully"})

} catch (error) {
    res.status(404).json({ error: error });
    
}
}