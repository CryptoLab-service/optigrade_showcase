import { Metadata } from 'next';

declare module 'next' {
  export interface PageProps {
    params: { [key: string]: string | string[] };
    searchParams?: { [key: string]: string | string[] | undefined };
  }
  
  export type GenerateMetadataProps = {
    params: { [key: string]: string };
    searchParams?: { [key: string]: string | string[] | undefined };
  };
}
