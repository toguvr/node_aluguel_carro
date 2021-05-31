import fs from "fs";

export const deleteFile = async (filnename: string) => {
  try {
    await fs.promises.stat(filnename);
  } catch (err) {
    return;
  }

  await fs.promises.unlink(filnename);
};
