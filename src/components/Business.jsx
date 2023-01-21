import { features } from "../constants"
import styles, {layout} from "../style"
import Button from './Button'
const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You Do the Business, <br className="sm:block hidden"/> We'll handle the money.</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-[5]`}>With the right credit card, you can impove your financial life by building credit, earning rewards and saving money.
            But with the hundreds of credit cards in the markey.
          </p>
            <Button  style="mt-10"/>
      </div>
    </section>
  )
}

export default Business