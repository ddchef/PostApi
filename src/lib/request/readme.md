# request

## requestOptions

```ts
type Method = "Get" | "Post" | "Put" | "Patch" | "Delete" | "Head";

interface RequestOptions {
  url: string;
  method: Method;
  headers?: Record<string, string>[];
  content_type?: ContentType;
  basic_auth?: [string, string];
  bearer_auth?: string;
  query?: Record<string, string>[];
  timeout?: number;
  body?: string;
  json?: any;
  form?: Record<string, string>[];
}
```

## response

```ts
type ContentType =
  | "application/json"
  | "multipart/form-data"
  | "application/x-www-form-urlencoded"
  | "text/html"
  | "text/plain"
  | "application/xml";
interface Response {
  headers: Record<string, string>;
  status: string;
  content_type: ContentType;
  body: string;
  interval: number;
  size: number;
}
```
