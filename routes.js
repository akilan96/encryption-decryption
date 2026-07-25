import express from "express"
import {  getDecryptedMachines, getEncryptedMachines, SaveDecryptedMachineDetails, SaveEncryptedMachineDetails } from "./controller.js";

export const postRouter = express.Router();

postRouter.post("/encrypt-post-details",SaveEncryptedMachineDetails)
postRouter.post("/decrypt-post-details",SaveDecryptedMachineDetails)
postRouter.get("/encrypted-machines",getEncryptedMachines)
postRouter.get("/decrypted-machines",getDecryptedMachines)