import axios from "axios";

const BASE_URL = "http://127.0.0.1:5000";

export async function sendMessage(message) {
  const { data } = await axios.post(`${BASE_URL}/chat`, { message });
  return data;
}

export async function health() {
  try {
    const { data } = await axios.get(`${BASE_URL}/health`);
    return data?.ok === true;
  } catch {
    return false;
  }
}
