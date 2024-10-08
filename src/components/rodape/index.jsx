import './index.scss'

export default function Rodape() {
    return (
        <div className='comp-rodape'>

            <div className='rodape'>
            <div className='info'>
                <img src="/assets/images/innovTech.png" alt="" />
            </div>

            <div className='paginas'>
                <a href="#inicio">INÍCIO</a>
                <a href="#sobre">SOBRE</a>
                <a href="#vantagens">VANTAGENS</a>
                <a href="#equipe">EQUIPE</a>
            </div>

            <div className='contato'>

                <div className='telefone'>
                    <img src="/assets/images/whatsapp.png" alt="" />

                    <div className='info'>
                        <h2>TELEFONE</h2>
                        <p>(11) 12345-6789</p>
                    </div>
                </div>


                <div className='email'>
                    <img src="/assets/images/email.png" alt="" />

                    <div className='info'>
                        <h2>E-MAIL</h2>
                        <p>contato@innovtech.com.br</p>
                    </div>

                </div>

            </div>
            
        </div>


            <div className='final'>
                <hr />
                <p>&copy; 2024</p>
            </div>

        </div>
    )
}