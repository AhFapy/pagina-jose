import React from 'react'
import { useState, useEffect, useRef } from 'react'
import BodyCards from './BodyCards'
import CardBtn from '../Small Components/CardBtn'
import PasosBtn from '../Small Components/PasosBtn'
import TrabajoComponent from './TrabajoComponent'
import WidgetContainer from '../Small Components/WidgetContainer'
import FaqComponent from '../Small Components/FaqComponent'
import Calendly from './Calendly'

const MainBodyComponent = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleMouseEnter = () => {
        setIsVisible(true);
      };
    const handleMouseLeave = () => {
        setIsVisible(false);
    };

    const handleButtonClick = () => {
        window.location.href = 'https://calendly.com/';
      };

      function useFadeInAnimation(targetClass) {
        const elementRef = useRef(null);
      
        useEffect(() => {
          const element = elementRef.current;
      
          if (!element) return;
      
          const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // El elemento es visible en el viewport, ejecutar la animación aquí
                entry.target.classList.add(targetClass); // Agrega la clase CSS para la animación
                observer.unobserve(entry.target); // Deja de observar el elemento
              }
            });
          });
      
          // Iniciar la observación en el elemento
          observer.observe(element);
      
          // Limpia el observador cuando el componente se desmonta
          return () => {
            observer.disconnect();
          };
        }, []);
      
        return elementRef;
      }
      
      const bodyTitleRef = useFadeInAnimation("animate");
      const bodyPRef = useFadeInAnimation("animate");
      const bodyPRef2 = useFadeInAnimation("animate");
      const cardContainerRef = useFadeInAnimation("animate");
      const monetizeContainerRef = useFadeInAnimation('animate'); 
      const pasosRef = useFadeInAnimation('animate'); 
      const trabajoRef = useFadeInAnimation('animate'); 
      const footerRef = useFadeInAnimation('animate'); 
    
    const cardImage1 = <img className='card-gif' src='/img1.gif'></img>
  return (
    <div className='body'>
        <h1 className='body-title' ref={bodyTitleRef}>¿No te lo crees?</h1>
        <p className='body-p' ref={bodyPRef}>Suena demasiado bien pero es la Realidad</p>
        <br/>
        <p className='body-p' ref={bodyPRef2}>Tú no te encargas de <u className='underline-1'>nada</u>, no pagas <u className='underline-2'>nada</u>, y puedes ganar <span className='mucho'>(mucho)</span> dinero.</p>
        <div className='card-container' ref={cardContainerRef}>
            <BodyCards text="Sin Inversion" img={cardImage1}/>
            <BodyCards text="Sin Riesgo" img={cardImage1}/>
        </div>
        <CardBtn/>
        <div className='monetize-container' ref={monetizeContainerRef}>
            <div className='monetize-img-div'>
                <img src='/foto-ig.jpg' className='monetize-img'></img>
            </div>
            <div className='monetize-text-div'>
                <p className='monetize-text'>El <u className='underline-2'>90%</u> De Los Expertos En Instagram <u className='underline-1'>No</u> Saben Cómo Monetizar Su Marca Personal</p>
            </div>
        </div>
        <div className='pasos' ref={pasosRef}>
            <div className='pasos-header'>
                <h2><b className='pasos-orange'>4</b> SIMPLES PASOS.</h2>
                <br/>
                <h2>EN 28 DÍAS</h2>
            </div>
            <div className='pasos-text'><p>Descubre el poder de <b>transformar tus historias de Instagram en tu fuente de ingresos principal.</b></p>
            </div>
            <PasosBtn/>
        </div>
        <div className='trabajo-div' ref={trabajoRef}>
            <TrabajoComponent/>
        </div>
        {<p className={isVisible ? 'visible' : 'hidden'}>EL 5% DE LOS BENEFICIOS IRÁN DESTINADOS SIEMPRE A UNA ORGANIZACIÓN BENÉFICA</p>}
        <div className='faq-container'>
        <h1 className='faq-title'>Preguntas Frecuentes</h1>
        <FaqComponent pregunta="¿Cómo Me Cobras?" respuesta="El precio por todo el servicio es de 0€. No me tienes que pagar nada durante todo el proceso. Una vez hecho el lanzamiento, los beneficios se reparten al 50%."/>
        <FaqComponent pregunta="¿Es Necesario Hacerlo Presencial?" respuesta="No es necesario, todo es de forma digital. De todas formas, si los horarios y fechas cuadran, a mi me gusta conocernos en persona."/>
        <FaqComponent pregunta="¿Qué Riesgo Real Tiene?" respuesta="Esto es lo mejor de todo. NO HAY RIESGO NINGUNO. Lo peor que puede pasar (de momento nunca) es que no consigamos vender nada y aumentes el engagement, obtengas un montón de información sobre tu audiencia y aprendas unas cuantas estrategias para hacer crecer tu comunidad, de venta, de marketing…"/>
        <FaqComponent pregunta="¿Cuánto Tiempo Tengo Que Dedicarle?" respuesta="Lo único que tienes que hacer por tu parte son las stories que yo te pida y poco más. Quizás en total unas 6-10 h durante los 28 días. (2-3h/semana)"/>
        <FaqComponent pregunta="¿Es Adecuado Para Mi?" respuesta="Si eres un experto en Instagram en cualquier nicho, con una media de >500 views en los stories, podemos empezar a trabajar juntos."/>
        <FaqComponent pregunta="¿Necesito Tener Un Producto/Servicio?" respuesta="¡No! Si aún no tienes ningún producto o servicio en mente no te preocupes, trabajaremos juntos para identificar qué conocimiento puedes ofrecerle a tu audiencia. Si tienes más de 500 views en stories de Instagram sobre un nicho específico, ¡déjame decirte que ya puedes monetizar tu audiencia y empezar a ganar muchos muchos Euros extra!
"/>
        <FaqComponent pregunta="¿Qué Garantía Me Das?" respuesta="Como no me pagas nada por adelantado, no tienes riesgo ninguno. Mi garantía es que aunque no vendas nada siempre saldrías ganando porque no pierdes ni un céntimo, aumentarás tu engagement, ganas experiencia y mucha información de valor que te ayudará a crecer tu audiencia, tu instragram, etc."/>

        </div>
        <Calendly func={useFadeInAnimation}/>
        <div ref={footerRef} className='pre-footer'>
            <div className='pre-footer-block'>
                <h2>EMPIEZA A SACARLE PROVECHO A TU AUDIENCIA</h2>
                <button onClick={handleButtonClick} className='pre-footer-btn'>Agendar Llamada</button>
            </div>
        </div>
    </div>
  )
}

export default MainBodyComponent
