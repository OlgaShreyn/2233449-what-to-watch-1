import Logo from '../../components/logo';
import Films from '../../FilmsList';
import Card from '../../components/card_item';
import renderActivePart from './render-active-part';
import Footer from '../../components/footer';

function MoviePage() {
  const films = new Films();
  const activePart = 'overview';
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo className="logo__link"/>
            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">The Grand Budapest Hotel</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">Drama</span>
                <span className="film-card__year">2014</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"/>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <a href="add-review.html" className="btn film-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster"
                width="218" height="327"
              />
            </div>
            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className={activePart == 'overview' ? 'film-nav__item' : 'film-nav__item film-nav__item--active'}>
                    <a href="#" className="film-nav__link">Overview</a>
                  </li>
                  <li className={activePart == 'details' ? 'film-nav__item' : 'film-nav__item film-nav__item--active'}>
                    <a href="#" className="film-nav__link">Details</a>
                  </li>
                  <li className={activePart == 'review' ? 'film-nav__item' : 'film-nav__item film-nav__item--active'}>
                    <a href="#" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>
              {renderActivePart(activePart)}
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <Card image={films.GrindelwaldImageData} href='film-page.html'
              name='Fantastic Beasts: The Crimes of Grindelwald'
            />
            <Card image={films.RhapsodyImageData} href='film-page.html' name='Bohemian Rhapsody'/>
            <Card image={films.MacbethImageData} href='film-page.html' name='Macbeth'/>
            <Card image={films.AviatorImageData} href='film-page.html' name='Aviator'/>

          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
}
