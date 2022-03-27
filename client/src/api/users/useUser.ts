import useSWR from "swr";
import { UserDto } from "../../dto/UserDto";
import * as URL from "../url";

export const useUser = (
  id: string | undefined
): {
  user: UserDto | undefined;
  isLoading: boolean;
  isError: any;
} => {
  const { data, error } = useSWR<UserDto[]>(
    id ? `${URL.LOCAL_HOST}${URL.USERS_API}?email=${id}` : null
  );

  return {
    user: data?.[0] || undefined,
    isLoading: !error && !data,
    isError: error,
  };
};
