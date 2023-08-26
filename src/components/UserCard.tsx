import { useState } from 'react';
import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Avatar,
  Grid,
  Modal,
  Box,
  Button,
} from '@mui/material';
import { styles } from './styles';
import { User } from '../types';

type UserCardProps = {
  user: User;
};

function UserCard({ user }: UserCardProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formattedDoB = new Date(user.dob.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card sx={styles.card}>
        <CardActionArea onClick={handleOpen} sx={styles.cardActionArea}>
          <CardContent sx={styles.cardContent}>
            <Avatar
              component='div'
              src={user.picture.large}
              alt={user.name.first}
              style={{ width: 50, height: 50 }}
            />
            <Typography variant='h6'>{`${user.name.first} ${user.name.last}`}</Typography>
            <Typography variant='body2'>{formattedDoB}</Typography>
            <Typography variant='body2'>{user.gender}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {/* FYI Didn't have time refactor this modal into itso own component. Wanted to follow Single Responsibilty Principle */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={styles.modalContent}>
          <Avatar
            component='div'
            src={user.picture.large}
            alt={user.name.first}
            style={{ width: 60, height: 60 }}
          />
          <Typography variant='h5' component='h2'>
            {`${user.name.title} ${user.name.first} ${user.name.last}`}
          </Typography>
          <Typography sx={styles.centeredText}>
            <b>Gender:</b> {user.gender}
          </Typography>
          <Typography sx={styles.centeredText}>
            <b>Email:</b> {user.email}
          </Typography>
          <Typography sx={styles.centeredText}>
            <b>Date of Birth:</b> {user.dob.date}
          </Typography>
          <Typography sx={styles.centeredText}>
            <b>Age:</b> {user.dob.age}
          </Typography>
          <Typography sx={styles.centeredText}>
            <b>Phone:</b> {user.phone}
          </Typography>
          <Typography sx={styles.centeredText}>
            <b>Cell:</b> {user.cell}
          </Typography>
          <Typography sx={styles.centeredText}>
            <b>Nationality:</b> {user.nat}
          </Typography>
          <Typography sx={styles.centeredText}>
            <b>Address:</b>{' '}
            {`${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}`}
          </Typography>
          <Typography sx={styles.centeredText}>
            <b>Coordinates:</b> Latitude: {user.location.coordinates.latitude},
            Longitude: {user.location.coordinates.longitude}
          </Typography>
          <Typography sx={styles.centeredText}>
            <b>Timezone:</b> {user.location.timezone.description}
          </Typography>
          <Typography sx={styles.centeredText}>
            <b>Username:</b> {user.login.username}
          </Typography>
          <Typography sx={styles.centeredText}>
            <b>Password:</b> {user.login.password}
          </Typography>
          <Typography sx={styles.centeredText}>
            <b>UUID:</b> {user.login.uuid}
          </Typography>
          <Typography sx={styles.centeredText}>
            <b>Registered on:</b> {user.registered.date}
          </Typography>
          <Typography sx={styles.centeredText}>
            <b>ID:</b> {user.id.name} - {user.id.value}
          </Typography>
          <Button onClick={handleClose} sx={{ mt: 2 }} variant='contained'>
            Close
          </Button>
        </Box>
      </Modal>
    </Grid>
  );
}

export default UserCard;
