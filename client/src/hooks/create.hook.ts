import axios from "axios";
import { url } from "../main";
import { CreateWomenAccount } from "../interfaces/CreateWomenAccount";
import useAppSelector from "./useAppSelector.hook";
import useAppDispatch from "./useAppDispatch.hook";
import { setItem } from "../store/slices/items.slice";

interface CreateHookReturn {
  create: (data: CreateWomenAccount) => Promise<any>;
}

export const CreateHook: Function = (): CreateHookReturn => {
  const token: string = useAppSelector(state => state.token.value);
  const dispatch = useAppDispatch();

  const create = async (data: CreateWomenAccount): Promise<any> => {
    try {
      const response = await axios.post(`${url}/women-accounting/create`, {...data}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      dispatch(setItem(data))
      return response.data;
    } catch (error) {
      alert(error);
    }
  };

  return { create };
};