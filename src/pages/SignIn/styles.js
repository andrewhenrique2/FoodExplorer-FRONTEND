        import styled from "styled-components";

        export const Container = styled.div`
            display: flex;
            flex-direction: column;
            
            max-width: 110.6rem;
            height: 100vh;
            
            margin: auto;
            padding: 14.2rem 4rem;
            
            justify-content: space-between;
            align-items: center;

            @media only screen and (min-width: 768px) {
                flex-direction: row;
            }

            @keyframes blink {
                0%{
                    opacity: 0.1;
                    transform: scale(0.9);
                }
                100% {
                    opacity: 0.6;
                    transform: scale(1);
                }
            }

            @keyframes blink {
                0%{
                    opacity: 0;
                    transform: scale(0.9);
                }
                100% {
                    opacity: 1;
                    transform: scale(1);
                }
}

         
        `;
        

        export const Form = styled.form`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: left;
            
            max-width: 47.6rem;
            width: 100%;
            height: 54rem;
            
            padding: 6.4rem;
            border-radius: 1.6rem;
            animation: blink 0.8s;

            background-color: ${({ theme }) => theme.COLORS.BRACKGROUND_HEADER};


            > h2 {
                font-family: 'Poppins', sans-serif;
                font-size: 3.2rem;
                font-weight: 500;
                line-height: 6.8rem;
                text-align: center;
                
                margin-bottom: 3.2rem;
            }

            > a {
                margin-top: 3.2rem;
                
                text-align: center;
                color: #fff;
            }

            > .inputs {
                margin-bottom: 3.2rem;
              
            }
            

            > .inputs p {
                font-size: 1.6rem;
                margin-bottom: 0.8rem;
            }
            
        `;

        export const Logo = styled.div`
            display: flex;
            align-items: center;
            margin-bottom: 4rem;

            h1 {
                font-size: clamp(3rem, 3rem + 1.5vw, 4.248rem);
                white-space: nowrap;
            }
            
            .logo {
                display: flex;
                gap: 1.9rem;
            }

            svg {
                height: 5rem;
                width: 5rem;
            }
        `;
        
