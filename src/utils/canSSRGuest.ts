import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { parseCookies } from "nookies";

//funcao para paginas que so pode ser acesssadas por visitantes
export function canSSRGuest<P extends { [key: string]: any; }>(fn: GetServerSideProps<P>){
  return async(ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx);

    if (cookies['@agendemais.token']) {
      return {
        redirect: {
          destination: '/home',
          permanent: false
        }
      }
    }

    return await fn(ctx)
  }
}
