import axios from "axios";

export const server = "https://server-llms-app.cyclic.cloud";

const api = axios.create({
  baseURL: server,
});

export const getTranscript = async () => {
  const response = await api.get("/api/transcript");
  return response;
};

export const createNewTranscript = async (name: string) => {
  try {
    const response = await api.post("/api/new-transcript", { name });
    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export type TSaveTranscript = {
  id: string;
  content: string;
};
export const savedTranscript = async ({ id, content }: TSaveTranscript) => {
  try {
    const response = await api.post("/api/saved-transcript", { id, content });
    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
