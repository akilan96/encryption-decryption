import api from "./axios";

export const getEncryptedMachines = async (page = 1,search="") => {
  try {
    const response = await api.get("/encrypted-machines",{
      params:{page,search}
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const getDecryptedMachines = async (page = 1,search="") =>{
try {
    const response = await api.get("/decrypted-machines",{
      params:{page,search}
    });
    return response.data;
  } catch (error) {
    throw error;
  }

}