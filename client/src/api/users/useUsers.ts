import useSWR from "swr";
import { UserDto } from "../../dto/UserDto";
import * as URL from "../url";

export const useUsers = (): {
  users: UserDto[] | undefined;
  isLoading: boolean;
  isError: any;
} => {
  const { data, error } = useSWR<UserDto[]>(
    `${URL.LOCAL_HOST}${URL.USERS_API}`
  );

  return {
    users: data,
    isLoading: !error && !data,
    isError: error,
  };
};
