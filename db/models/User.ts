import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import ActorsMovie from './ActorsMovie';
import Movie from './Movie';

@Table({
  underscored: true,
  timestamps: false,
  comment: 'Table defining users',
})
export default class User extends Model {
  @Column({ type: DataType.STRING })
  firstName?: string;

  @Column({ type: DataType.STRING })
  lastName?: string;

  @BelongsToMany(() => Movie, () => ActorsMovie)
  movies!: Movie[];
}
