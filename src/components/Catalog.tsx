import { useProductsQuery } from '../hooks/useProductsQuery';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  CircularProgress,
  CardHeader,
  Avatar,
  CardActions,
  CardMedia,
  IconButton,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Product } from '../interfaces/product';
import { red } from '@mui/material/colors';
import { Link } from 'react-router-dom';

const Catalog = () => {
  const { data = [], isLoading, error } = useProductsQuery();

  if (isLoading) return <CircularProgress />;
  if (error) return <div>Fehler beim Laden der Produkte</div>;

  return (
    <Box display="flex" justifyContent="center" p={2}>
      <Stack spacing={2} sx={{ maxWidth: '800px', width: '100%' }}>
        {Array.isArray(data) &&
          data.map((product: Product) => (
            <Card key={product.id} sx={{ margin: '0 auto' }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="product">
                    {product.title.charAt(0)}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={product.title}
                subheader={product.category}
              />
              <CardMedia
                component="img"
                height="194"
                image={product.image}
                alt={product.description}
              />
              <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {product.description} {product.id}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <Link to={`/product/${product.id}`} className="text-orange-500">
                  Details
                </Link>
              </CardActions>
            </Card>
          ))}
      </Stack>
    </Box>
  );
};

export default Catalog;
