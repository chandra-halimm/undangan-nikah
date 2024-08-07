import ResponseHandler from "../../../utils/response";
import * as allService from "../../../services/allService";

export const chat = async (req, res) => {
  const response = new ResponseHandler(res);
  try {
    const data = await allService.ucapanServices.getData();
    response.success200(data);
  } catch (error) {
    response.fail500(error);
  }
};
