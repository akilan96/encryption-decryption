import mongoose from "mongoose";

const encryptedMachinesSchema = new mongoose.Schema(
  {
    machineName: {
      required: true,
      type: String,
    },
    machineManufacturer: {
      required: true,
      type: String,
    },
    machineModel: {
      required: true,
      type: String,
    },
    processor: {
      required: true,
      type: String,
    },
    osName: {
      required: true,
      type: String,
    },
    osVersion: {
      required: true,
      type: String,
    },
    ram: {
      required: true,
      type: String,
    },
    rom: {
      required: true,
      type: String,
    },
    cipher: {
      type: String,
    },
    status: {
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
     AvailedStorage: {
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
    message: {
      required: true,
      type: String,
    },
  },
  { timestamps: true },
);

export const encryptedMachinesModel = mongoose.model("encrypt_machine", encryptedMachinesSchema);
