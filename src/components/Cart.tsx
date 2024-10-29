import { useCartStore } from '../state/useCartStore';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  IconButton,
  Stack,
} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Cart = () => {
  const { items, removeItem, increaseQuantity, decreaseQuantity, clearCart } =
    useCartStore();
  console.log(items);

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Box display="flex" justifyContent="center" p={2}>
      <Box sx={{ maxWidth: 600, width: '100%' }}>
        <Typography variant="h4" gutterBottom>
          Warenkorb
        </Typography>
        {items.length === 0 ? (
          <Typography variant="body1">Ihr Warenkorb ist leer.</Typography>
        ) : (
          <Stack spacing={2}>
            {items.map((item) => (
              <Card key={item.id}>
                <CardContent>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography>
                      ${(item.price * item.quantity).toFixed(2)}
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <IconButton onClick={() => decreaseQuantity(item.id)}>
                      <RemoveIcon />
                    </IconButton>
                    <Typography>{item.quantity}</Typography>
                    <IconButton onClick={() => increaseQuantity(item.id)}>
                      <AddIcon />
                    </IconButton>
                    <Button
                      color="secondary"
                      onClick={() => removeItem(item.id)}
                    >
                      Entfernen
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            ))}
            <Typography variant="h5">Gesamt: ${total.toFixed(2)}</Typography>
            <Button variant="contained" color="primary" onClick={clearCart}>
              Warenkorb leeren
            </Button>
          </Stack>
        )}
      </Box>
    </Box>
  );
};

export default Cart;
