import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { parseCookies, destroyCookie } from "nookies";
import { AuthTokenError } from "../services/errors/AuthTokenErrors";

//funcao para paginas que so user logados podem ter acessos
export function canSSRAuth<P extends { [key: string]: any; }>(fn: GetServerSideProps<P>){
  return async(ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx);

    const token = cookies['@agendemais.token']

    if (!token) {
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      }
    }


    try {
      return await fn(ctx)
    }catch(err){
      if (err instanceof AuthTokenError) {
        destroyCookie(ctx, '@agendemais.token');
        return {
          redirect: {
            destination: '/',
            permanent: false
          }
        }
      }
    }
    return await fn(ctx)
  }
}
