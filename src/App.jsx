import styles from "./style";
import { Navbar, Billing, CardDeal, Business, Clients, CTA, Stats, Footer, Testimonials,  Hero,}  from "./components"
const App = () => (
    <div className='bg-primary w-full overfollow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        </div>
              <Navbar />
       </div>
          <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                  <Hero />
            </div>

          </div>
          <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                  <Stats /> 
                  <Business /> 
                  <CardDeal /> 
                  <Billing /> 
                  <Testimonials /> 
                  <Clients /> 
                  <CTA /> 
                  <Footer /> 
            </div>

          </div>

    </div>
  )


export default App