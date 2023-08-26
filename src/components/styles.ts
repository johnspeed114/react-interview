import { SxProps, Theme } from '@mui/material';

export const styles: Record<string, SxProps<Theme>> = {
  card: {
    background: '#ac6c6c',
    display: 'flex',
    cursor: 'pointer',
    justifyContent: 'center',
  },
  cardActionArea: {
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
    },
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 18,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  centeredText: {
    textAlign: 'center',
  },
};
