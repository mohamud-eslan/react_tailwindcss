import { card } from "../assets";
import styles, {layout} from "../style";
import Button from "./Button";

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br sm:block hidden/> in few steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}> Best credit card offers. Chase Freedom Unlimited®: Earn bonus cash back in 
          popular categories, including dining and some</p>

          <Button styles="mt-10"/>
      </div>

    </section>
  )


export default CardDeal