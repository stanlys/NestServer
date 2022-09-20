import { Model, Column, DataType, Table } from "sequelize-typescript";

interface UserCreatorAttrs {
  id: number;
  email: string;
  password: string;
  userName: string;
  banned: boolean;
  banReason: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreatorAttrs> {
  @Column({type:DataType.INTEGER, unique:true, autoIncrement: true, primaryKey: true})
  id: Number;
  @Column({type:DataType.STRING, unique:true, allowNull:false})
  email: string;
  @Column({type:DataType.STRING,  allowNull:false})
  password: string;
  @Column({type:DataType.STRING, unique:true, allowNull:false})
  userName: string;
  @Column({type:DataType.BOOLEAN, allowNull:false, defaultValue: false})
  banned:boolean;
  @Column({type:DataType.STRING})
  banReason: string;

}