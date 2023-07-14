import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-role.model";
import {User} from "../users/users.model";

interface PostCreationAttrs {
  title: string
  content: string
  userId: number
  image: string
}

@Table({tableName: 'Post'})
export class Post extends Model<Post, PostCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Unique identifier' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number

  @ApiProperty({ example: 'title', description: 'Post title' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  title: string

  @ApiProperty({ example: 'text', description: 'Post content' })
  @Column({ type: DataType.STRING, allowNull: false })
  content: string

  @ApiProperty({ example: 'some image src', description: 'Post image' })
  @Column({ type: DataType.STRING })
  image: string

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number

  @BelongsTo(() => User)
  author: User
}
