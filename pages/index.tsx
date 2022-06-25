import type { NextPage } from 'next';
import { Movie, User } from '../db/models';
import styles from '../styles/Home.module.css';

interface Props {
  users: User[];
}

interface UserProps {
  user: User;
}

const ActorCard: NextPage<UserProps> = ({ user }) => {
  const { firstName, lastName, movies } = user;
  return (
    <div className={styles.card}>
      <h2>{`${firstName} ${lastName}`}</h2>
      <ul>
        {movies?.map((movie) => (
          <li key={movie.id}>{movie.name}</li>
        ))}
      </ul>
    </div>
  );
};

const Home: NextPage<Props> = ({ users }) => {
  console.log(users);
  return (
    <>
      <h1>{`Actor's Movies`}</h1>
      <div className={styles.container}>
        {users.map((user: User) => (
          <ActorCard key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const users = await User.findAll({ include: Movie });
  const u = users.map((user: User) => user.get({ plain: true }));
  console.log(JSON.stringify(u, null, 2));
  return {
    props: { users: u },
  };
};

export default Home;
