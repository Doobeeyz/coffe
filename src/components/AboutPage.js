import React from 'react';
import '../css/App.css'
import '../css/About.css'


class AboutPage extends React.Component {
  render() {
    return (
      <div className='about-page'>
        <div id='cnt'>
        <div className='map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.74013477933!2d76.84493581263162!3d43.23590777100468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369c12a1a951f%3A0x629e5b76dfe99bff!2z0JDRg9GN0LfQvtCy0YHQutC40Lkg0YDQsNC50L7QvSwg0JDQu9C80LDRgtGL!5e0!3m2!1sru!2skz!4v1717336017033!5m2!1sru!2skz"  width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <p>Отличный кофе и вкуснейше закуски! приходите по адресу указанному на карте</p>        
        </div>
      </div>
      </div>
    );
  }
}

export default AboutPage;