import * as Prismic from '@prismicio/client';
import { NextApiRequest } from 'next';

const apiEndpoint = Prismic.getEndpoint(process.env.PRISMIC_REPO_NAME);
const accessToken = process.env.PRISMIC_ACCESS_TOKEN;

export const createClient = (
  req?: NextApiRequest,
  options: Prismic.ClientConfig = {
    accessToken: accessToken,
  }
) => {

  const prismicClient = Prismic.createClient(apiEndpoint, options);

  if (req) {
    prismicClient.enableAutoPreviewsFromReq(req);
  }
  
  return prismicClient;
};