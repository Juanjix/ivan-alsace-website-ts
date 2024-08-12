import { Resend } from "resend";

const getAPIKeys = async () => {
  try {
    // Reemplaza 're_123456789' con tu API key real.
    const resend = new Resend("re_123456789");

    // Obtener la lista de API keys
    const apiKeys = await resend.apiKeys.list();

    console.log("API Keys:", apiKeys);
    return apiKeys;
  } catch (error) {
    console.error("Error fetching API Keys:", error);
    throw error;
  }
};
