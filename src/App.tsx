import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeConfig } from "flowbite-react";
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './redux/store';
import Rutas from './routes/Rutas';

const client = new QueryClient()

function App() {

  return (
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <ToastContainer />
        <ThemeConfig dark={false} />
        <Rutas />
      </QueryClientProvider>
    </Provider>
  )
}

export default App
