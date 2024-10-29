import { useParams } from 'react-router-dom';
import { useProductQuery } from '../hooks/useProductQuery';
import { useCartStore } from '../state/useCartStore';
import {
  Box,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  CardMedia,
  Button,
} from '@mui/material';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading, error } = useProductQuery(id || '');
  const addItem = useCartStore((state) => state.addItem);

  if (isLoading) return <CircularProgress />;
  if (error) return <div>Fehler beim Laden des Produkts</div>;

  return (
    <Box display="flex" justifyContent="center" p={2}>
      <Card sx={{ maxWidth: 600 }}>
        <CardMedia
          component="img"
          height="400"
          image={product?.image}
          alt={product?.description}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {product?.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            {product?.category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product?.description}
          </Typography>
          <Typography variant="h6" sx={{ marginTop: 2 }}>
            ${product?.price.toFixed(2)}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
            onClick={() => product && addItem(product)}
          >
            Zum Warenkorb hinzufügen
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductDetail;
