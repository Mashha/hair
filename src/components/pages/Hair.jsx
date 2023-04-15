import { Link } from "react-router-dom";
import "../../styles/hair.css";
import { NavHashLink } from "react-router-hash-link";

export default function Hair() {
  return (
    <>
      <div className="hair-hero">
        <h2>Frizerstvo</h2>
      </div>
      <main className="hair-main">
        <div className="hair-hero-inner">
          <p>
            Whether long or short, and no matter the condition of your hair, our
            team will give you that unique haircut that accentuates your face,
            meets your expectations, and boosts your confidence. Our haircut
            services, and the actual cuts, are easy to maintain for that perfect
            hairdo, and our haircut recommendations will help you care for your
            new do and keep your new cut and style lasting longer.
          </p>

          <div className="hair-hero-inner-links">
            <NavHashLink to="#female" smooth>
              Ženske
            </NavHashLink>
            <NavHashLink to="#male" smooth>
              Moški
            </NavHashLink>
          </div>
        </div>

        <div className="service-top" id="female">
          <h2>Žensko striženje</h2>
          <div className="service-image">
            <img
              src="https://images.unsplash.com/photo-1614609819116-eee9c271a928?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1203&q=80"
              alt=""
            />
          </div>
        </div>

        <div className="services-container">
          <div className="price-item-wrapper">
            <h2 className="price-item-title">Striženje, umivanje in fen </h2>
            <div className="price-item-inner">
              <div className="service-wrapper">
                <div className="service-name">Kratki</div>
                <div className="price">
                  35<span>&euro;</span>
                </div>
              </div>
              <div className="service-wrapper">
                <div className="service-name">Srednje dolgi</div>
                <div className="price">
                  36<span>&euro;</span>
                </div>
              </div>
              <div className="service-wrapper">
                <div className="service-name">Dolgi</div>
                <div className="price">
                  38<span>&euro;</span>
                </div>
              </div>
              <div className="service-wrapper">
                <div className="service-name">Zelo dolgi</div>
                <div className="price">
                  40<span>&euro;</span>
                </div>
              </div>
            </div>
            <div className="item-divider"></div>
          </div>

          <div className="price-item-wrapper">
            <h2 className="price-item-title">
              Dekliško striženje, umivanje in fen{" "}
            </h2>
            <div className="price-item-inner">
              <div className="service-wrapper">
                <div className="service-name">Do 5 let</div>
                <div className="price">
                  20<span>&euro;</span>
                </div>
              </div>
              <div className="service-wrapper">
                <div className="service-name">Do 10 let</div>
                <div className="price">
                  25<span>&euro;</span>
                </div>
              </div>
            </div>
            <div className="item-divider"></div>
          </div>

          <div className="price-item-wrapper">
            <h2 className="price-item-title">Striženje na suhe lase</h2>
            <div className="price-item-inner">
              <div className="service-wrapper">
                <div className="service-name">Žensko</div>
                <div className="price">
                  30<span>&euro;</span>
                </div>
              </div>
              <div className="service-wrapper">
                <div className="service-name">Dekliško</div>
                <div className="price">
                  15<span>&euro;</span>
                </div>
              </div>
            </div>
            <div className="item-divider"></div>
          </div>

          <div className="price-item-wrapper">
            <h2 className="price-item-title">Striženje za upokojence</h2>
            <div className="price-item-inner">
              <div className="service-wrapper">
                <div className="service-name">Žensko</div>
                <div className="price">
                  30<span>&euro;</span>
                </div>
              </div>
            </div>
            <div className="item-divider"></div>
          </div>

          <div className="price-item-wrapper">
            <h2 className="price-item-title">Polovično striženje</h2>
            <div className="price-item-inner">
              <div className="service-wrapper">
                <div className="service-name">Žensko</div>
                <div className="price">
                  15<span>&euro;</span>
                </div>
              </div>
            </div>
            <div className="item-divider"></div>
          </div>

          <div className="price-item-wrapper">
            <h2 className="price-item-title">Fr-fru</h2>
            <div className="price-item-inner">
              <div className="service-wrapper">
                <div className="service-name"></div>
                <div className="price">
                  5<span>&euro;</span>
                </div>
              </div>
            </div>
            <div className="item-divider"></div>
          </div>
        </div>

        <div className="service-top">
          <h2>Oblikovanje las</h2>
          <div className="service-image">
            <img
              src="https://images.unsplash.com/photo-1583743599150-3b6048ecf084?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>
        </div>

        <div className="services-container">
          <div className="price-item-wrapper">
            <h2 className="price-item-title">Fen frizura in umivanje</h2>
            <div className="price-item-inner">
              <div className="service-wrapper">
                <div className="service-name">Kratki</div>
                <div className="price">
                  18<span>&euro;</span>
                </div>
              </div>
              <div className="service-wrapper">
                <div className="service-name">Srednje dolgi</div>
                <div className="price">
                  20<span>&euro;</span>
                </div>
              </div>
              <div className="service-wrapper">
                <div className="service-name">Dolgi</div>
                <div className="price">
                  22<span>&euro;</span>
                </div>
              </div>
              <div className="service-wrapper">
                <div className="service-name">Zelo dolgi</div>
                <div className="price">
                  24<span>&euro;</span>
                </div>
              </div>
              <div className="service-wrapper">
                <div className="service-name">Sušenje brez krtače</div>
                <div className="price">
                  10<span>&euro;</span>
                </div>
              </div>
            </div>
            <div className="item-divider"></div>
          </div>

          <div className="price-item-wrapper">
            <h2 className="price-item-title">Oblikovanje</h2>
            <div className="price-item-inner">
              <div className="service-wrapper">
                <div className="service-name">Likanje las</div>
                <div className="price">
                  8<span>&euro;</span>
                </div>
              </div>
              <div className="service-wrapper">
                <div className="service-name">Kodranje las</div>
                <div className="price">
                  10<span>&euro;</span>
                </div>
              </div>
              <div className="service-wrapper">
                <div className="service-name">Kitke</div>
                <div className="no-price">Po dogovoru</div>
              </div>
            </div>
            <div className="item-divider"></div>
          </div>

          <div className="price-item-wrapper">
            <h2 className="price-item-title">Večerna prinčeska</h2>
            <div className="price-item-inner">
              <div className="service-wrapper">
                <div className="service-name">Do 30 min</div>
                <div className="price">
                  50<span>&euro;</span>
                </div>
              </div>
              <div className="service-wrapper">
                <div className="service-name">Do 60 min</div>
                <div className="price">
                  100<span>&euro;</span>
                </div>
              </div>
            </div>
            <div className="item-divider"></div>
          </div>
        </div>

        <div className="service-top">
          <h2>Barvanje ženske</h2>
          <div className="service-image">
            <img
              src="https://plus.unsplash.com/premium_photo-1669675936787-017c402baa4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
              alt=""
            />
          </div>
        </div>

        <div className="services-container">
          <div className="price-item-wrapper">
            <h2 className="price-item-title">Barvanje</h2>
            <div className="price-item-inner">
              <div className="service-wrapper">
                <div className="service-name">Kratki</div>
                <div className="price">
                  33<span>&euro;</span>
                </div>
              </div>
              <div className="service-wrapper">
                <div className="service-name">Srednje dolgi</div>
                <div className="price">
                  38<span>&euro;</span>
                </div>
              </div>
              <div className="service-wrapper">
                <div className="service-name">Dolgi</div>
                <div className="price">
                  40<span>&euro;</span>
                </div>
              </div>
              <div className="service-wrapper">
                <div className="service-name">Zelo dolgi</div>
                <div className="price">
                  44<span>&euro;</span>
                </div>
              </div>
              <div className="service-wrapper">
                <div className="service-name">Izrastki</div>
                <div className="price">
                  30<span>&euro;</span>
                </div>
              </div>
            </div>
            <div className="item-divider"></div>
          </div>

          <div className="price-item-wrapper">
            <h2 className="price-item-title">Prameni</h2>
            <div className="price-item-inner">
              <div className="service-wrapper">
                <div className="service-name">Izrastek - cela glava</div>
                <div className="price">
                  50<span>&euro;</span>
                </div>
              </div>
              <div className="service-wrapper">
                <div className="service-name">Izrastek - polovica glave</div>
                <div className="price">
                  35<span>&euro;</span>
                </div>
              </div>
              <div className="service-wrapper">
                <div className="service-name">Cela dolžina - cela glava</div>
                <div className="price">
                  80<span>&euro;</span>
                </div>
              </div>
              <div className="service-wrapper">
                <div className="service-name">
                  Cela dolžina - polovica glave
                </div>
                <div className="price">
                  40<span>&euro;</span>
                </div>
              </div>
              <div className="service-wrapper">
                <div className="service-name">Nekaj pramenov</div>
                <div className="price">
                  25<span>&euro;</span>
                </div>
              </div>
            </div>
            <div className="item-divider"></div>
          </div>

          <div className="price-item-wrapper">
            <h2 className="price-item-title">Ostalo</h2>
            <div className="price-item-inner">
              <div className="service-wrapper">
                <div className="service-name">Balayage</div>
                <div className="price">
                  80<span>&euro;</span>
                </div>
              </div>
              <div className="service-wrapper">
                <div className="service-name">Preliv</div>
                <div className="price">
                  32<span>&euro;</span>
                </div>
              </div>
              <div className="service-wrapper">
                <div className="service-name">Blanž kopel</div>
                <div className="price">
                  30<span>&euro;</span>
                </div>
              </div>
              <div className="service-wrapper">
                <div className="service-name">Barvanje obrvi</div>
                <div className="price">
                  5<span>&euro;</span>
                </div>
              </div>
            </div>
            <div className="item-divider"></div>
          </div>
        </div>

        <div className="service-top" id="male">
          <h2>Moško striženje</h2>
          <div className="service-image">
            <img
              src="https://plus.unsplash.com/premium_photo-1661715634313-981d89dfc56f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbiUyMGhhaXIlMjBkcmVzc2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
        </div>

        <div className="services-container">
          <div className="price-item-wrapper">
            <h2 className="price-item-title">Striženje, umivanje in fen </h2>
            <div className="price-item-inner">
              <div className="service-wrapper">
                <div className="service-name">Kratki</div>
                <div className="price">
                  23<span>&euro;</span>
                </div>
              </div>
              <div className="service-wrapper">
                <div className="service-name">Dolgi</div>
                <div className="price">
                  28<span>&euro;</span>
                </div>
              </div>
            </div>
            <div className="item-divider"></div>
          </div>

          <div className="price-item-wrapper">
            <h2 className="price-item-title">Striženje</h2>
            <div className="price-item-inner">
              <div className="service-wrapper">
                <div className="service-name">Kratki</div>
                <div className="price">
                  20<span>&euro;</span>
                </div>
              </div>
              <div className="service-wrapper">
                <div className="service-name">Dolgi</div>
                <div className="price">
                  25<span>&euro;</span>
                </div>
              </div>
              <div className="service-wrapper">
                <div className="service-name">Polovično striženje</div>
                <div className="price">
                  12<span>&euro;</span>
                </div>
              </div>
            </div>
            <div className="item-divider"></div>
          </div>

          <div className="price-item-wrapper">
            <h2 className="price-item-title">Striženje za upokojence</h2>
            <div className="price-item-inner">
              <div className="service-wrapper">
                <div className="service-name">Moško</div>
                <div className="price">
                  15<span>&euro;</span>
                </div>
              </div>
            </div>
            <div className="item-divider"></div>
          </div>

          <div className="price-item-wrapper">
            <h2 className="price-item-title">Otroško striženje</h2>
            <div className="price-item-inner">
              <div className="service-wrapper">
                <div className="service-name">Do 5 let</div>
                <div className="price">
                  15<span>&euro;</span>
                </div>
              </div>
              <div className="service-wrapper">
                <div className="service-name">Do 10 let</div>
                <div className="price">
                  18<span>&euro;</span>
                </div>
              </div>
            </div>
            <div className="item-divider"></div>
          </div>
        </div>

        <div className="service-top">
          <h2>Barvanje moški</h2>
          <div className="service-image">
            <img
              src="https://cuttersyard.com/wp-content/uploads/2022/06/luis-quintero-zp5swTZerb0-unsplash-scaled.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="services-container">
          <div className="price-item-wrapper">
            <h2 className="price-item-title">Barvanje</h2>
            <div className="price-item-inner">
              <div className="service-wrapper">
                <div className="service-name">Barvanje las</div>
                <div className="price">
                  30<span>&euro;</span>
                </div>
              </div>
              <div className="service-wrapper">
                <div className="service-name">Barvanje brade</div>
                <div className="price">
                  15<span>&euro;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
