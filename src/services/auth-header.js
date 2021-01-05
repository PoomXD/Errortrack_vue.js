import { TokenService, TOKEN_STRING } from "./storage.service";

export default function authHeader() {
  const _accessToken = TokenService.getToken();

  if (_accessToken) {
    return { Authorization: TOKEN_STRING + " " + _accessToken };
  } else {
    return {};
  }
}
