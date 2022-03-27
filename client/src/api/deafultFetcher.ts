export type HttpMethod = "POST" | "GET";
export const defaultFetcher = async (
  url: string,
  method?: HttpMethod,
  payload?: string
) => {
  const options = {
    method: method || "GET",
    ...(payload && { body: JSON.stringify(payload) }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await fetch(url, options);

  if (!res.ok) {
    const result = await res.json();
    const error = new Error();
    Object.assign(error, { ...result });
    throw error;
  }
  return res.json();
};
