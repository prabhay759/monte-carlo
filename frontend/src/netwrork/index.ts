export interface IMakeRequestArgs {
  origin: string;
  pathname: string;
  method?: "GET";
}

const throwError = (err: unknown): never => {
  throw err;
};

const makeRequest = <T>(args: IMakeRequestArgs): Promise<T> | never => {
  return actualRequest(args.origin + args.pathname).then((resp) => {
    return resp.ok ? (resp.json() as Promise<T>) : throwError(resp);
  });
};

const actualRequest = (url: string, initObject?: any): Promise<Response> =>
  fetch(url, initObject as RequestInit);

export default makeRequest;
