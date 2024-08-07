import * as allService from "../../../services/allService";

export const register = async (req, res) => {
  try {
    const registerUser = await allService.userServices.create(req.body);
    return res.status(201).json({
      data: registerUser,
      message: "success post data",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
