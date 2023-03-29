import { RoleEnum } from "../enums/role.enum";
import axios from "axios";
import { url } from "../main";
import { setItems } from "../store/slices/items.slice";
import useAppSelector from "./useAppSelector.hook";
import useAppDispatch from "./useAppDispatch.hook";
import { useCallback, useState } from "react";

interface LoadItemsHook {
  fetch: () => void,
  loading: boolean
}


export const loadItemsHook: Function = (): LoadItemsHook => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const role: string = useAppSelector(state => state.role.value);
  const token: string = useAppSelector(state => state.token.value);

  const fetch = useCallback(async (): Promise<void> => {
    try {
      if (role === RoleEnum.ADMIN.toString()) {
        setLoading(true);
        const response = await axios.get(`${url}/women-accounting`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setLoading(false);
        dispatch(setItems(response.data));
      }
    } catch (error) {
      setLoading(false);
      alert(error);
    }
  }, []);

  return { fetch, loading };
};
