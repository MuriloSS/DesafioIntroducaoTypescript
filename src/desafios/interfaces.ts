type methods = 'DELETE' | 'POST' | 'GET' | 'POST';

interface LogBody{
    username?: string,
    password?: string,
    request_token?: string,
    name?: string,
    description?: string,
    language?: string,
    media_id?: string
}

interface IHttpClient{
    status?: number,
    statusText?: string
  }

interface HttpGet extends IHttpClient{
    url: string,
    method: methods,
    body?: LogBody | null | string | BodyInit

}