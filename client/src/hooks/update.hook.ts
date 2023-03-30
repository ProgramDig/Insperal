import axios from "axios";
import { url } from "../main";
import useAppSelector from "./useAppSelector.hook";
import useAppDispatch from "./useAppDispatch.hook";
import { setItem } from "../store/slices/items.slice";
import { UpdateWomenAccount } from "../interfaces/UpdateWomenAccount";

interface UpdateHookReturn {
  update: (data: UpdateWomenAccount) => Promise<any>;
}

export const UpdateHook: Function = (): UpdateHookReturn => {
  const token: string = useAppSelector(state => state.token.value);

  const update = async (data: UpdateWomenAccount): Promise<any> => {
    try {
      const response = await axios.patch(`${url}/women-accounting/update`, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      alert(error);
    }
  };

  return { update };
};