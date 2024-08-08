import ResponseHandler from "../../../utils/response.js";
import * as allService from "../../../services/allService.js";

export const getChat = async (req, res) => {
  const response = new ResponseHandler(res);
  try {
    const data = await allService.ucapanServices.getData();
    response.success200(data);
  } catch (error) {
    response.fail500(error);
  }
};

export const createChat = async (req, res) => {
  const response = new ResponseHandler(res);
  try {
    const { name, coupleName, attedance, chat } = req.body;
    console.log({ name, coupleName, attedance, chat });
    const data = await allService.ucapanServices.create({
      name,
      coupleName,
      attedance,
      chat,
    });
    response.success201(data);
  } catch (error) {
    response.fail500(error.message);
  }
};
