import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {ChakraProvider} from "@chakra-ui/react";
import theme from "./theme/theme.ts";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./app/store.ts";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Provider store={store}>
		<ChakraProvider theme={theme}>
			<BrowserRouter>
				<App/>
			</BrowserRouter>
		</ChakraProvider>
	</Provider>
)
