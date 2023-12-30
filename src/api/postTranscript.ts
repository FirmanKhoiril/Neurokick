import axios from "axios";
import { TSaveTranscript } from "../types/Types";

export const server = "https://server-llms-app.cyclic.cloud";

const api = axios.create({
  baseURL: server,
});

export const getTranscript = async () => {
  const response = await api.get("/api/transcript");
  return response;
};

export const getTranscriptById = async (id: any) => {
  try {
    const response = await api.post("/api/transcript/id", {
      id,
    });
    return response;
  } catch (error) {
    throw new Error(`${error} Error`);
  }
};

export const createNewTranscript = async (name: string) => {
  try {
    const response = await api.post("/api/new-transcript", { name });
    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const savedTranscript = async ({ id, content }: TSaveTranscript) => {
  try {
    const response = await api.post("/api/saved-transcript", { id, content });
    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
