import { connect } from "mongoose";

const connection =  async() => {

  try{
    await connect("mongodb://localhost:27017/bd_");
    console.log("Conectado correctamente a la base de datos");
  } catch (error) {
    console.log(error);
    throw new error("No se ha podido conectar a la base de datos");
  }
}

export default connection;