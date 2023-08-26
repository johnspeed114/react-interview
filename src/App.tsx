import { useState } from 'react';
import { Container, CircularProgress, Grid } from '@mui/material';
import { useQuery } from 'react-query';
import UserCard from './components/UserCard';
import { User } from './types';

function App() {
  const [users, setUsers] = useState<User[]>([]);

  async function fetchUsers(): Promise<User[]> {
    const res = await fetch('https://randomuser.me/api/?results=125');
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data: { results: User[] } = await res.json();

    return data.results;
  }

  const { isLoading, error } = useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: fetchUsers,
    onSuccess: (data) => {
      setUsers(data);
    },
    refetchInterval: false,
    staleTime: Infinity,
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    //FYI was planning to make a custom error component didn't have time
    return <div>Error: {error.message}</div>;
  }
  return (
    <Container maxWidth='lg' sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid container spacing={3} justifyContent='center'>
        {users.map((user) => (
          <UserCard key={user.login.uuid} user={user} />
        ))}
      </Grid>
    </Container>
  );
}

export default App;
