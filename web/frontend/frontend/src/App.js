import './App.css';

import whatsapp from '../src/assets/icons/whatsapp.svg';
import telegram from '../src/assets/icons/telegram.svg';
import gmail from '../src/assets/icons/gmail.svg';
import instagram from '../src/assets/icons/instagram.svg';

import logoImage from '../src/assets/images/logo.png';

import seteDias from '../src/assets/images/portfolio/7dias.png';
import quinzeDias from '../src/assets/images/portfolio/15dias.png';
import trintaDias from '../src/assets/images/portfolio/30dias.png';
import tresMeses from '../src/assets/images/portfolio/3meses.png';
import seisMeses from '../src/assets/images/portfolio/6meses.png';
import umAno from '../src/assets/images/portfolio/1ano.png';


function App() {
    function buttonAssinarClick(e) {
        
        
    };


  return (
    <div>  
        <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">Nanico Apostas</a>
                    <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">Planos</a></li>
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">Assinar</a></li>
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">Contato</a></li>
                        </ul>
                    </div>
                </div>
        </nav>
    
        <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                {/* <!-- Masthead Avatar Image--> */}
                <img className="masthead-avatar mb-5" src={logoImage} alt="" />
                {/* <!-- Masthead Heading--> */}
                <h1 className="masthead-heading text-uppercase mb-0">Nanico Apostas</h1>
                {/* <!-- Icon Divider--> */}
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* <!-- Masthead Subheading--> */}
                <p className="masthead-subheading font-weight-light mb-0">Entre para o grupo dos vencedores!⚽💪</p>
            </div>
        </header>
        {/* <!-- Portfolio Section--> */}
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                {/* <!-- Portfolio Section Heading--> */}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Planos</h2>
                {/* <!-- Icon Divider--> */}
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* <!-- Portfolio Grid Items--> */}
                <div className="row justify-content-center">
                    {/* <!-- Portfolio Item 1--> */}
                    <div className="col-md-6 col-lg-4 mb-5" title='7 Dias de Plano Premium | Entre para o grupo dos vencedores! ⚽💪'>
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={seteDias} alt="" />
                        </div>
                    </div>
                    {/* <!-- Portfolio Item 2--> */}
                    <div className="col-md-6 col-lg-4 mb-5" title='15 Dias de Plano Premium | Entre para o grupo dos vencedores! ⚽💪'>
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={quinzeDias} alt="" />
                        </div>
                    </div>
                    {/* <!-- Portfolio Item 3--> */}
                    <div className="col-md-6 col-lg-4 mb-5" title='30 Dias de Plano Premium | Entre para o grupo dos vencedores! ⚽💪'>
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={trintaDias} alt="" />
                        </div>
                    </div>
                    {/* <!-- Portfolio Item 4--> */}
                    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" title='3 Meses de Plano Premium | Entre para o grupo dos vencedores! ⚽💪'>
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={tresMeses} alt="" />
                        </div>
                    </div>
                    {/* <!-- Portfolio Item 5--> */}
                    <div className="col-md-6 col-lg-4 mb-5 mb-md-0" title='6 Meses de Plano Premium | Entre para o grupo dos vencedores! ⚽💪'>
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={seisMeses} alt="" />
                        </div>
                    </div>
                    {/* <!-- Portfolio Item 6--> */}
                    <div className="col-md-6 col-lg-4" title='1 Ano de Plano Premium | Entre para o grupo dos vencedores! ⚽💪'>
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal6">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={umAno} alt=""  />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- About Section--> */}
        <section className="page-section bg-primary text-white mb-0" id='about'>
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-white">Assinar Plano Premium</h2>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-line-icon"></div>
                    <div className="divider-custom-line"></div>
                </div>
                <h3 className="text-left text-uppercase text-white">Formulário de assinatura</h3>
                <div className="text-center mt-4">
                    <div className="row">
                        <form>
                            <div className="form-group">
                                <label for="exampleImputEmail1">Endereço de email</label>
                                <input name='email' type="email" id='exampleInputEmail' className="form-control" aria-describedby="emailHelp" placeholder="Seu email"/>
                                <small id="emailHelp" className="form-text text-muted">Nunca vamos compartilhar seu email, com ninguém.</small>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Nome Completo</label>
                                <input id="name" type="text" placeholder="Name" className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Telefone</label>
                                <input id="phone" type="tel" placeholder="Número de telefone" className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Senha</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Senha"></input>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Escolha o seu Plano</label>
                                <select name="planos" id="planos" className='form-control'>
                                    <option value="">Selecione</option>
                                    <option value="7dias">7 Dias - R$15,00</option>
                                    <option value="15dias">15 Dias - R$30,00</option>
                                    <option value="30dias">30 Dias - R$60,00</option>
                                    <option value="3meses">3 Meses - R$150,00 🔥</option>
                                    <option value="6meses">6 Meses - R$300,00 🔥</option>
                                    <option value="1ano">1 Ano - R$600,00 🔥</option>
                                </select>
                            </div>
                            <div className="form-group from-check">
                                <div className="col-lg-12">
                                    <button type='submit' className='btn btn-info' >Enviar</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Contact Section--> */}
        <section className="page-section" id="contact">
            <div className="container">
                {/* <!-- Contact Section Heading--> */}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Envie sua dúvida</h2>
                {/* <!-- Icon Divider--> */}
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* <!-- Contact Section Form--> */}
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        {/* <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.--> */}
                        <form id="contactForm" name="sentMessage" novalidate="novalidate">
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Name</label>
                                    <input className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Email Address</label>
                                    <input className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Phone Number</label>
                                    <input className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Message</label>
                                    <textarea className="form-control" id="message" rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message."></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <br />
                            <div id="success"></div>
                            <div className="form-group"><button className="btn btn-primary btn-xl" id="sendMessageButton" type="submit">Send</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Footer--> */}
        <footer className="footer text-center">
            <div className="container">
                <div className="row">
                    {/* <!-- Footer Location--> */}
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">
                            Alagoas
                            <br />
                            Brazil, South America
                        </p>
                    </div>
                    {/* <!-- Footer Social Icons--> */}
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Encontre-nos por aí ...</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!" title='WhatsApp'><img className="fab fa-fw fa-facebook-f" src={whatsapp}/></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!" title='Telegram'><img className="fab fa-fw fa-twitter" src={telegram}/></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!" title='Instagram'><img className="fab fa-fw fa-linkedin-in" src={instagram} /></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!" title='Gmail'><img className="fab fa-fw fa-dribbble" src={gmail} /></a>
                    </div>
                    {/* <!-- Footer About Text--> */}
                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">Nosso Compromisso é</h4>
                        <p className="lead mb-0">
                            oferecer todo o suporte necessário para você se tornar um apostador profissional.
                            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">Entre para o grupo dos vencedores!⚽💪</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        {/* <!-- Copyright Section--> */}
        <div className="copyright py-4 text-center text-white">
            <div className="container"><small>Copyright © Dicas 365 | Nanico Apostas 2020</small></div>
        </div>
        {/* <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes)--> */}
        <div className="scroll-to-top d-lg-none position-fixed">
            <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i className="fa fa-chevron-up"></i></a>
        </div>
        {/* <!-- Portfolio Modals--> */}
        {/* <!-- Portfolio Modal 1--> */}
        <div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i className="fas fa-times"></i></span>
                    </button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {/* <!-- Portfolio Modal - Title--> */}
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal1Label">7 Dias Premium</h2>
                                    {/* <!-- Icon Divider--> */}
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {/* <!-- Portfolio Modal - Image--> */}
                                    <img className="img-fluid rounded mb-5" src="assets/img/portfolio/cabin.png" alt="" />
                                    {/* <!-- Portfolio Modal - Text--> */}
                                    <p className="mb-5">Assinando o Plano <strong>7 DIAS PREMIUM</strong>, você terá acesso a todos os nossos grupos: Grupo Vip | Nanico Apostas ✔ + Comunidade | Nanico Apostas ✔. Onde você irá receber todas as nossas tips, previsões e entradas ao vivo. <strong>Tudo isso por apenas R$15,00 semanais.<br/>Entre para o grupo dos vencedores!⚽💪</strong></p>
                                    <li className="btn btn-primary"><a id='btn-assinar' className="fas fa-times fa-fw" href="#about" onClick={buttonAssinarClick}>Quero assinar esse plano!</a></li>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Portfolio Modal 2--> */}
        <div className="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-labelledby="portfolioModal2Label" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i className="fas fa-times"></i></span>
                    </button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {/* <!-- Portfolio Modal - Title--> */}
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal2Label">15 Dias Premium</h2>
                                    {/* <!-- Icon Divider--> */}
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {/* <!-- Portfolio Modal - Image--> */}
                                    <img className="img-fluid rounded mb-5" src="assets/img/portfolio/cake.png" alt="" />
                                    {/* <!-- Portfolio Modal - Text--> */}
                                    <p className="mb-5">Assinando o Plano <strong>15 DIAS PREMIUM</strong>, você terá acesso a todos os nossos grupos: Grupo Vip | Nanico Apostas ✔ + Comunidade | Nanico Apostas ✔. Onde você irá receber todas as nossas tips, previsões e entradas ao vivo. <strong>Tudo isso por apenas R$30,00 quinzenais.<br/>Entre para o grupo dos vencedores!⚽💪</strong></p>
                                    <li className="btn btn-primary"><a id='btn-assinar' className="fas fa-times fa-fw" href="#about">Quero assinar esse plano!</a></li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Portfolio Modal 3--> */}
        <div className="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-labelledby="portfolioModal3Label" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i className="fas fa-times"></i></span>
                    </button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {/* <!-- Portfolio Modal - Title--> */}
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal3Label">30 Dias (1 mês) Premium</h2>
                                    {/* <!-- Icon Divider--> */}
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {/* <!-- Portfolio Modal - Image--> */}
                                    <img className="img-fluid rounded mb-5" src="assets/img/portfolio/circus.png" alt="" />
                                    {/* <!-- Portfolio Modal - Text--> */}
                                    <p className="mb-5">Assinando o Plano <strong>30 DIAS PREMIUM</strong>, você terá acesso a todos os nossos grupos: Grupo Vip | Nanico Apostas ✔ + Comunidade | Nanico Apostas ✔. Onde você irá receber todas as nossas tips, previsões e entradas ao vivo. <strong>Tudo isso por apenas R$60,00 mensais.<br/>Entre para o grupo dos vencedores!⚽💪</strong></p>
                                    <li className="btn btn-primary"><a id='btn-assinar' className="fas fa-times fa-fw" href="#about">Quero assinar esse plano!</a></li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Portfolio Modal 4--> */}
        <div className="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-labelledby="portfolioModal4Label" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i className="fas fa-times"></i></span>
                    </button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {/* <!-- Portfolio Modal - Title--> */}
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal4Label">3 Meses Premium</h2>
                                    {/* <!-- Icon Divider--> */}
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {/* <!-- Portfolio Modal - Image--> */}
                                    <img className="img-fluid rounded mb-5" src="assets/img/portfolio/game.png" alt="" />
                                    {/* <!-- Portfolio Modal - Text--> */}
                                    <p className="mb-5">Assinando o Plano <strong>3 MESES PREMIUM</strong>, você terá acesso a todos os nossos grupos: Grupo Vip | Nanico Apostas ✔ + Comunidade | Nanico Apostas ✔. Onde você irá receber todas as nossas tips, previsões e entradas ao vivo. <strong>Tudo isso por um preço promocional de R$150,00 trimestrais.<br/>Entre para o grupo dos vencedores!⚽💪</strong></p>
                                    <li className="btn btn-primary"><a id='btn-assinar' className="fas fa-times fa-fw" href="#about">Quero assinar esse plano!</a></li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Portfolio Modal 5--> */}
        <div className="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-labelledby="portfolioModal5Label" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i className="fas fa-times"></i></span>
                    </button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {/* <!-- Portfolio Modal - Title--> */}
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal5Label">6 Meses Premium</h2>
                                    {/* <!-- Icon Divider--> */}
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {/* <!-- Portfolio Modal - Image--> */}
                                    <img className="img-fluid rounded mb-5" src="assets/img/portfolio/safe.png" alt="" />
                                    {/* <!-- Portfolio Modal - Text--> */}
                                    <p className="mb-5">Assinando o Plano <strong>6 MESES PREMIUM</strong>, você terá acesso a todos os nossos grupos: Grupo Vip | Nanico Apostas ✔ + Comunidade | Nanico Apostas ✔. Onde você irá receber todas as nossas tips, previsões e entradas ao vivo. <strong>Tudo isso por um preço promocional de R$300,00 semestrais.<br/>Entre para o grupo dos vencedores!⚽💪</strong></p>
                                    <li className="btn btn-primary"><a id='btn-assinar' className="fas fa-times fa-fw" href="#about">Quero assinar esse plano!</a></li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Portfolio Modal 6--> */}
        <div className="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-labelledby="portfolioModal6Label" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i className="fas fa-times"></i></span>
                    </button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {/* <!-- Portfolio Modal - Title--> */}
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal6Label">1 Ano Premium</h2>
                                    {/* <!-- Icon Divider--> */}
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {/* <!-- Portfolio Modal - Image--> */}
                                    <img className="img-fluid rounded mb-5" src="assets/img/portfolio/submarine.png" alt="" />
                                    {/* <!-- Portfolio Modal - Text--> */}
                                    <p className="mb-5">Assinando o Plano <strong>1 ANO PREMIUM</strong>, você terá acesso a todos os nossos grupos: Grupo Vip | Nanico Apostas ✔ + Comunidade | Nanico Apostas ✔. Onde você irá receber todas as nossas tips, previsões e entradas ao vivo. <strong>Tudo isso por um preço promocional de R$600,00 anuais.<br/>Entre para o grupo dos vencedores!⚽💪</strong></p>
                                    <li className="btn btn-primary"><a id='btn-assinar' className="fas fa-times fa-fw" href="#about">Quero assinar esse plano!</a></li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
