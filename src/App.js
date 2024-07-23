import './App.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
function App() {
  return (
    <div className="App">
      <div className="header_logo" >
        <StorefrontIcon className='header_logoImage' fontSize='large' />

      </div>

      <div className='header_search'>

      </div>

      <div className='header_nav'>
        <div className='nav_item'>
          <span className='nav_itemLineOne'>Hello Guest</span>
          <span className='nav_itemLinetwp'>Sign In</span>

        </div>
        <div className='nav_item'>
        <span className='nav_itemLineOne'>Your</span>
          <span className='nav_itemLinetwo'>Shop</span>

        </div>
        <div className='nav_item'>
        <span className='nav_itemLineOne'>Basket</span>
          <ShoppingBasketIcon fontSize="large"/>
          <span className='nav_itemLinetwo'>0</span>

        </div>

      </div>


    </div>
  );
}

export default App;
