import { Model, DataTypes } from "sequelize";
import { sequelize } from "../configs/database.js";
import { v6 as uuidv6 } from "uuid";

class UcapanModels extends Model {}

UcapanModels.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: uuidv6,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(60),
      allowNull: true,
    },
    coupleName: {
      type: DataTypes.STRING(60),
      allowNull: true,
      defaultValue: "Partner",
    },
    attedance: {
      type: DataTypes.ENUM(["Datang", "Berhalangan"]),
      allowNull: false,
      defaultValue: "Datang",
    },
    chat: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "ucapan",
  }
);

export default UcapanModels;
