import mongoose from "mongoose";

const decryptedMachinesSchema = new mongoose.Schema(
  {
    machineName: {
      required: true,
      type: String,
    },
    maskid: {
      required: true,
      type: String,
    },
    uuid: {
      required: true,
      type: String,
    },
    TargetDrive: {
      required: true,
      type: String,
    },
    TargetExtension: {
      required: true,
      type: String,
    },
    TotalFound: {
      required: true,
      type: String,
    },
    SuccessCount: {
      required: true,
      type: String,
    },
    SkipCount: {
      required: true,
      type: String,
    },
  },
  { timestamps: true },
);

export const decryptedMachinesModel = mongoose.model(
  "decrypt_machine",
  decryptedMachinesSchema,
);
