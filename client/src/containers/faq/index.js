import React, { Component } from 'react';
import $ from 'jquery';

class FaqList extends Component {
  componentDidMount() {
    $('#accordion').on('show.bs.collapse', e => {
      $(e.target)
        .parent()
        .addClass('faq-shown');
    });
    $('#accordion').on('hide.bs.collapse', e => {
      $(e.target)
        .parent()
        .removeClass('faq-shown');
    });
  }

  componentWillUnmount() {
    $('#accordion').off('show.bs.collapse');
    $('#accordion').off('hide.bs.collapse');
  }

  render() {
    let faqIndex = 0;
    return (
      <section className="faq">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>VLAATIKKO FAQ</h2>
              <div id="accordion">
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        Mikä on VGOFin ja miten se toimii?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      vCase.gg on laatikoiden avaus sivu{' '}
                      <a href="http://vgo.gg/" target="_blank">
                        VGO esineille.{' '}
                      </a>. vLaatikot avataan vAvaimella.
                      <br />
                      <br />
                      VGO esineet ovat digitaalisia esineitä jotka ovat luotu käyttäen blokkiketju
                      teknologiaa, joten jokainen voi vaihtaa VGO esineitä kenelle haluaa,
                      koska haluaa, ilman mitään esteitä, vaihto
                      jäähyjä, tai pelkoa banneista. Jokainen VGO esine on
                      ainutlaatuinen ja luote Ethereum smart contractista.
                      Nämä esineet eivät voi joutua mihinkään
                      vaihto rajoituksiin kuten vaihtojäähyihin tai banneihin.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        Miten saan vAvaimen?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      On olemassa kaksi tapaa saada vAvain:
                      <ul>
                        <li>
                          Ostamalla yhden kauppapaikalta joka tulee VGO
                          esineitä
                        </li>
                        <li>Vastaanota vAvain vaihdossa toiselta VGO käyttäjältä</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        Miksi on olemassa vain yhden tyyppisiä vAvaimia?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Yksinkertaisuuden vuoksi, mikä tahansa vAvain voi avata mitä tahansa vLaatikoita.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        Miksi vLaatikon avaaminen kestää niin kauan?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      VGO on pohjautunut Ethereum blokkiketjulle toistaiseksi,
                      mikä tuo monia etuja yli perinteisten laatikoiden avaus
                      sivujen, lähinnä läpinäkyvyyden vuoksi. Kuitenkin kunnes siirrymme
                      WAX Blokkiketjulle, laatikon avaus voi kestää kaksi
                      minuuttia Ethereum blokkiketjun nopeuden vuoksi.
                      WAX Blokkiketju tulee olemaan paljon nopeampi ja
                      se tekee laatikoiden avaamisesta välitöntä.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        Mihin minun VGO esineet menee kun vLaatikko on avattu?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      VGO esineet jotka sinä vastaanotat vLaatikoiden avaamisesta
                      lähetetään sinun{' '}
                      <a href="//trade.opskins.com/inventory" target="_blank">
                        OPSkins ExpressTrade tavaraluetteloosi
                      </a>.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        Mitä voin tehdä VGO esineilläni kun vastaanotan ne?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Voit vaihtaa VGO esineesi toiselle VGO käyttäjälle ilmaiseksi
                      meidän sivullamme, niin pitkään kun teillä on heidän VGO vaihto URL. Sinä
                      voit myös myydä tai vaihtaa niitä millä tahansa kauppapaikalla joka
                      tukee VGO esineitä.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        Mitkä ovat vLaatikko avaamisen mahdollisuudet?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      vLaatikoiden avaamisessa mahdollisuudet ovat noin 3 kertaa paremmat kuin
                      Steamin laatikoissa.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        Miten tiedän että vLaatikon mahdollisuudet ovat mitä väität
                        niiden olevan?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Voit katsoa vLaatikon avaamisen tulokset koska
                      kaikki esineet ovat luotu VGOFinistä ja ovat nauhoitettu
                      Ethereum blokkiketjuun. Jokainen esine luo linkin blokkiketjun maksuun.
                      Tämän vuoksi VGO esineitä ei voida kopioida.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        Voinko menettää VGO esineeni, tai voiko Steam sulkea VGO:n?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Et. Koska VGO käyttää blokkiketju teknologiaa, kukaan, ei edes Steam voi sulkea sitä.
                      Jos OPSkins ExpressTrade sivu häviäisi huomenna, tavaroitten data silti säilyisi ja
                      voisi olla uudelleen käytettävissä.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        Miksi on olemassa minimi laatikoiden avausmäärä?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Koska VGOFin toimii Ethereum blokkiketjussa tällä hetkellä, on minimi avausmäärä Ethereum-lisämaksujen takia.
                      Kun siirrymme WAX Blokkiketjuun, minimimäärä vaihtuu.
                    </div>
                  </div>
                </div>
                <h2 className="sub-header">
                  Miten voin rakentaa oman vLaatikoiden avaus sivun?
                </h2>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        Voinko luoda oman VGO laatikoiden avaus sivun?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Kyllä. VGOFin koodi on julkinen ja voit löytää sen meidän{' '}
                      <a href="https://github.com/vgoskins" taget="_blank">
                        GitHubista
                      </a>.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        Onko olemassa kumppaniohjelma VGOFin sivuille?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Kyllä. Kaikki sivut, jotka hyväksyvät VGOFin-toiminnallisuuden saavat automaattisesti 5%:n maksun Ethereumina kun joku avaa laatikon avaimella.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FaqList;
