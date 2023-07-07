import { Container, Content, PaymentCard } from "./styles.js";
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../../styles/useDarkMode.js';
import GlobalStyles from '../../styles/global.js'
import lightTheme from '../../styles/lightTheme.js';
import darkTheme from '../../styles/theme.js';
import { Header } from "../../components/Header/index.jsx";
import { Footer } from "../../components/Footer/index.jsx";
import { api } from "../../services/api.js";
import { useAuth } from "../../hooks/auth.jsx";
import { useCart } from '../../hooks/cart.jsx';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


export function Cart() {
    const [ theme, toggleTheme ] = useDarkMode();
    const themeMode = theme === 'lightTheme' ? lightTheme : darkTheme;

    const { user } = useAuth()

    const { cart, total, handleResetCart} = useCart();

    const [loading, setLoading] = useState(false);
    
    const navigate = useNavigate();

    function handleCreatedCart(cart) {
        return {
          orderStatus: '🔴 Pendente',
          paymentMethod: pixActive ? 'pix': 'creditCard',
          totalPrice: total,
          cart: cart.map(item => (
            {
              id: item.id,
              title: item.title,
              quantity: item.quantity
            }
          ))
        }
    }

    async function handleFinishPayment(cart) {
            
        const newCart = handleCreatedCart(cart)

        if (cart.length < 1) {
            navigate(-1);
            return alert("Oops! Seu carrinho está vazio. Adicione algo antes de tentar pagar.");
        }

        setLoading(true);

        await api.post("/orders", newCart)
            .then(() => {
                disableButton();
                setTimeout(() => {    
                    alert("Pedido cadastrado com sucesso!");
                    navigate(-1);
                    handleResetCart();

                }, 7000);
            })
            .catch(error => {
                if(error.response){
                    alert(error.response.data.message);
                } else {
                    alert("Não foi possível cadastrar");
                }
            });

        setLoading(false);
    }

    const [num, setNum] = useState('');
    const [cvc, setCvc] = useState('');

    const handleNumChange = event => {
        const limit = 16;
        setNum(event.target.value.slice(0, limit));
    };

    const handleCvcChange = event => {
        const limit = 3;
        setCvc(event.target.value.slice(0, limit));
    };

    const [isPixVisible, setIsPixVisible] = useState(false);
    const [isCreditVisible, setIsCreditVisible] = useState(false);
    const [isCartVisible, setIsCartVisible] = useState(true);
    const [pixActive, setPixActive] = useState(false);
    const [creditActive, setCreditActive] = useState(false);
    const [isClockActive, setIsClockActive] = useState(false);
    const [isApprovedActive, setIsApprovedActive] = useState(false);

    const handlePaymentPix = () => {
        setIsPixVisible(true);
        setIsCreditVisible(false);
        setIsCartVisible(false);
        setPixActive(true);
        setCreditActive(false);
    };

    const handlePaymentCredit = () => {
        setIsCreditVisible(true);
        setIsPixVisible(false);
        setIsCartVisible(false);
        setCreditActive(true);
        setPixActive(false);
    };

    const [disabledButton, setDisabledButton] = useState(false);

    const disableButton = () => {
        setDisabledButton(true);

        setIsCreditVisible(false);
        setIsPixVisible(false);
        
        setIsClockActive(true);
        setIsApprovedActive(false);
        setTimeout(() => {    
            setIsClockActive(false);
            setIsApprovedActive(true);

        }, 4000);
    }
    
    return(
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
                <Container>
                    <Header />

                       
                    <Footer />
                </Container>
    </ThemeProvider>
  );
}