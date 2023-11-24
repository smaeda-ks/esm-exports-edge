import { type EntryContext } from '@remix-run/node';
import { RemixServer } from '@remix-run/react';
import { handleRequest as remixHandleRequest } from '@vercel/remix';

const handleRequest = async (
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) => {
  const remixServer = <RemixServer context={remixContext} url={request.url} />;
  return remixHandleRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixServer
  );
};

export default handleRequest;
