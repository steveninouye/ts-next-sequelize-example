import sequelize from '../sequelize';

import User from './User';
import ActorsMovie from './ActorsMovie';
import Movie from './Movie';

sequelize.addModels([User, ActorsMovie, Movie]);

export { User, ActorsMovie, Movie };
