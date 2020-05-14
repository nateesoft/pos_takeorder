import fetchWithTimeout from './fetchWithTimeout';

function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }

  if (response.status === 200 && parseInt(response.headers.get('content-length'), 10) === 0) {
    return {};
  }

  return response.json();
}

export default function request(url, options, timeout) {
  return fetchWithTimeout(url, options, timeout).then(parseJSON);
}
