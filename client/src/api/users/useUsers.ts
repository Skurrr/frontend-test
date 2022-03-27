import useSWR from "swr";
import { UserDto } from "../../dto/UserDto";
import * as URL from "../url";

export const useUsers = (
  index: number
): {
  users: UserDto[];
  isLoading: boolean;
  isError: any;
} => {
  const { data, error } = useSWR<UserDto[]>(
    `${URL.LOCAL_HOST}${URL.USERS_API}?_page=${index}&_limit=20`
  );

  return {
    users: data ?? [],
    isLoading: !error && !data,
    isError: error,
  };
};
