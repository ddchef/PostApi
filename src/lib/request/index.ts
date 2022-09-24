import { RequestOptions } from "@/type";

import {GET, POST} from "./native";

export function request(config:RequestOptions){
  if(config.method === 'GET') return GET(config)
  if(config.method === 'POST') return POST(config)
}