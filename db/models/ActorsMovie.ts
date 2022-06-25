import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import Movie from './Movie';
import User from './User';

@Table({
  underscored: true,
  timestamps: false,
  comment: 'Table defining users',
})
export default class ActorsMovie extends Model {
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  actorId!: number;

  @ForeignKey(() => Movie)
  @Column({ type: DataType.INTEGER })
  movieId!: number;
}
