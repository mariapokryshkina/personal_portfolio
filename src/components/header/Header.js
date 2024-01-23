import "./style.css";


const Header = () => {
    return ( <header className="header">
				<div className="header__wrapper">
					<h1 className="header__title">
						<strong>Hi, my name is <em>Maria</em></strong><br/ >
						I am a junior front-end developer from Helsinki, Finland
					</h1>
					<div className="header__text">
						<p>With passion for learning and creating</p>
					</div>
					 <a href="https://github.com/mariapokryshkina/Marias_CV/raw/main/Pokryshkina_Maria_CV.pdf"
					 className="btn">Download my CV</a>	 

				</div>
				
			</header>  );
};
 
export default Header;
