import React, { useEffect } from 'react'; // Импортируйте useEffe
import LoginForm from '../LoginForm.jsx'
import './parallax.css'
import $ from 'jquery'; // Импортируйте jQuery


const Parallax = () => {

	useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.pageX / $(window).width();
      const y = e.pageY / $(window).height();

      // Устанавливаем трансформацию для фона
      $('.mouse-parallax_background').css(
        'transform',
        `translate(${x * 60 - 30}px, ${y * 60 - 30}px)`
      );
    };

    // Добавляем обработчик события
    $('.mouse-parallax').on('mousemove', handleMouseMove);

    // Очищение обработчика при размонтировании компонента
    return () => {
      $('.mouse-parallax').off('mousemove', handleMouseMove);
    };
  }, []); // Пустой массив зависимостей - код выполняется только один раз

	return(
		<>

		<div className='mouse-parallax'>
			<div className="mouse-parallax_background">
			</div>
			<LoginForm />
		</div>

	</>
	)
}
export default Parallax;