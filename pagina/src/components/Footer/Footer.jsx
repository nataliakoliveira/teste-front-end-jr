import React from "react";
import './Footer.css';
import {FaFacebookF, FaInstagram, FaYoutube} from 'react-icons/fa'
import Alelo from '../../imgs/iconPaymentForm/alelo.png'
import American from '../../imgs/iconPaymentForm/american.png'
import Dinners from '../../imgs/iconPaymentForm/dinnersClub.png'
import Elo from '../../imgs/iconPaymentForm/elo.png'
import Ifood from '../../imgs/iconPaymentForm/ifood.png'
import Mastercard from '../../imgs/iconPaymentForm/mastercard.png'
import Pix from '../../imgs/iconPaymentForm/pix.png'
import Sodexo from '../../imgs/iconPaymentForm/sodexo.png'
import Ticket from '../../imgs/iconPaymentForm/ticket.png'
import Visa from '../../imgs/iconPaymentForm/visa.png'

import PageFooter from "./PageFooter/PageFooter";


const Footer = () =>{
    return(
        <><footer>
            <div class="container-footer">
                <div class="row-footer">

                    <div className="footer-col-about">
                        <h4>Sobre Nós</h4>
                        <ul>
                            <li> Conheça</li>
                            <li> Como Comprar</li>
                            <li> Indicação e Desconto</li>
                        </ul>
                        <div className="social-media">
                            <p> <FaFacebookF className="footer-icon" size={20} /></p>
                            <p><FaInstagram className="footer-icon" size={20} /></p>
                            <p> <FaYoutube className="footer-icon" size={20} /></p>
                        </div>
                    </div>

                    <div className="footer-col-info">
                        <h4>Informações Úteis</h4>
                        <ul>
                            <li>Fale Conosco</li>
                            <li>Dúvidas</li>
                            <li>Prazos de Entrega</li>
                            <li>Formas de Pagamento</li>
                            <li>Política de Privacidade</li>
                            <li>Trocas e Devoluções</li>
                        </ul>
                    </div>

                    <div className="footer-col-payment">
                        <h4>Formas de Pagamento</h4>
                        <ul>
                            <li>
                                <div className="payment-options">
                                    <div className="payment-column">
                                        <img src={Visa} alt="visa" />
                                    </div>
                                    <div className="payment-column">
                                        <img src={Elo} alt="elo" />
                                    </div>
                                    <div className="payment-column">
                                        <img src={Alelo} alt="alelo" />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="payment-options">
                                    <div className="payment-column">
                                        <img src={Dinners} alt="dinners" />
                                    </div>
                                    <div className="payment-column">
                                        <img src={Ifood} alt="ifood" />
                                    </div>
                                    <div className="payment-column">
                                        <img src={Mastercard} alt="mastercard" />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="payment-options">
                                    <div className="payment-column">
                                        <img src={Pix} alt="pix" />
                                    </div>
                                    <div className="payment-column">
                                        <img src={American} alt="american" />
                                    </div>
                                    <div className="payment-column">
                                        <img src={Ticket} alt="ticket" />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="payment-options">
                                    <div className="payment-column">
                                        <img src={Sodexo} alt="sodexo" />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-col-newsletter">
                        <h4>Cadastre-se e Receba Nossas <span>Novidades e Promoções</span></h4>
                        <p>Exceptur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
                        <div className="subscribe-form">
                            <form>
                                <input type="text" placeholder="Seu E-mail" />
                                <button className="form-btn" value={SubmitEvent}>OK</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </footer><PageFooter /></>
    )
}

export default Footer;