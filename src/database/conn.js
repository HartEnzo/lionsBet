import mongoose from "mongoose";

const main = async () => {
  try {
    await mongoose.connect(mongoDB + database);
    console.log("Conectado com sucesso");
  } catch (error) {
    console.log(error);
  }
};

main();

export default mongoose;