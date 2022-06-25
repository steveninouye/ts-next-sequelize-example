import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import ActorsMovie from './ActorsMovie';
import User from './User';

@Table({
  underscored: true,
  timestamps: false,
  comment: 'Table defining movies',
})
export default class Movie extends Model {
  @Column({ type: DataType.STRING })
  name?: string;

  @BelongsToMany(() => User, () => ActorsMovie)
  actors?: User[];
}
